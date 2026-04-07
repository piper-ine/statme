"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        window.location.href = "/login";
      } else {
        const data = await res.text();
        setError(data || "Ошибка регистрации");
      }
    } catch (err) {
      setError("Сервер недоступен");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">

      {/* Card */}
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.01]">

        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Регистрация
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="peer w-full px-4 pt-5 pb-2 bg-white/10 text-white rounded-lg outline-none border border-transparent focus:border-indigo-500 transition"
            />
            <label className="absolute left-4 top-2 text-sm text-gray-400 transition-all 
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
              peer-focus:top-2 peer-focus:text-sm">
              Имя
            </label>
          </div>

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

          {/* Error */}
          {error && (
            <p className="text-red-400 text-sm text-center">
              {error}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all text-white font-semibold shadow-lg shadow-indigo-500/20 disabled:opacity-50"
          >
            {loading ? "Создание..." : "Создать аккаунт"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Уже есть аккаунт?{" "}
          <a href="/auth/login/" className="text-indigo-400 hover:underline">
            Войти
          </a>
        </p>
      </div>

      {/* Glow */}
      <div className="absolute w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full -z-10 animate-pulse" />
    </div>
  );
}