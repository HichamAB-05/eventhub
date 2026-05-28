function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-green-700">
          EventHub
        </h1>

        <div className="flex gap-3">
          <button className="border px-4 py-2 rounded-xl">
            Log in
          </button>

          <button className="bg-green-700 text-white px-4 py-2 rounded-xl">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;