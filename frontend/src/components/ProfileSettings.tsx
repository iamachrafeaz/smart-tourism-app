import { ArrowLeft, User, Globe, Moon, Shield, HelpCircle, Calendar, Camera, Bell } from 'lucide-react';

interface ProfileSettingsProps {
  onBack: () => void;
  language: 'en' | 'fr' | 'ar';
  darkMode: boolean;
  onLanguageChange: (lang: 'en' | 'fr' | 'ar') => void;
  onDarkModeToggle: () => void;
}

export function ProfileSettings({
  onBack,
  language,
  darkMode,
  onLanguageChange,
  onDarkModeToggle,
}: ProfileSettingsProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-500 to-red-500 px-6 pt-6 pb-20">
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/30 mb-6"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Profile info */}
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-xl">
              <User className="w-12 h-12 text-gray-400" />
            </div>
            <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <Camera className="w-5 h-5 text-white" />
            </button>
          </div>

          <h2 className="text-white mb-1">Traveler</h2>
          <p className="text-white/80 text-sm">traveler@example.com</p>
        </div>
      </div>

      {/* Settings sections */}
      <div className="px-6 -mt-12 pb-6 space-y-4">
        {/* Preferences */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-gray-900 dark:text-white">Preferences</h3>
          </div>

          {/* Language */}
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <p className="text-gray-900 dark:text-white text-sm">Language</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {language === 'en' ? 'English' : language === 'fr' ? 'Français' : 'العربية'}
                </p>
              </div>
            </div>
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value as 'en' | 'fr' | 'ar')}
              className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-sm outline-none"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="ar">العربية</option>
            </select>
          </div>

          {/* Dark mode */}
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <Moon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-gray-900 dark:text-white text-sm">Dark Mode</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {darkMode ? 'Enabled' : 'Disabled'}
                </p>
              </div>
            </div>
            <button
              onClick={onDarkModeToggle}
              className={`w-14 h-8 rounded-full transition-colors ${
                darkMode ? 'bg-orange-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-lg transition-transform ${
                  darkMode ? 'translate-x-7' : 'translate-x-1'
                } mt-1`}
              />
            </button>
          </div>
        </div>

        {/* Account */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-gray-900 dark:text-white">Account</h3>
          </div>

          <button className="w-full px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900 dark:text-white text-sm">Biometric Verification</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                Secure your bookings
              </p>
            </div>
          </button>

          <button className="w-full px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900 dark:text-white text-sm">My Bookings</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                View your tours and events
              </p>
            </div>
          </button>

          <button className="w-full px-6 py-4 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
              <Bell className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900 dark:text-white text-sm">Notifications</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                Manage your alerts
              </p>
            </div>
          </button>
        </div>

        {/* Support */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-gray-900 dark:text-white">Support</h3>
          </div>

          <button className="w-full px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900 dark:text-white text-sm">Safety Information</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                Emergency contacts & tips
              </p>
            </div>
          </button>

          <button className="w-full px-6 py-4 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900 dark:text-white text-sm">Help & FAQ</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                Get answers to common questions
              </p>
            </div>
          </button>
        </div>

        {/* Interests */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-900 dark:text-white mb-4">My Interests</h3>
          <div className="flex gap-2 flex-wrap">
            {['History', 'Food', 'Sports', 'Art', 'Nature', 'Events'].map((interest) => (
              <button
                key={interest}
                className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-4 py-2 rounded-full text-sm hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors"
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        {/* Sign out */}
        <button className="w-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 py-4 rounded-2xl border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
          Sign Out
        </button>

        {/* Version */}
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm py-4">
          Tangier Live v1.0.0
        </p>
      </div>
    </div>
  );
}
