function CreateEvent() {
  return (
    <main className="min-h-screen bg-[#f5f4ef] py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border p-8">

        <h1 className="text-3xl font-bold mb-2">
          Create an Event
        </h1>

        <p className="text-gray-500 mb-8">
          Fill in the details, then publish your event.
        </p>

        <form className="space-y-5">

          {/* Title */}
          <div>
            <label className="block mb-2 font-medium">
              Event Title
            </label>

            <input
              type="text"
              placeholder="Give your event a clear name"
              className="w-full border rounded-xl p-3"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows="4"
              placeholder="What is this event about?"
              className="w-full border rounded-xl p-3"
            />
          </div>

          {/* Date + Time */}
          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="block mb-2 font-medium">
                Date
              </label>

              <input
                type="date"
                className="w-full border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Time
              </label>

              <input
                type="time"
                className="w-full border rounded-xl p-3"
              />
            </div>

          </div>

          {/* Location */}
          <div>
            <label className="block mb-2 font-medium">
              Location / Venue
            </label>

            <input
              type="text"
              placeholder="Venue name and city"
              className="w-full border rounded-xl p-3"
            />
          </div>

          {/* Category + Capacity */}
          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="block mb-2 font-medium">
                Category
              </label>

              <select className="w-full border rounded-xl p-3">
                <option>Music</option>
                <option>Tech</option>
                <option>Sports</option>
                <option>Arts</option>
                <option>Business</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Max Capacity
              </label>

              <input
                type="number"
                placeholder="100"
                className="w-full border rounded-xl p-3"
              />
            </div>

          </div>

          {/* Image */}
          <div>
            <label className="block mb-2 font-medium">
              Cover Image
            </label>

            <input
              type="file"
              className="w-full border rounded-xl p-3"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">

            <button
              type="button"
              className="flex-1 border rounded-xl py-3"
            >
              Save Draft
            </button>

            <button
              type="submit"
              className="flex-1 bg-green-700 text-white rounded-xl py-3 hover:bg-green-800"
            >
              Publish Event
            </button>

          </div>

        </form>

      </div>
    </main>
  );
}

export default CreateEvent;