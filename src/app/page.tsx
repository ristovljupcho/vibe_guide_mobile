"use client"

import { useState } from "react"
import LoginScreen from "@/components/login-screen"
import ForgotPasswordScreen from "@/components/forgot-password-screen"
import VerificationScreen from "@/components/verification-screen"
import ResetPasswordScreen from "@/components/reset-password-screen"
import RegisterScreen from "@/components/register-screen"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<"login" | "forgot" | "verify" | "reset" | "register">("login")
  const [email, setEmail] = useState("")

  const handleForgotPassword = () => {
    setCurrentScreen("forgot")
  }

  const handleRegister = () => {
    setCurrentScreen("register")
  }

  const handleRegisterSubmit = () => {
    // After successful registration, go back to login
    setCurrentScreen("login")
  }

  const handleSendCode = (emailValue: string) => {
    setEmail(emailValue)
    setCurrentScreen("verify")
  }

  const handleVerify = () => {
    setCurrentScreen("reset")
  }

  const handleReset = () => {
    setCurrentScreen("login")
  }

  const handleBackToLogin = () => {
    setCurrentScreen("login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900">
      {currentScreen === "login" && <LoginScreen onForgotPassword={handleForgotPassword} onRegister={handleRegister} />}
      {currentScreen === "forgot" && <ForgotPasswordScreen onSendCode={handleSendCode} onBack={handleBackToLogin} />}
      {currentScreen === "verify" && (
        <VerificationScreen email={email} onVerify={handleVerify} onBack={() => setCurrentScreen("forgot")} />
      )}
      {currentScreen === "reset" && (
        <ResetPasswordScreen onReset={handleReset} onBack={() => setCurrentScreen("verify")} />
      )}
      {currentScreen === "register" && <RegisterScreen onRegister={handleRegisterSubmit} onBack={handleBackToLogin} />}
    </div>
  )
}
