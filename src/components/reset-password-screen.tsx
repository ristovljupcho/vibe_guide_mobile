"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface ResetPasswordScreenProps {
  onReset: () => void;
  onBack: () => void;
}

export default function ResetPasswordScreen({
  onReset,
  onBack,
}: ResetPasswordScreenProps) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      // Handle password reset logic here
      console.log("Password reset:", { newPassword });
      onReset();
    }
  };

  return (
    <div className="min-h-screen bg-color flex flex-col items-center justify-center px-6">
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
          <h2 className="text-xl font-color font-light">Reset password</h2>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="font-color text-sm">
            Please type something you will remember :)
          </p>
        </div>

        {/* Reset Form */}
        <form onSubmit={handleReset} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder:text-white/60 focus:border-white focus:ring-0 pb-2"
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder:text-white/60 focus:border-white focus:ring-0 pb-2"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full btn-color hover:bg-amber-300 text-slate-800 font-medium py-3 rounded-full"
            disabled={
              !newPassword ||
              !confirmPassword ||
              newPassword !== confirmPassword
            }
          >
            RESET
          </Button>
        </form>
      </div>
    </div>
  );
}
