function EventDetails() {
  return (
    <main className="min-h-screen bg-[#f5f4ef]">
      
      {/* Top image */}
      <div className="h-[350px] bg-green-200 flex items-center justify-center text-8xl">
        🎵
      </div>

      {/* Content */}
      <section className="max-w-5xl mx-auto p-6">
        
        <div className="bg-white rounded-3xl p-8 shadow-sm -mt-20 relative">
          
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
            Music
          </span>

          <h1 className="text-4xl font-bold mt-6 mb-4">
            Jazz Night at the Roof
          </h1>

          <p className="text-gray-600 leading-8 mb-8">
            Enjoy an unforgettable evening filled with jazz music,
            amazing vibes and rooftop atmosphere with talented artists.
          </p>

          {/* Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            
            <div className="bg-gray-100 rounded-2xl p-5">
              <p className="text-gray-500 mb-2">Date</p>
              <h3 className="font-bold">
                May 20, 2026
              </h3>
            </div>

            <div className="bg-gray-100 rounded-2xl p-5">
              <p className="text-gray-500 mb-2">Location</p>
              <h3 className="font-bold">
                Rabat
              </h3>
            </div>

            <div className="bg-gray-100 rounded-2xl p-5">
              <p className="text-gray-500 mb-2">Available Seats</p>
              <h3 className="font-bold">
                32 / 80
              </h3>
            </div>

          </div>

          <button className="bg-green-700 text-white px-8 py-4 rounded-2xl text-lg hover:bg-green-800 transition">
            Reserve Spot
          </button>

        </div>
      </section>
    </main>
  );
}

export default EventDetails;
