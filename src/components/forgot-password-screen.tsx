"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface ForgotPasswordScreenProps {
  onSendCode: (email: string) => void;
  onBack: () => void;
}

export default function ForgotPasswordScreen({
  onSendCode,
  onBack,
}: ForgotPasswordScreenProps) {
  const [email, setEmail] = useState("");

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSendCode(email);
    }
  };

  return (
    <div className="min-h-screen  bg-color flex flex-col items-center justify-center px-6">
      <div className=" form-color p-8 rounded-2xl w-full max-w-sm space-y-8 shadow-2xl shadow-black/30 backdrop-blur-md border border-white/10">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="font-color cursor-pointer hover:text-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="flex justify-center">
          <Image src="/logo.png" alt="Logo" width={260} height={75} />
        </div>

        {/* Title */}
        <div className="text-center">
          <h2 className="text-xl font-color font-light">Forgot password?</h2>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="font-color text-sm leading-relaxed">
            Don't worry, it happens. Please enter the email associated with your
            account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSendCode} className="space-y-8">
          <div>
            <Input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-0 border-b border-font-color rounded-none text-white placeholder:text-white/60 focus:border-white focus:ring-0 pb-2"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full btn-color hover:bg-amber-300 text-slate-800 font-medium py-3 rounded-full"
          >
            SEND CODE
          </Button>
        </form>
      </div>
    </div>
  );
}
