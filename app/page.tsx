"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, Coins, Zap, Star } from "lucide-react"

export default function RBXGoldPage() {
  const [buttonState, setButtonState] = useState<"initial" | "sending" | "sent" | "thanks">("initial")
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])

  const handleButtonClick = () => {
    if (buttonState === "initial") {
      setButtonState("sending")

      // Create particle effect
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }))
      setParticles(newParticles)

      setTimeout(() => {
        setButtonState("sent")
        setTimeout(() => {
          setButtonState("thanks")
          setTimeout(() => {
            setButtonState("initial")
            setParticles([])
          }, 3000)
        }, 2000)
      }, 1500)
    }
  }

  const getButtonText = () => {
    switch (buttonState) {
      case "initial":
        return "LET US TAKE YOUR MONEY"
      case "sending":
        return "PROCESSING..."
      case "sent":
        return "SENT ALL YOUR MONEY"
      case "thanks":
        return "THANKS!"
      default:
        return "LET US TAKE YOUR MONEY"
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-amber-600">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-amber-400 rounded-full opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-yellow-300 rounded-full opacity-40 animate-bounce delay-500"></div>
      </div>

      {/* Particle Effects */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
          style={{
            left: particle.x,
            top: particle.y,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Coins className="w-16 h-16 text-yellow-400 mr-4 animate-spin" />
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600 bg-clip-text text-transparent drop-shadow-2xl">
              RBXGOLD
            </h1>
            <Coins className="w-16 h-16 text-yellow-400 ml-4 animate-spin" />
          </div>
          <p className="text-2xl md:text-3xl text-purple-200 font-bold animate-pulse">The Ultimate Money Experience</p>
        </div>

        {/* Interactive Elements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-2xl shadow-2xl hover:shadow-purple-500/50">
              <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-2 group-hover:animate-spin" />
              <p className="text-white font-bold text-center">PREMIUM</p>
            </div>
          </div>

          <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-6 rounded-2xl shadow-2xl hover:shadow-yellow-500/50">
              <Zap className="w-12 h-12 text-purple-900 mx-auto mb-2 group-hover:animate-bounce" />
              <p className="text-purple-900 font-bold text-center">INSTANT</p>
            </div>
          </div>

          <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-2xl shadow-2xl hover:shadow-purple-500/50">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-2 group-hover:animate-pulse" />
              <p className="text-white font-bold text-center">ELITE</p>
            </div>
          </div>

          <div className="group cursor-pointer transform hover:scale-110 transition-all duration-300">
            <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-6 rounded-2xl shadow-2xl hover:shadow-yellow-500/50">
              <Coins className="w-12 h-12 text-purple-900 mx-auto mb-2 group-hover:animate-spin" />
              <p className="text-purple-900 font-bold text-center">GOLD</p>
            </div>
          </div>
        </div>

        {/* Main Button */}
        <div className="relative">
          <Button
            onClick={handleButtonClick}
            disabled={buttonState !== "initial"}
            className={`
              text-2xl md:text-3xl font-black px-12 py-8 rounded-2xl
              transform transition-all duration-500 hover:scale-110
              shadow-2xl hover:shadow-yellow-500/50
              ${
                buttonState === "initial"
                  ? "bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:via-amber-300 hover:to-yellow-400 text-purple-900"
                  : buttonState === "sending"
                    ? "bg-gradient-to-r from-purple-600 to-purple-700 text-yellow-400 animate-pulse"
                    : buttonState === "sent"
                      ? "bg-gradient-to-r from-red-500 to-red-600 text-white animate-bounce"
                      : "bg-gradient-to-r from-green-500 to-green-600 text-white animate-pulse"
              }
            `}
          >
            {buttonState === "sending" && <Zap className="w-8 h-8 mr-4 animate-spin" />}
            {getButtonText()}
            {buttonState === "thanks" && <Sparkles className="w-8 h-8 ml-4 animate-bounce" />}
          </Button>

          {/* Button Glow Effect */}
          <div
            className={`
            absolute inset-0 rounded-2xl blur-xl opacity-50 -z-10
            ${
              buttonState === "initial"
                ? "bg-gradient-to-r from-yellow-400 to-amber-400"
                : buttonState === "sending"
                  ? "bg-gradient-to-r from-purple-600 to-purple-700 animate-pulse"
                  : buttonState === "sent"
                    ? "bg-gradient-to-r from-red-500 to-red-600"
                    : "bg-gradient-to-r from-green-500 to-green-600"
            }
          `}
          />
        </div>

        {/* Status Messages */}
        {buttonState !== "initial" && (
          <div className="mt-8 text-center animate-fade-in">
            <p className="text-xl md:text-2xl font-bold text-white">
              {buttonState === "sending" && "💸 Processing your financial sacrifice..."}
              {buttonState === "sent" && "🎉 Your money has been successfully transferred!"}
              {buttonState === "thanks" && "🙏 We appreciate your generous donation!"}
            </p>
            {buttonState === "sent" && (
              <p className="text-lg md:text-xl font-bold text-red-300 mt-2 animate-bounce">
                ⚠️ You're NOT getting it back! ⚠️
              </p>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-purple-300 text-sm animate-pulse">* We hate you btw</p>
        </div>
      </div>

      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}
