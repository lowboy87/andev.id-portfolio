export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background">
      {/* Logo */}
      <div className="mb-8">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-24 h-24 object-contain animate-pulse"
        />
      </div>

      {/* Nama */}
      <div className="text-2xl font-bold text-gradient-static mb-8">
        AnDev
      </div>

      {/* Loading bar */}
      <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full animate-[shimmer_1.5s_ease-in-out_infinite]" 
             style={{width: '60%'}} />
      </div>

      {/* Teks */}
      <p className="mt-4 text-xs text-white/30 font-mono animate-pulse">
        Loading...
      </p>
    </div>
  );
}