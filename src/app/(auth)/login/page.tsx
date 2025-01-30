"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", { email, password, callbackUrl: "/" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form onSubmit={handleLogin} className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 p-2 border rounded w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 p-2 border rounded w-full"
        />
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
