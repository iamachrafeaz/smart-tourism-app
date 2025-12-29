import { useState } from 'react';
import { X, Volume2, Book, MessageCircle, Info } from 'lucide-react';

interface ARExperienceScreenProps {
  onBack: () => void;
}

const landmarks = [
  {
    id: 1,
    name: 'Kasbah Museum',
    position: { top: '25%', left: '30%' },
    info: 'Former Sultan\'s palace, now showcasing Moroccan art and history',
    culture: 'Built in the 17th century by Sultan Moulay Ismail',
    tip: 'Best visited in morning for fewer crowds',
  },
  {
    id: 2,
    name: 'Grand Socco',
    position: { top: '60%', left: '65%' },
    info: 'Historic marketplace connecting old and new city',
    culture: 'Traditional meeting point for locals since 1930s',
    tip: 'Try fresh mint tea from street vendors',
  },
];

export function ARExperienceScreen({ onBack }: ARExperienceScreenProps) {
  const [selectedLandmark, setSelectedLandmark] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'info' | 'culture' | 'tips'>('info');

  const selected = landmarks.find(l => l.id === selectedLandmark);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Camera view simulation */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1704738795093-5d8f864f4330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NvJTIwbWVkaW5hJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NzAxNjIyOHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="AR View"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Close button */}
      <button
        onClick={onBack}
        className="absolute top-6 right-6 z-50 w-10 h-10 bg-black/50 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/30"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* AR scanning indicator */}
      <div className="absolute top-6 left-6 z-20 bg-orange-500/90 backdrop-blur-lg px-4 py-2 rounded-full flex items-center gap-2">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        <span className="text-white text-sm">AR Active</span>
      </div>

      {/* 3D Avatar overlay - floating in corner */}
      <div className="absolute bottom-32 right-6 z-20 animate-float">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-0.5 shadow-lg">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1635244621620-ccadff2eb29d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwYXZhdGFyJTIwaG9sb2dyYW18ZW58MXx8fHwxNzY3MDE2MjI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Guide"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </div>

      {/* AR Landmark markers */}
      {landmarks.map((landmark) => (
        <button
          key={landmark.id}
          onClick={() => setSelectedLandmark(landmark.id)}
          className="absolute z-30 animate-bounce-slow"
          style={landmark.position}
        >
          <div className="relative">
            {/* Marker pin */}
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-xl border-2 border-white">
              <Info className="w-6 h-6 text-white" />
            </div>
            {/* Pulse effect */}
            <div className="absolute inset-0 bg-orange-500/50 rounded-full animate-ping" />
          </div>
        </button>
      ))}

      {/* Info card for selected landmark */}
      {selected && (
        <div className="absolute bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-black via-black/95 to-transparent px-6 pt-20 pb-8 animate-slide-up">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4">
              <h3 className="text-white text-xl">{selected.name}</h3>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 px-6 py-4 border-b border-white/10">
              <button
                onClick={() => setActiveTab('info')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  activeTab === 'info'
                    ? 'bg-orange-500 text-white'
                    : 'bg-white/10 text-white/70'
                }`}
              >
                <Book className="w-4 h-4" />
                <span className="text-sm">Info</span>
              </button>
              <button
                onClick={() => setActiveTab('culture')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  activeTab === 'culture'
                    ? 'bg-orange-500 text-white'
                    : 'bg-white/10 text-white/70'
                }`}
              >
                <span className="text-sm">Culture</span>
              </button>
              <button
                onClick={() => setActiveTab('tips')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  activeTab === 'tips'
                    ? 'bg-orange-500 text-white'
                    : 'bg-white/10 text-white/70'
                }`}
              >
                <span className="text-sm">Tips</span>
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-4">
              <p className="text-white/90 text-sm leading-relaxed">
                {activeTab === 'info' && selected.info}
                {activeTab === 'culture' && selected.culture}
                {activeTab === 'tips' && selected.tip}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 px-6 pb-6">
              <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-colors">
                <Volume2 className="w-4 h-4" />
                <span className="text-sm">Listen</span>
              </button>
              <button className="flex-1 bg-white/20 hover:bg-white/30 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-colors border border-white/30">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">Ask More</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Instruction overlay */}
      {!selectedLandmark && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <div className="bg-black/70 backdrop-blur-lg px-6 py-3 rounded-full border border-white/30">
            <p className="text-white text-sm">Tap on markers to learn more</p>
          </div>
        </div>
      )}
    </div>
  );
}
