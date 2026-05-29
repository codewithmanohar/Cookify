"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // 👈 add useSearchParams
import { signIn, useSession } from "next-auth/react";
// ... other imports

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";


export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams(); // 👈
  const { data: session, status } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // 👈

  useEffect(() => {
    // 👇 Pick up error thrown from authorize()
    const urlError = searchParams.get("error");
    if (urlError) setError(urlError);
  }, [searchParams]);

  useEffect(() => {
    if (status === "loading") return;
    if (session) router.push("/");
  }, [session, status, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/");
    } else {
      setError(res?.error || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* 👇 Show error message inline */}
          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            Login with Google
          </Button>

          <p className="text-sm text-center">
            Don't have an account?{" "}
            <span
              onClick={() => router.push("/signup")}
              className="text-blue-500 cursor-pointer"
            >
              Signup
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}


