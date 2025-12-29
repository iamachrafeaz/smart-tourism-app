export function SplashScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-600 via-orange-500 to-red-600 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated Moroccan pattern background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1757163567171-d10652edde19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NhbiUyMHBhdHRlcm4lMjBnZW9tZXRyaWN8ZW58MXx8fHwxNzY3MDE2MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Pattern"
          className="w-full h-full object-cover animate-pulse"
        />
      </div>

      {/* Logo and content */}
      <div className="z-10 text-center px-6 animate-fade-in">
        <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
          <svg
            className="w-20 h-20 text-orange-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-4xl text-white mb-3 tracking-tight">
          Tangier Live
        </h1>

        <p className="text-white/90 text-lg max-w-sm mx-auto">
          Discover Tangier, authentically and safely
        </p>

        {/* Loading indicator */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <div
            className="w-2 h-2 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
