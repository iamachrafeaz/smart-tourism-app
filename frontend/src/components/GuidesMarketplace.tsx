import { useState } from "react";
import {
  ArrowLeft,
  Filter,
  Star,
  Shield,
  Clock,
  MapPin,
  Globe,
} from "lucide-react";
import type { Guide } from "../App";

interface GuidesMarketplaceProps {
  onBack: () => void;
  onSelectGuide: (id: string) => void;
}

const mockGuides: Guide[] = [
  {
    id: "1",
    name: "Ahmed El Mansouri",
    photo:
      "https://images.unsplash.com/photo-1765366574945-e2f1b4b1a5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcmFiJTIwbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3MDE2MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    languages: ["English", "French", "Arabic"],
    price: 45,
    rating: 4.9,
    verified: true,
    expertise: ["History", "Culture", "Food Tours"],
    availability: true,
    bio: "Licensed tour guide with 10+ years experience",
    certifications: ["NGO Verified", "Tourism Board Certified"],
    reviews: 156,
  },
  {
    id: "2",
    name: "Fatima Zahara",
    photo:
      "https://images.unsplash.com/photo-1618305832653-0718ce0dc3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NhbiUyMHdvbWFuJTIwcG9ydHJhaXQlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NjcwMTYzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    languages: ["English", "Spanish", "Arabic"],
    price: 40,
    rating: 5.0,
    verified: true,
    expertise: ["Art", "Architecture", "Local Markets"],
    availability: true,
    bio: "Art historian specializing in Moroccan heritage",
    certifications: ["NGO Verified", "Art History Degree"],
    reviews: 203,
  },
  {
    id: "3",
    name: "Youssef Berrada",
    photo:
      "https://images.unsplash.com/photo-1590802163243-290dd8621032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NvJTIwdG91ciUyMGd1aWRlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NzAxNjM0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    languages: ["English", "French", "German", "Arabic"],
    price: 55,
    rating: 4.8,
    verified: true,
    expertise: ["AFCON Events", "Sports Tours", "Nightlife"],
    availability: false,
    bio: "Specialized in sports events and modern Tangier",
    certifications: ["NGO Verified", "Events Specialist"],
    reviews: 89,
  },
];

export function GuidesMarketplace({
  onBack,
  onSelectGuide,
}: GuidesMarketplaceProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedExpertise, setSelectedExpertise] = useState<string | null>(
    null
  );

  const allExpertise = Array.from(
    new Set(mockGuides.flatMap((g) => g.expertise))
  );

  const filteredGuides = selectedExpertise
    ? mockGuides.filter((g) => g.expertise.includes(selectedExpertise))
    : mockGuides;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>

          <h1 className="text-gray-900 dark:text-white">Certified Guides</h1>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <Filter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Filter by expertise:
            </p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedExpertise(null)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  selectedExpertise === null
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                All
              </button>
              {allExpertise.map((expertise) => (
                <button
                  key={expertise}
                  onClick={() => setSelectedExpertise(expertise)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                    selectedExpertise === expertise
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {expertise}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Guides list */}
      <div className="px-6 py-6 space-y-4">
        {filteredGuides.map((guide) => (
          <button
            key={guide.id}
            onClick={() => onSelectGuide(guide.id)}
            className="w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
          >
            <div className="flex gap-4 p-4">
              {/* Photo */}
              <div className="relative">
                <img
                  src={guide.photo}
                  alt={guide.name}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                {guide.verified && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800">
                    <Shield className="w-3 h-3 text-white" />
                  </div>
                )}
                {!guide.availability && (
                  <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xs">Busy</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 text-left">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-gray-900 dark:text-white pr-2">
                    {guide.name}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm text-gray-900 dark:text-white">
                      {guide.rating}
                    </span>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex items-center gap-1 mb-2">
                  <Globe className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {guide.languages.join(", ")}
                  </p>
                </div>

                {/* Expertise tags */}
                <div className="flex gap-1 flex-wrap mb-2">
                  {guide.expertise.slice(0, 2).map((exp) => (
                    <span
                      key={exp}
                      className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-2 py-1 rounded-full"
                    >
                      {exp}
                    </span>
                  ))}
                </div>

                {/* Price and availability */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900 dark:text-white">
                      ${guide.price}/hr
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      • {guide.reviews} reviews
                    </span>
                  </div>
                  {guide.availability && (
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs">Available</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Request verification CTA */}
      <div className="px-6 pb-6">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="mb-2">Are you a local guide?</h3>
              <p className="text-sm text-white/90 mb-4">
                Join our verified guides network. Get certified through our NGO
                partners.
              </p>
              <button className="bg-white text-orange-600 px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors">
                Request Verification
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
