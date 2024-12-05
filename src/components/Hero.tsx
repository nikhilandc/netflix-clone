import { Play, Info } from 'lucide-react';

export function Hero() {
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] w-full -z-10">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=2070&q=80"
          alt="Hero Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/60 to-zinc-900" />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        Stranger Things
      </h1>
      
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
      </p>

      <div className="flex space-x-3">
        <button className="flex items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:bg-white/80 md:py-2.5 md:px-8 md:text-xl">
          <Play className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>

        <button className="flex items-center gap-x-2 rounded bg-gray-600/70 px-5 py-1.5 text-sm font-semibold text-white transition hover:bg-gray-600/50 md:py-2.5 md:px-8 md:text-xl">
          <Info className="h-4 w-4 md:h-7 md:w-7" />
          More Info
        </button>
      </div>
    </div>
  );
}