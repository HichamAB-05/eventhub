import { Link } from "react-router-dom";
function AttendeeList() {
  const attendees = [
    {
      id: 1,
      name: "Yasmine R.",
      email: "yasmine@gmail.com",
      bookedOn: "May 10",
      status: "Confirmed",
    },
    {
      id: 2,
      name: "Omar K.",
      email: "omar@gmail.com",
      bookedOn: "May 11",
      status: "Confirmed",
    },
    {
      id: 3,
      name: "Sara M.",
      email: "sara@gmail.com",
      bookedOn: "May 12",
      status: "Confirmed",
    },
    {
      id: 4,
      name: "Amina B.",
      email: "amina@gmail.com",
      bookedOn: "May 12",
      status: "Pending",
    },
    {
      id: 5,
      name: "Layla H.",
      email: "layla@gmail.com",
      bookedOn: "May 13",
      status: "Confirmed",
    },
    {
      id: 6,
      name: "Mehdi T.",
      email: "mehdi@gmail.com",
      bookedOn: "May 13",
      status: "Canceled",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f4ef] py-10 px-6">
        
      <div className="max-w-5xl mx-auto bg-white border rounded-2xl p-8">

        {/* Header */}
        <Link to="/manage-events"className="inline-block mb-6 text-green-700 hover:underline" >
            ← Back to My Events
        </Link> 

        <h1 className="text-3xl font-bold mb-2">
          Attendee List
        </h1>

        <p className="text-gray-500 mb-8">
          Jazz Night at the Roof • May 20, 2026
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-10 text-center">

          <div>
            <h2 className="text-4xl font-bold">48</h2>
            <p className="text-gray-500">Booked</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">32</h2>
            <p className="text-gray-500">Remaining</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">80</h2>
            <p className="text-gray-500">Capacity</p>
          </div>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full border rounded-xl overflow-hidden">

            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3">#</th>
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Email</th>
                <th className="text-left p-3">Booked On</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>

            <tbody>

              {attendees.map((attendee) => (
                <tr
                  key={attendee.id}
                  className="border-t"
                >
                  <td className="p-3">{attendee.id}</td>

                  <td className="p-3">
                    {attendee.name}
                  </td>

                  <td className="p-3">
                    {attendee.email}
                  </td>

                  <td className="p-3">
                    {attendee.bookedOn}
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                        ${
                          attendee.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : attendee.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }
                      `}
                    >
                      {attendee.status}
                    </span>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </main>
  );
}

export default AttendeeList;
