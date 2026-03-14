import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { Header } from "@/components/Header";
import { LandingPage } from "@/components/LandingPage";

export default function WelcomePage() {
  const [, navigate] = useLocation();
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header isSaving={false} lastSaved={null} />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
          <LandingPage onStart={() => navigate("/")} isAuthenticated={isAuthenticated} />
        </div>
      </main>
    </div>
  );
}
