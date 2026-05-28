import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">

      <h1 className="text-5xl font-bold mb-3">
        Upcoming events
      </h1>

      <p className="text-gray-500 mb-10">
        Discover and book events near you
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card */}
        <div className="bg-white rounded-2xl overflow-hidden border hover:shadow-lg transition">

          <div className="h-44 bg-green-100 flex items-center justify-center text-6xl">
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

            <Link
              to="/event"
              className="inline-block bg-green-700 text-white px-5 py-3 rounded-xl hover:bg-green-800 transition"
            >
              View Details
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
