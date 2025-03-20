import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert("submitted");
    setUsername("");
    setEmail("");
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center w-screen min-h-screen bg-black text-3xl">
      <div className="bg-gray-50 flex flex-col items-center p-10 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={submitHandler} className="flex flex-col gap-4 w-80">
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="mb-2 text-sm font-medium text-gray-700"
            >
              Enter Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter Username"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-2 text-sm font-medium text-gray-700"
            >
              Enter Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mb-2 text-sm font-medium text-gray-700"
            >
              Enter Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white font-medium py-2 px-6 rounded-full hover:bg-blue-600 transition duration-200"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
