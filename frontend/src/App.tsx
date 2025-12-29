import { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { OnboardingScreens } from './components/OnboardingScreens';
import { HomeScreen } from './components/HomeScreen';
import { ARExperienceScreen } from './components/ARExperienceScreen';
import { ChatbotScreen } from './components/ChatbotScreen';
import { GuidesMarketplace } from './components/GuidesMarketplace';
import { GuideProfile } from './components/GuideProfile';
import { CulturalExchange } from './components/CulturalExchange';
import { DiscoverPlaces } from './components/DiscoverPlaces';
import { ProfileSettings } from './components/ProfileSettings';

export type Screen = 
  | 'splash'
  | 'onboarding'
  | 'home'
  | 'ar-experience'
  | 'chatbot'
  | 'guides'
  | 'guide-profile'
  | 'cultural-exchange'
  | 'discover'
  | 'profile';

export interface Guide {
  id: string;
  name: string;
  photo: string;
  languages: string[];
  price: number;
  rating: number;
  verified: boolean;
  expertise: string[];
  availability: boolean;
  bio: string;
  certifications: string[];
  reviews: number;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>(null);
  const [language, setLanguage] = useState<'en' | 'fr' | 'ar'>('en');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Show splash for 3 seconds
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('onboarding');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const navigateTo = (screen: Screen, guideId?: string) => {
    if (guideId) {
      setSelectedGuideId(guideId);
    }
    setCurrentScreen(screen);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {currentScreen === 'splash' && <SplashScreen />}
      {currentScreen === 'onboarding' && (
        <OnboardingScreens onComplete={() => navigateTo('home')} />
      )}
      {currentScreen === 'home' && (
        <HomeScreen
          onNavigate={navigateTo}
          language={language}
          onLanguageChange={setLanguage}
        />
      )}
      {currentScreen === 'ar-experience' && (
        <ARExperienceScreen onBack={() => navigateTo('home')} />
      )}
      {currentScreen === 'chatbot' && (
        <ChatbotScreen onBack={() => navigateTo('home')} />
      )}
      {currentScreen === 'guides' && (
        <GuidesMarketplace
          onBack={() => navigateTo('home')}
          onSelectGuide={(id) => navigateTo('guide-profile', id)}
        />
      )}
      {currentScreen === 'guide-profile' && selectedGuideId && (
        <GuideProfile
          guideId={selectedGuideId}
          onBack={() => navigateTo('guides')}
        />
      )}
      {currentScreen === 'cultural-exchange' && (
        <CulturalExchange onBack={() => navigateTo('home')} />
      )}
      {currentScreen === 'discover' && (
        <DiscoverPlaces onBack={() => navigateTo('home')} />
      )}
      {currentScreen === 'profile' && (
        <ProfileSettings
          onBack={() => navigateTo('home')}
          language={language}
          darkMode={darkMode}
          onLanguageChange={setLanguage}
          onDarkModeToggle={() => setDarkMode(!darkMode)}
        />
      )}
    </div>
  );
}
