import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth } from "@/hooks/use-auth";
import { Link } from "wouter";
import { LogOut, Save, Loader2, ArrowLeft } from "lucide-react";
import simplifiLogo from "@assets/SImplafi_Logo_2025-white_1768695773677.png";

interface HeaderProps {
  isSaving?: boolean;
  lastSaved?: Date | null;
  domainName?: string;
  onBack?: () => void;
}

export function Header({ isSaving, lastSaved, domainName, onBack }: HeaderProps) {
  const { user, isLoading, isAuthenticated, logout } = useAuth();

  const getInitials = () => {
    if (!user) return "U";
    const first = user.firstName?.[0] || "";
    const last = user.lastName?.[0] || "";
    return (first + last).toUpperCase() || user.email?.[0]?.toUpperCase() || "U";
  };

  const formatLastSaved = () => {
    if (!lastSaved) return null;
    const diff = Date.now() - lastSaved.getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return "Just now";
    if (minutes === 1) return "1 min ago";
    if (minutes < 60) return `${minutes} min ago`;
    return lastSaved.toLocaleTimeString();
  };

  return (
    <header className="sticky top-0 z-50 bg-primary">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 h-16 sm:h-20 flex items-center justify-between gap-3">

        {/* Left: back button or home link */}
        <div className="flex items-center gap-2 flex-shrink-0 min-w-[80px] sm:min-w-[120px]">
          {onBack ? (
            <Button variant="ghost" size="sm" onClick={onBack} className="gap-1.5 text-white/70 hover:text-white hover:bg-white/10 px-2">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back</span>
            </Button>
          ) : (
            <Link
              href="/"
              className="hidden sm:flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Home
            </Link>
          )}
        </div>

        {/* Center: brand or domain name */}
        <div className="flex-1 flex justify-center items-center min-w-0">
          {domainName ? (
            <h2 className="text-sm sm:text-base font-semibold truncate text-center text-white">{domainName}</h2>
          ) : (
            <div className="flex flex-col items-center gap-0.5">
              <div className="flex items-center gap-2.5">
                <img src={simplifiLogo} alt="Simplafi" className="h-5 sm:h-7 w-auto" />
                <span className="text-white font-semibold text-base sm:text-lg tracking-wide">Compliance Tracker</span>
              </div>
              <p className="text-white/60 text-[10px] sm:text-xs hidden sm:block text-center leading-tight">
                Untangle the complexity of CMMC with the Simplafi Compliance Tracker
              </p>
            </div>
          )}
        </div>

        {/* Right: save indicator + user menu */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 min-w-[80px] sm:min-w-[120px] justify-end">
          {isAuthenticated && (
            <div className="hidden sm:flex items-center gap-2 text-xs text-white/60 mr-1">
              {isSaving ? (
                <>
                  <Loader2 className="w-3 h-3 animate-spin" />
                  <span>Saving…</span>
                </>
              ) : lastSaved ? (
                <>
                  <Save className="w-3 h-3" />
                  <span>Saved {formatLastSaved()}</span>
                </>
              ) : null}
            </div>
          )}

          {isLoading ? (
            <div className="w-8 h-8 rounded-full bg-white/20 animate-pulse" />
          ) : isAuthenticated && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 hover:bg-white/10">
                  <Avatar className="h-6 w-6 sm:h-7 sm:w-7">
                    <AvatarImage src={user.profileImageUrl || undefined} alt={user.firstName || "User"} />
                    <AvatarFallback className="text-xs bg-white/20 text-white">{getInitials()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">{user.firstName} {user.lastName}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => logout()} className="cursor-pointer">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="ghost" className="h-8 px-3 text-sm text-white hover:text-white hover:bg-white/10">
              <Link href="/auth">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
