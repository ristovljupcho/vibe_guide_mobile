"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface RegisterScreenProps {
  onRegister: () => void;
  onBack: () => void;
}

export default function RegisterScreen({
  onRegister,
  onBack,
}: RegisterScreenProps) {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (Object.values(formData).some((value) => !value.trim())) {
      alert("Please fill in all fields!");
      return;
    }

    // Handle registration logic here
    console.log("Registration attempt:", formData);
    onRegister();
  };

  const isFormValid =
    Object.values(formData).every((value) => value.trim()) &&
    formData.password === formData.confirmPassword;

  return (
    <div className="min-h-screen bg-color flex flex-col items-center justify-center px-6">
      <div className="form-color p-8 rounded-2xl w-full max-w-sm space-y-8 shadow-2xl shadow-black/30 backdrop-blur-md border border-white/10">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="flex justify-center">
          <Image src="/logo.png" alt="Logo" width={260} height={75} />
        </div>
        {/* Title */}
        <div className="text-center">
          <h2 className="text-xl font-color font-light">Create Account</h2>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="font-color text-sm">
            Join the vibe and start your journey
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="bg-transparent border-0 border-b border-font-color rounded-none text-white placeholder:text-white/60 focus:border-white focus:ring-0 pb-2"
                required
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="username"
                value={formData.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                className="bg-transparent border-0 border-b border-font-color rounded-none text-white placeholder:text-white/60 focus:border-white focus:ring-0 pb-2"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-transparent border-0 border-b border-font-color rounded-none text-white placeholder:text-white/60 focus:border-white focus:ring-0 pb-2"
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="bg-transparent border-0 border-b border-font-color rounded-none text-white placeholder:text-white/60 focus:border-white focus:ring-0 pb-2"
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="confirm password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                className={`bg-transparent border-0 border-b rounded-none text-white placeholder:text-white/60 focus:ring-0 pb-2 ${
                  formData.confirmPassword &&
                  formData.password !== formData.confirmPassword
                    ? "border-red-400 focus:border-red-400"
                    : "border-font-color focus:border-white"
                }`}
                required
              />
              {formData.confirmPassword &&
                formData.password !== formData.confirmPassword && (
                  <p className="text-red-400 text-xs mt-1">
                    Passwords don't match
                  </p>
                )}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full btn-color hover:bg-amber-300 text-slate-800 font-medium py-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isFormValid}
          >
            REGISTER
          </Button>
        </form>

        {/* Login Link */}
        <div className="text-center">
          <p className="font-color text-sm">
            Already have an account?{" "}
            <button
              onClick={onBack}
              className="text-white underline hover:no-underline"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
