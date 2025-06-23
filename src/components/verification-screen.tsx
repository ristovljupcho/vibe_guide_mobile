"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface VerificationScreenProps {
  email: string;
  onVerify: () => void;
  onBack: () => void;
}

export default function VerificationScreen({
  email,
  onVerify,
  onBack,
}: VerificationScreenProps) {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCode = code.join("");
    if (verificationCode.length === 4) {
      onVerify();
    }
  };

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div className="min-h-screen bg-color flex flex-col items-center justify-center px-6">
      <div className="form-color p-8 rounded-2xl w-full max-w-sm space-y-8 shadow-2xl shadow-black/30 backdrop-blur-md border border-white/10">
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
        <div className="text-center]">
          <h2 className="text-xl font-color font-light">
            Please check your email
          </h2>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="font-color text-sm">We've sent a code to {email}</p>
        </div>

        {/* Verification Form */}
        <form onSubmit={handleVerify} className="space-y-8">
          <div className="flex justify-center space-x-4">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 bg-transparent border-2 border-font-color rounded-lg text-white text-center text-xl focus:border-white focus:outline-none"
              />
            ))}
          </div>

          <Button
            type="submit"
            className="w-full btn-color hover:bg-amber-300 text-slate-800 font-medium py-3 rounded-full"
            disabled={code.join("").length !== 4}
          >
            VERIFY
          </Button>
        </form>
      </div>
    </div>
  );
}
