import { useState } from 'react';
import { ArrowLeft, Heart, MessageCircle, Tag, TrendingUp } from 'lucide-react';

interface CulturalExchangeProps {
  onBack: () => void;
}

interface Post {
  id: number;
  author: string;
  avatar: string;
  isGuide: boolean;
  question: string;
  answer?: string;
  tags: string[];
  likes: number;
  replies: number;
  timestamp: string;
}

const mockPosts: Post[] = [
  {
    id: 1,
    author: 'Sarah M.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    isGuide: false,
    question: 'What\'s the proper etiquette when visiting a Moroccan home?',
    answer: 'Always remove your shoes at the entrance, bring a small gift (pastries or tea), and accept any food or drink offered. It\'s polite to use your right hand when eating.',
    tags: ['culture', 'traditions', 'etiquette'],
    likes: 24,
    replies: 8,
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    author: 'Fatima Z.',
    avatar: 'https://images.unsplash.com/photo-1618305832653-0718ce0dc3ea?w=100',
    isGuide: true,
    question: 'Best places to try authentic Moroccan breakfast?',
    answer: 'Try Café Hafa for traditional breakfast with a view, or visit the local market early morning for fresh msemen and mint tea.',
    tags: ['food', 'breakfast', 'recommendations'],
    likes: 45,
    replies: 12,
    timestamp: '5 hours ago',
  },
  {
    id: 3,
    author: 'John D.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    isGuide: false,
    question: 'How to respectfully bargain in the medina markets?',
    answer: 'Start at 40-50% of asking price, be friendly and patient, walk away if needed (often brings best price), and always negotiate with a smile.',
    tags: ['shopping', 'culture', 'markets'],
    likes: 38,
    replies: 15,
    timestamp: '1 day ago',
  },
];

export function CulturalExchange({ onBack }: CulturalExchangeProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(mockPosts.flatMap((p) => p.tags)));

  const filteredPosts = selectedTag
    ? mockPosts.filter((p) => p.tags.includes(selectedTag))
    : mockPosts;

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

          <div className="flex-1">
            <h1 className="text-gray-900 dark:text-white">Cultural Exchange</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Ask locals, share experiences
            </p>
          </div>

          <button className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">+</span>
          </button>
        </div>

        {/* Tags filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
              selectedTag === null
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            Trending
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                selectedTag === tag
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              <Tag className="w-3 h-3" />
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Posts feed */}
      <div className="px-6 py-6 space-y-4">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
          >
            {/* Author info */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={post.avatar}
                alt={post.author}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 dark:text-white text-sm">{post.author}</span>
                  {post.isGuide && (
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs px-2 py-0.5 rounded-full">
                      Local Guide
                    </span>
                  )}
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-xs">{post.timestamp}</span>
              </div>
            </div>

            {/* Question */}
            <h3 className="text-gray-900 dark:text-white mb-3">{post.question}</h3>

            {/* Answer */}
            {post.answer && (
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-4">
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {post.answer}
                </p>
              </div>
            )}

            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">
              <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
                <span className="text-sm">{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">{post.replies}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Ask question button */}
      <div className="fixed bottom-6 left-6 right-6">
        <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
          Ask a Question
        </button>
      </div>
    </div>
  );
}
