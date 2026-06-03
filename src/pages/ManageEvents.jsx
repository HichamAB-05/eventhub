import { Link } from "react-router-dom";
function ManageEvents() {
  const events = [
    {
      id: 1,
      title: "Jazz Night at the Roof",
      date: "May 20",
      city: "Rabat",
      category: "Music",
      status: "Published",
      booked: "48 / 80 booked",
    },
    {
      id: 2,
      title: "Web Dev Meetup #12",
      date: "May 24",
      city: "Casablanca",
      category: "Tech",
      status: "Published",
      booked: "8 / 50 booked",
    },
    {
      id: 3,
      title: "Startup Pitch Night",
      date: "June 10",
      city: "Rabat",
      category: "Business",
      status: "Draft",
      booked: "0 / 40 booked",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f4ef] py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl border p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-3xl font-bold">
              My Events
            </h1>

            <p className="text-gray-500">
              Manage your published and draft events
            </p>
          </div>

         <Link to="/create-event" className="bg-green-700 text-white px-5 py-3 rounded-xl hover:bg-green-800" >
            + New Event
         </Link>

        </div>

        {/* Events List */}
        <div className="space-y-4">

          {events.map((event) => (
            <div
              key={event.id}
              className="border rounded-xl p-4 flex justify-between items-center"
            >
              <div>

                <h3 className="font-semibold">
                  {event.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {event.date} • {event.city} • {event.category}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  {event.booked}
                </p>

              </div>

              <div className="flex items-center gap-2">

                 <span
                     className={`px-3 py-1 rounded-full text-xs ${
                    event.status === "Published"
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700"
                      }`}
                     >
                    {event.status}
                 </span>

                    <Link
                      to="/attendees"
                      className="border px-3 py-2 rounded-lg text-sm hover:bg-gray-100"
                      >
                      👥
                    </Link>

                 <button className="border px-3 py-2 rounded-lg">
                       ✏️
                 </button>

                 <button className="border border-red-300 text-red-500 px-3 py-2 rounded-lg">
                     ✕
                 </button>

            </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}

export default ManageEvents;
