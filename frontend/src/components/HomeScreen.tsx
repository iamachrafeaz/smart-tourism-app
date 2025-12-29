import {
  Camera,
  MessageCircle,
  Map,
  User,
  Globe,
  Compass,
  Users,
  Menu,
} from "lucide-react";
import type { Screen } from "../App";

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
  language: "en" | "fr" | "ar";
  onLanguageChange: (lang: "en" | "fr" | "ar") => void;
}

export function HomeScreen({
  onNavigate,
  language,
  onLanguageChange,
}: HomeScreenProps) {
  const languages = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "ar", label: "AR" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Live camera background simulation */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1749907447398-d14bde45ed3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYW5naWVyJTIwTW9yb2NjbyUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NjcwMTYyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Live view"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60" />
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-6 pb-4">
        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-lg rounded-full px-3 py-2">
          <Globe className="w-4 h-4 text-white" />
          <select
            value={language}
            onChange={(e) =>
              onLanguageChange(e.target.value as "en" | "fr" | "ar")
            }
            className="bg-transparent text-white text-sm outline-none"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code} className="bg-gray-800">
                {lang.label}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => onNavigate("profile")}
          className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center"
        >
          <User className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* 3D Avatar Guide floating */}
      <div className="relative z-10 flex flex-col items-center mt-12 animate-float">
        <div className="relative">
          {/* Avatar container with glow effect */}
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 p-1 shadow-2xl shadow-orange-500/50">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1635244621620-ccadff2eb29d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwYXZhdGFyJTIwaG9sb2dyYW18ZW58MXx8fHwxNzY3MDE2MjI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Guide"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>

          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full bg-orange-500/30 animate-ping" />
          <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-pulse" />
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-white text-2xl mb-1">Hello, Explorer!</h2>
          <p className="text-white/80 text-sm">
            I'm your AI guide. How can I help?
          </p>
        </div>
      </div>

      {/* Main action buttons */}
      <div className="relative z-10 px-6 mt-16 space-y-3">
        <button
          onClick={() => onNavigate("ar-experience")}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-5 rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all active:scale-95"
        >
          <Camera className="w-6 h-6" />
          <span className="text-lg">Scan Place</span>
        </button>

        <button
          onClick={() => onNavigate("chatbot")}
          className="w-full bg-white/20 backdrop-blur-lg text-white py-5 rounded-2xl flex items-center justify-center gap-3 border border-white/30 hover:bg-white/30 transition-all active:scale-95"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-lg">Ask the Guide</span>
        </button>

        <button
          onClick={() => onNavigate("discover")}
          className="w-full bg-white/20 backdrop-blur-lg text-white py-5 rounded-2xl flex items-center justify-center gap-3 border border-white/30 hover:bg-white/30 transition-all active:scale-95"
        >
          <Map className="w-6 h-6" />
          <span className="text-lg">Nearby Experiences</span>
        </button>
      </div>

      {/* Quick access menu */}
      <div className="relative z-10 px-6 mt-8 mb-8">
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => onNavigate("guides")}
            className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-lg rounded-2xl py-4 px-3 border border-white/20 hover:bg-white/20 transition-all active:scale-95"
          >
            <Users className="w-6 h-6 text-orange-400" />
            <span className="text-white text-xs">Guides</span>
          </button>

          <button
            onClick={() => onNavigate("discover")}
            className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-lg rounded-2xl py-4 px-3 border border-white/20 hover:bg-white/20 transition-all active:scale-95"
          >
            <Compass className="w-6 h-6 text-blue-400" />
            <span className="text-white text-xs">Hidden Gems</span>
          </button>

          <button
            onClick={() => onNavigate("cultural-exchange")}
            className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-lg rounded-2xl py-4 px-3 border border-white/20 hover:bg-white/20 transition-all active:scale-95"
          >
            <Menu className="w-6 h-6 text-green-400" />
            <span className="text-white text-xs">Culture</span>
          </button>
        </div>
      </div>
    </div>
  );
}
