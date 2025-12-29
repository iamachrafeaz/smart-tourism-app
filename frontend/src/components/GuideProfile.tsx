import { ArrowLeft, Star, Shield, MapPin, Globe, Calendar, DollarSign, MessageCircle } from 'lucide-react';

interface GuideProfileProps {
  guideId: string;
  onBack: () => void;
}

const mockGuideDetails = {
  id: '1',
  name: 'Ahmed El Mansouri',
  photo: 'https://images.unsplash.com/photo-1765366574945-e2f1b4b1a5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcmFiJTIwbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNjcwMTYzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  languages: ['English', 'French', 'Arabic'],
  price: 45,
  rating: 4.9,
  verified: true,
  expertise: ['History', 'Culture', 'Food Tours'],
  bio: 'Licensed tour guide with 10+ years experience in Tangier. Passionate about sharing the rich history and culture of Morocco with visitors from around the world.',
  certifications: [
    { name: 'NGO Verified', icon: Shield },
    { name: 'Tourism Board Certified', icon: Shield },
  ],
  reviews: [
    {
      id: 1,
      author: 'Sarah M.',
      rating: 5,
      comment: 'Ahmed was fantastic! Very knowledgeable about Tangier\'s history and took us to amazing hidden spots.',
      date: '2 weeks ago',
    },
    {
      id: 2,
      author: 'John D.',
      rating: 5,
      comment: 'Best guide we\'ve ever had. Professional, friendly, and went above and beyond.',
      date: '1 month ago',
    },
    {
      id: 3,
      author: 'Maria L.',
      rating: 4,
      comment: 'Great tour of the medina. Ahmed knows all the best places for authentic food!',
      date: '2 months ago',
    },
  ],
  tours: [
    { name: 'Historical Medina Walk', duration: '3 hours', price: 45 },
    { name: 'Food & Culture Experience', duration: '4 hours', price: 60 },
    { name: 'AFCON 2025 City Tour', duration: '5 hours', price: 75 },
  ],
};

export function GuideProfile({ guideId, onBack }: GuideProfileProps) {
  const guide = mockGuideDetails;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header with cover photo */}
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500" />
        
        <button
          onClick={onBack}
          className="absolute top-6 left-6 w-10 h-10 bg-black/30 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/30"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Profile photo */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
          <div className="relative">
            <img
              src={guide.photo}
              alt={guide.name}
              className="w-32 h-32 rounded-3xl object-cover border-4 border-white dark:border-gray-900 shadow-xl"
            />
            {guide.verified && (
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-900 shadow-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 px-6 pb-24">
        {/* Name and rating */}
        <div className="text-center mb-6">
          <h1 className="text-gray-900 dark:text-white mb-2">{guide.name}</h1>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-gray-900 dark:text-white">{guide.rating}</span>
            </div>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              ({guide.reviews.length} reviews)
            </span>
          </div>

          {/* Languages */}
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
            <Globe className="w-4 h-4" />
            <span>{guide.languages.join(' • ')}</span>
          </div>
        </div>

        {/* Bio */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-3">About</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {guide.bio}
          </p>
        </div>

        {/* Expertise */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-3">Expertise</h3>
          <div className="flex gap-2 flex-wrap">
            {guide.expertise.map((exp) => (
              <span
                key={exp}
                className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-4 py-2 rounded-full text-sm"
              >
                {exp}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-3">Certifications</h3>
          <div className="space-y-3">
            {guide.certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <cert.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Available Tours */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Available Tours</h3>
          <div className="space-y-3">
            {guide.tours.map((tour, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
              >
                <div>
                  <p className="text-gray-900 dark:text-white text-sm mb-1">{tour.name}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">{tour.duration}</p>
                </div>
                <span className="text-orange-600 dark:text-orange-400">${tour.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">Reviews</h3>
          <div className="space-y-4">
            {guide.reviews.map((review) => (
              <div key={review.id} className="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-900 dark:text-white text-sm">{review.author}</span>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {review.comment}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-xs">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-white">${guide.price}/hour</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-xs">Transparent pricing</p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl transition-colors">
            Book Securely
          </button>
          <button className="w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl flex items-center justify-center transition-colors">
            <MessageCircle className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
