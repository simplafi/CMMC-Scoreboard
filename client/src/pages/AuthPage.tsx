import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Shield } from "lucide-react";
import simplifiLogo from "@assets/SImplafi_Logo_2025-white_1768695773677.png";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

const registerSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
}).refine((d) => d.password === d.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type LoginForm = z.infer<typeof loginSchema>;
type RegisterForm = z.infer<typeof registerSchema>;

function LoginTab({ onSuccess }: { onSuccess: () => void }) {
  const { login, isLoggingIn } = useAuth();
  const { register, handleSubmit, formState: { errors }, setError } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      await login(data);
      onSuccess();
    } catch (err) {
      setError("root", { message: err instanceof Error ? err.message : "Login failed" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="login-email">Email</Label>
        <Input id="login-email" type="email" placeholder="you@company.com" {...register("email")} />
        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="login-password">Password</Label>
        <Input id="login-password" type="password" placeholder="••••••••" {...register("password")} />
        {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
      </div>
      {errors.root && (
        <p className="text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-md">
          {errors.root.message}
        </p>
      )}
      <Button type="submit" className="w-full" disabled={isLoggingIn}>
        {isLoggingIn ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Signing in...</> : "Sign in"}
      </Button>
    </form>
  );
}

function RegisterTab({ onSuccess }: { onSuccess: () => void }) {
  const { register: registerUser, isRegistering } = useAuth();
  const { register, handleSubmit, formState: { errors }, setError } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    try {
      await registerUser({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
      });
      onSuccess();
    } catch (err) {
      setError("root", { message: err instanceof Error ? err.message : "Registration failed" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="reg-first">First name</Label>
          <Input id="reg-first" placeholder="Jane" {...register("firstName")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reg-last">Last name</Label>
          <Input id="reg-last" placeholder="Smith" {...register("lastName")} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="reg-email">Email</Label>
        <Input id="reg-email" type="email" placeholder="you@company.com" {...register("email")} />
        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="reg-password">Password</Label>
        <Input id="reg-password" type="password" placeholder="Min 8 characters" {...register("password")} />
        {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="reg-confirm">Confirm password</Label>
        <Input id="reg-confirm" type="password" placeholder="••••••••" {...register("confirmPassword")} />
        {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>}
      </div>
      {errors.root && (
        <p className="text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-md">
          {errors.root.message}
        </p>
      )}
      <Button type="submit" className="w-full" disabled={isRegistering}>
        {isRegistering ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Creating account...</> : "Create account"}
      </Button>
    </form>
  );
}

export default function AuthPage() {
  const [, navigate] = useLocation();
  const [tab, setTab] = useState<"login" | "register">("login");

  const handleSuccess = () => navigate("/assess");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-primary px-4 py-3 flex items-center justify-center">
        <img src={simplifiLogo} alt="Simplafi" className="h-6 w-auto" />
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-primary/10">
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-2xl font-bold">CMMC Compliance Tracker</h1>
            <p className="text-muted-foreground text-sm">
              Sign in to save and resume your NIST 800-171 assessments
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <a
                href="/api/auth/microsoft"
                className="flex items-center justify-center gap-3 w-full px-4 py-2.5 rounded-md border bg-background hover:bg-muted transition-colors text-sm font-medium"
              >
                <svg viewBox="0 0 21 21" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="9" height="9" fill="#F25022" />
                  <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
                  <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
                  <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
                </svg>
                Sign in with Microsoft
              </a>
            </CardContent>
          </Card>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with email</span>
            </div>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <Tabs value={tab} onValueChange={(v) => setTab(v as "login" | "register")}>
                <TabsList className="w-full">
                  <TabsTrigger value="login" className="flex-1">Sign in</TabsTrigger>
                  <TabsTrigger value="register" className="flex-1">Create account</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent className="pt-4">
              {tab === "login" ? (
                <>
                  <CardDescription className="mb-4 text-xs">
                    Sign in to access your saved assessments.
                  </CardDescription>
                  <LoginTab onSuccess={handleSuccess} />
                </>
              ) : (
                <>
                  <CardDescription className="mb-4 text-xs">
                    Create a free account to save your progress and access your assessments from anywhere.
                  </CardDescription>
                  <RegisterTab onSuccess={handleSuccess} />
                </>
              )}
            </CardContent>
          </Card>

          <p className="text-center text-xs text-muted-foreground">
            By signing in you agree to use this tool for authorized compliance assessment purposes.
          </p>
        </div>
      </main>
    </div>
  );
}
