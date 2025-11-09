export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-10 left-10 text-6xl opacity-30 animate-float text-orange-400">
        ♟
      </div>
      <div className="absolute top-20 right-20 text-7xl opacity-25 animate-float-delayed" style={{ animationDelay: '1s' }}>
        🧩
      </div>
      <div className="absolute bottom-20 left-20 text-8xl opacity-30 animate-float-slow text-red-400">
        ♚
      </div>
      <div className="absolute bottom-32 right-32 text-7xl opacity-25 animate-float-delayed" style={{ animationDelay: '2.5s' }}>
        ♕
      </div>
      <div className="absolute top-1/3 left-1/4 text-5xl opacity-20 animate-float text-orange-500" style={{ animationDelay: '0.5s' }}>
        ♜
      </div>
      <div className="absolute top-2/3 right-1/4 text-6xl opacity-25 animate-float-slow" style={{ animationDelay: '3s' }}>
        🧩
      </div>
      <div className="absolute top-1/2 left-1/3 text-5xl opacity-20 animate-float-delayed text-red-500" style={{ animationDelay: '2s' }}>
        ♞
      </div>
      <div className="absolute top-2/3 left-1/2 text-5xl opacity-20 animate-float text-orange-400" style={{ animationDelay: '3.5s' }}>
        ♙
      </div>
    </div>
  );
}
