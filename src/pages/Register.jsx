import { Link } from "react-router-dom";
function Register() {
  return (
    <main className="min-h-screen bg-[#f5f4ef] flex items-center justify-center px-6 py-10">
      
      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-sm">
        
        <h1 className="text-4xl font-bold mb-2">
          Create Account ✨
        </h1>

        <p className="text-gray-500 mb-8">
          Join EventHub and discover amazing events
        </p>

        {/* Full Name */}
        <div className="mb-5">
          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Create a password"
            className="w-full border rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm password"
            className="w-full border rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Button */}
        <button className="w-full bg-green-700 text-white py-4 rounded-2xl hover:bg-green-800 transition">
          Create Account
        </button>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?
          <Link
  to="/login"
  className="text-green-700 font-medium ml-2"
>
  Login
</Link>
        </p>

      </div>
    </main>
  );
}

export default Register;
