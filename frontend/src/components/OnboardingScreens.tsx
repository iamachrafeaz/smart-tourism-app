import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface OnboardingScreensProps {
  onComplete: () => void;
}

const slides = [
  {
    title: 'Meet Your AI Guide',
    description: 'Experience Tangier through AR with your personal 3D virtual guide',
    icon: (
      <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Verified Local Guides',
    description: 'Connect with certified guides verified through NGO partnerships for safe tourism',
    icon: (
      <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Hidden Gems & Culture',
    description: 'Discover authentic local spots and immerse yourself in Moroccan culture',
    icon: (
      <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export function OnboardingScreens({ onComplete }: OnboardingScreensProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800 flex flex-col">
      {/* Skip button */}
      <div className="flex justify-end p-6">
        <button
          onClick={handleSkip}
          className="text-gray-500 dark:text-gray-400 px-4 py-2"
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-20">
        <div className="text-orange-600 dark:text-orange-400 mb-8 animate-fade-in">
          {slides[currentSlide].icon}
        </div>

        <h2 className="text-center text-gray-900 dark:text-white mb-4 max-w-md">
          {slides[currentSlide].title}
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 max-w-sm">
          {slides[currentSlide].description}
        </p>
      </div>

      {/* Dots indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-orange-600 dark:bg-orange-400'
                : 'w-2 bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Next/Start button */}
      <div className="px-8 pb-8">
        <button
          onClick={handleNext}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl flex items-center justify-center gap-2 transition-colors"
        >
          {currentSlide === slides.length - 1 ? 'Start Exploring' : 'Next'}
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
