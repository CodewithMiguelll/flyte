"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const SignUp = () => {
  return (
    <main className="p-4 relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sign-up Card */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-14 w-full max-w-md"
      >
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-700 mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">
            Join <span className="font-semibold text-blue-600">Flyte+</span> and
            start earning rewards with every flight.
          </p>
        </header>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </motion.button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </motion.section>

      {/* Floating Accent Text (subtle background text behind form) */}
      <h2 className="absolute text-[10rem] font-extrabold text-blue-900/5 select-none">
        FLYTE
      </h2>
    </main>
  );
};

export default SignUp;
