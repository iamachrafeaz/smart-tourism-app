import { useState } from 'react';
import { ArrowLeft, Map as MapIcon, List, Search, Filter, MapPin, Star, Users, Leaf, Calendar, DollarSign, Coffee, Utensils } from 'lucide-react';

interface DiscoverPlacesProps {
  onBack: () => void;
}

interface Place {
  id: number;
  name: string;
  type: 'restaurant' | 'attraction' | 'bank' | 'event' | 'hidden-gem';
  image: string;
  rating: number;
  crowdLevel: 'low' | 'medium' | 'high';
  sustainable: boolean;
  description: string;
  distance: string;
  coordinates: { lat: number; lng: number };
}

const mockPlaces: Place[] = [
  {
    id: 1,
    name: 'Hidden Kasbah Garden',
    type: 'hidden-gem',
    image: 'https://images.unsplash.com/photo-1704738795093-5d8f864f4330?w=500',
    rating: 4.8,
    crowdLevel: 'low',
    sustainable: true,
    description: 'Secret garden with traditional Moroccan architecture',
    distance: '0.8 km',
    coordinates: { lat: 35.7595, lng: -5.8340 },
  },
  {
    id: 2,
    name: 'Café Hafa',
    type: 'restaurant',
    image: 'https://images.unsplash.com/photo-1527760127628-23c37a0c9af9?w=500',
    rating: 4.9,
    crowdLevel: 'medium',
    sustainable: false,
    description: 'Historic café with stunning ocean views',
    distance: '1.2 km',
    coordinates: { lat: 35.7695, lng: -5.8240 },
  },
  {
    id: 3,
    name: 'AFCON 2025 Fan Zone',
    type: 'event',
    image: 'https://images.unsplash.com/photo-1741862470968-ccceece09f10?w=500',
    rating: 5.0,
    crowdLevel: 'high',
    sustainable: false,
    description: 'Official AFCON fan zone with live screenings',
    distance: '2.5 km',
    coordinates: { lat: 35.7500, lng: -5.8100 },
  },
  {
    id: 4,
    name: 'Local Artisan Market',
    type: 'hidden-gem',
    image: 'https://images.unsplash.com/photo-1704738795093-5d8f864f4330?w=500',
    rating: 4.7,
    crowdLevel: 'low',
    sustainable: true,
    description: 'Authentic crafts away from tourist crowds',
    distance: '0.5 km',
    coordinates: { lat: 35.7550, lng: -5.8300 },
  },
];

export function DiscoverPlaces({ onBack }: DiscoverPlacesProps) {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const placeTypes = [
    { value: 'hidden-gem', label: 'Hidden Gems', icon: MapPin },
    { value: 'restaurant', label: 'Restaurants', icon: Utensils },
    { value: 'event', label: 'Events', icon: Calendar },
    { value: 'bank', label: 'Services', icon: DollarSign },
  ];

  const filteredPlaces = mockPlaces.filter((place) => {
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType ? place.type === selectedType : true;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>

          <h1 className="flex-1 text-gray-900 dark:text-white">Discover Places</h1>

          {/* View toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('list')}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                viewMode === 'list'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                viewMode === 'map'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              <MapIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search places..."
            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white pl-12 pr-4 py-3 rounded-xl outline-none"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedType(null)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
              selectedType === null
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            All
          </button>
          {placeTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => setSelectedType(type.value)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                selectedType === type.value
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              <type.icon className="w-4 h-4" />
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {viewMode === 'list' ? (
        <div className="px-6 py-6 space-y-4">
          {filteredPlaces.map((place) => (
            <div
              key={place.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {place.sustainable && (
                    <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <Leaf className="w-3 h-3" />
                      Sustainable
                    </span>
                  )}
                  {place.crowdLevel === 'low' && (
                    <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      Less Crowded
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-gray-900 dark:text-white">{place.name}</h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm text-gray-900 dark:text-white">{place.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {place.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    {place.distance}
                  </div>

                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative h-[calc(100vh-240px)]">
          {/* Map placeholder with pins */}
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 relative">
            <img
              src="https://images.unsplash.com/photo-1749907447398-d14bde45ed3e?w=1200"
              alt="Map"
              className="w-full h-full object-cover opacity-60"
            />
            
            {/* Map pins */}
            {filteredPlaces.map((place, index) => (
              <div
                key={place.id}
                className="absolute animate-bounce-slow"
                style={{
                  top: `${30 + index * 15}%`,
                  left: `${25 + index * 20}%`,
                }}
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 px-3 py-1 rounded-lg shadow-lg whitespace-nowrap text-xs">
                    {place.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map controls */}
          <div className="absolute bottom-6 right-6 flex flex-col gap-2">
            <button className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center">
              <span className="text-gray-900 dark:text-white text-xl">+</span>
            </button>
            <button className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center">
              <span className="text-gray-900 dark:text-white text-xl">−</span>
            </button>
          </div>
        </div>
      )}

      {/* Legend for map view */}
      {viewMode === 'map' && (
        <div className="px-6 py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="flex gap-4 overflow-x-auto">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <div className="w-4 h-4 bg-orange-500 rounded-full" />
              <span className="text-sm text-gray-700 dark:text-gray-300">All Places</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Leaf className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Sustainable</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Less Crowded</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
