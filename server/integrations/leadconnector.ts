const API_BASE = "https://services.leadconnectorhq.com";
const API_VERSION = "2021-07-28";

interface CRMContact {
  email: string;
  firstName?: string;
  lastName?: string;
}

function getHeaders(): Record<string, string> {
  return {
    Authorization: `Bearer ${process.env.LEADCONNECTOR_API_KEY}`,
    Version: API_VERSION,
    "Content-Type": "application/json",
  };
}

async function findContactByEmail(email: string): Promise<string | null> {
  const locationId = process.env.LEADCONNECTOR_LOCATION_ID;
  const url = `${API_BASE}/contacts/search/duplicate?locationId=${locationId}&email=${encodeURIComponent(email)}`;

  const res = await fetch(url, { method: "GET", headers: getHeaders() });

  if (!res.ok) {
    const body = await res.text();
    console.log(`[LeadConnector] Search returned ${res.status}: ${body}`);
    return null;
  }

  const data = await res.json() as any;
  if (data.contact?.id) {
    return data.contact.id;
  }
  if (Array.isArray(data.contacts) && data.contacts.length > 0) {
    return data.contacts[0].id;
  }
  return null;
}

async function createContact(contact: CRMContact): Promise<string | null> {
  const locationId = process.env.LEADCONNECTOR_LOCATION_ID;
  const url = `${API_BASE}/contacts/`;

  const res = await fetch(url, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({
      firstName: contact.firstName || "",
      lastName: contact.lastName || "",
      email: contact.email,
      locationId,
      source: "Simplafi CMMC Tracker",
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.log(`[LeadConnector] Create contact returned ${res.status}: ${body}`);
    return null;
  }

  const data = await res.json() as any;
  return data.contact?.id || null;
}

export async function syncContactToCRM(contact: CRMContact): Promise<void> {
  if (!process.env.LEADCONNECTOR_API_KEY || !process.env.LEADCONNECTOR_LOCATION_ID) {
    return;
  }

  if (!contact.email) {
    return;
  }

  try {
    const existingId = await findContactByEmail(contact.email);
    if (existingId) {
      console.log(`[LeadConnector] Contact already exists: ${contact.email} (${existingId})`);
      return;
    }

    const newId = await createContact(contact);
    if (newId) {
      console.log(`[LeadConnector] Created contact: ${contact.email} (${newId})`);
    }
  } catch (error) {
    console.log(`[LeadConnector] Sync failed for ${contact.email}:`, error instanceof Error ? error.message : error);
  }
}
