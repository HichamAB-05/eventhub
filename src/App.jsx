import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateEvent from "./pages/CreateEvent";
import ManageEvents from "./pages/ManageEvents";
import AttendeeList from "./pages/AttendeeList";



function App() {
  return (
    <main className="min-h-screen bg-[#f5f4ef]">

      {/* Navbar */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-green-700" >
            EventHub
          </Link>

          {/* Menu */}
          <nav className="flex items-center gap-4">

            <Link to="/" className="hover:text-green-700 transition" >
              Home
            </Link>

            <Link to="/event" className="hover:text-green-700 transition" >
              Event
            </Link>

            <Link to="/create-event" className="hover:text-green-700" >
                     Create Event
            </Link>

            <Link to="/manage-events" className="hover:text-green-700" >
                    Manage Events
            </Link>
            <Link to="/attendees" className="hover:text-green-700" >
                   Attendees
            </Link>

            <Link to="/login" className="border px-4 py-2 rounded-xl hover:bg-gray-100 transition" >
              Login
            </Link>

            <Link to="/register" className="bg-green-700 text-white px-4 py-2 rounded-xl hover:bg-green-800 transition" >
              Sign up
            </Link>

          </nav>
        </div>
      </header>

      {/* Pages */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/event" element={<EventDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/manage-events" element={<ManageEvents />} />
        <Route path="/attendees" element={<AttendeeList />} />
      </Routes>
  
    </main>
  );
}

export default App;