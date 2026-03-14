import { Switch, Route, Redirect, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AssessmentProvider } from "@/context/AssessmentContext";
import { ProgressTracker } from "@/components/ProgressTracker";
import DomainGrid from "@/pages/DomainGrid";
import DomainView from "@/pages/DomainView";
import ResultsPage from "@/pages/ResultsPage";
import WelcomePage from "@/pages/WelcomePage";
import AuthPage from "@/pages/AuthPage";
import NotFound from "@/pages/not-found";
import { useAuth } from "@/hooks/use-auth";

function AssessmentTracker() {
  const [location] = useLocation();
  const showTracker = location.startsWith("/assess") || location.startsWith("/domain") || location === "/results";
  if (!showTracker) return null;
  return <ProgressTracker />;
}

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <>
      <Switch>
        <Route path="/auth">
          {!isLoading && isAuthenticated ? <Redirect to="/assess" /> : <AuthPage />}
        </Route>
        <Route path="/" component={WelcomePage} />
        <Route path="/assess" component={DomainGrid} />
        <Route path="/domain/:familyId" component={DomainView} />
        <Route path="/results" component={ResultsPage} />
        <Route component={NotFound} />
      </Switch>
      <AssessmentTracker />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AssessmentProvider>
          <Router />
        </AssessmentProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
