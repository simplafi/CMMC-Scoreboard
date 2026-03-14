import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AssessmentProvider } from "@/context/AssessmentContext";
import DomainGrid from "@/pages/DomainGrid";
import DomainView from "@/pages/DomainView";
import ResultsPage from "@/pages/ResultsPage";
import AuthPage from "@/pages/AuthPage";
import NotFound from "@/pages/not-found";
import { useAuth } from "@/hooks/use-auth";

function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return null;
  if (!isAuthenticated) return <Redirect to="/auth" />;
  return <Component />;
}

function Router() {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <Switch>
      <Route path="/auth">
        {!isLoading && isAuthenticated ? <Redirect to="/" /> : <AuthPage />}
      </Route>
      <Route path="/" component={() => <ProtectedRoute component={DomainGrid} />} />
      <Route path="/domain/:familyId" component={() => <ProtectedRoute component={DomainView} />} />
      <Route path="/results" component={() => <ProtectedRoute component={ResultsPage} />} />
      <Route component={NotFound} />
    </Switch>
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
