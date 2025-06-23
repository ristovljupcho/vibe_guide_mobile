"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface LoginScreenProps {
  onForgotPassword: () => void;
  onRegister: () => void;
}

export default function LoginScreen({ onForgotPassword, onRegister }: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-color flex items-center justify-center px-6">
      <div className="form-color p-8 rounded-2xl w-full max-w-sm space-y-8 shadow-2xl shadow-black/30 backdrop-blur-md border border-white/10">
        {/* Logo */}
        <div className="flex justify-center">
          <Image src="/logo.png" alt="Logo" width={260} height={75} />
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-0 border-b border-font-color rounded-none text-white placeholder:text-white/60 focus:border-white focus:ring-0 pb-2"
              required
            />
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border-0 border-b border-font-color rounded-none text-white placeholder:text-white/60 focus:border-white focus:ring-0 pb-2"
              required
            />
          </div>

          <div className="text-right">
            <button
              type="button"
              onClick={onForgotPassword}
              className="font-color text-sm hover:text-white transition-colors"
            >
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full btn-color hover:bg-amber-300 text-slate-800 font-medium py-3 rounded-full"
          >
            LOGIN
          </Button>
        </form>

        {/* Register Link */}
        <div className="text-center">
          <p className="font-color text-sm">
            Don&apos;t have an account?{" "}
            <button onClick={onRegister} className="text-white underline hover:no-underline">
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
