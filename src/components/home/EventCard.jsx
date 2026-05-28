function EventCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border hover:shadow-lg transition">
      <div className="h-40 bg-green-100 flex items-center justify-center text-5xl">
        🎵
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold mb-3">
          Jazz Night at the Roof
        </h2>

        <p className="text-gray-500 text-sm mb-1">
          📅 May 20, 2026
        </p>

        <p className="text-gray-500 text-sm mb-4">
          📍 Rabat
        </p>

        <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
          Music
        </span>

        <p className="text-gray-400 text-sm mt-4">
          32 / 80 spots left
        </p>
      </div>
    </div>
  );
}

export default EventCard;