"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <main className="min-h-screen">
      <div className="flex items-center justify-center p-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl p-4 border border-white/20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
            Log in
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Access your Flyte account
          </p>

          {/* Login Form */}
          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="text-gray-700 font-medium mb-1 block">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-gray-700 font-medium mb-1 block">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
                placeholder="Password"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                href="/auth/forgot-password"
                className="text-blue-600 text-sm hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Log In
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-gray-500 text-sm">or</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          {/* Google Login */}
          <button className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            <Image
              src="/images/google-logo.png"
              alt="Google"
              width={22}
              height={22}
            />
            <span className="font-medium text-gray-700">
              Continue with Google
            </span>
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link href="/auth/signup" className="text-blue-600 font-medium">
              Create one
            </Link>
          </p>
        </motion.div>
      </div>
    </main>
  );
}
