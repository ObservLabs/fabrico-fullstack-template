import { SignUp } from "@/components/auth/SignUp";
import { Link, Navigate } from "react-router-dom";
import { CheckSquare } from "lucide-react";
import { useFabrico } from "@fabrico/sdk/react";

export default function SignUpPage() {
  const { user, isLoaded } = useFabrico();
  if (isLoaded && user) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 py-12">
      <Link to="/" className="flex items-center gap-2 font-display text-2xl font-semibold tracking-tight mb-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <CheckSquare className="h-6 w-6" />
        </div>
        <span>todone</span>
      </Link>
      <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-md">
        <h1 className="text-2xl font-semibold mb-1">Create an account</h1>
        <p className="text-sm text-muted-foreground mb-6">Start organizing your tasks today.</p>
        <SignUp />
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/sign-in" className="text-primary hover:underline underline-offset-4">
          Sign in
        </Link>
      </p>
    </div>
  );
}