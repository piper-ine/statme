"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        window.location.href = "/dashboard";
      } else {
        alert("Ошибка входа");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      
      {/* Card */}
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.01]">
        
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Вход
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full px-4 pt-5 pb-2 bg-white/10 text-white rounded-lg outline-none border border-transparent focus:border-indigo-500 transition"
            />
            <label className="absolute left-4 top-2 text-sm text-gray-400 transition-all 
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
              peer-focus:top-2 peer-focus:text-sm">
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer w-full px-4 pt-5 pb-2 bg-white/10 text-white rounded-lg outline-none border border-transparent focus:border-indigo-500 transition"
            />
            <label className="absolute left-4 top-2 text-sm text-gray-400 transition-all 
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
              peer-focus:top-2 peer-focus:text-sm">
              Пароль
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all text-white font-semibold shadow-lg shadow-indigo-500/20 disabled:opacity-50"
          >
            {loading ? "Вход..." : "Войти"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Нет аккаунта?{" "}
          <a href="/register" className="text-indigo-400 hover:underline">
            Регистрация
          </a>
        </p>
      </div>

      {/* Background glow */}
      <div className="absolute w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full -z-10 animate-pulse" />
    </div>
  );
}