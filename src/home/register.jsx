export default function Register() {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-0 bg-cover"  style={{
        background:
          "linear-gradient(90deg, rgba(178,12,193,0.6) 18%, rgba(13,4,31,0.6) 88%)",
      }}>
        <div className="bg-[#0D041F] p-8 rounded-lg shadow-lg w-full max-w-md">
          {/* <h1 className="text-3xl font-bold text-center text-[#B20CC1] mb-6">Crypto</h1> */}
          <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-xl mb-5 ">Register</h2>
           
        </div>
          <form>
            <input
              type="text"
              placeholder="Full name"
              className="w-full p-3 mb-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 mb-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-[#B20CC1] p-3 rounded text-white font-bold hover:bg-[#42275a]">
              Register
            </button>
            <p className="text-gray-400 text-sm text-center mt-4">
              or <a href="/login" className="text-blue-400 hover:underline">Log in</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
  