"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { FlaskConical, Loader2, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
}

function LoginContent() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(
    searchParams.get("error") === "auth"
      ? "Magic link expired or invalid. Please try again."
      : null
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-14 w-14 rounded-2xl bg-blue-600 flex items-center justify-center">
            <FlaskConical className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-xl font-bold">CHEN 4470</h1>
          <p className="text-sm text-muted-foreground">
            Methanol Plant Design Assistant
          </p>
        </div>

        {sent ? (
          <div className="space-y-3 text-center">
            <div className="flex justify-center">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <p className="text-sm font-medium">Check your email</p>
            <p className="text-sm text-muted-foreground">
              We sent a magic link to <strong>{email}</strong>. Click the link
              in the email to sign in.
            </p>
            <Button
              variant="ghost"
              className="text-xs"
              onClick={() => {
                setSent(false);
                setError(null);
              }}
            >
              Use a different email
            </Button>
          </div>
        ) : (
          <>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1.5"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                />
              </div>

              {error && (
                <p className="text-sm text-destructive bg-destructive/10 rounded-md px-3 py-2">
                  {error}
                </p>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <Mail className="h-4 w-4 mr-2" />
                )}
                Send Magic Link
              </Button>
            </form>

            <p className="text-center text-xs text-muted-foreground">
              Enter your email and we&apos;ll send you a sign-in link.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
