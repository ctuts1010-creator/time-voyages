import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
    <a href="/" className="text-2xl font-extrabold text-sky-600">
      Time Voyages
    </a>

    <nav className="hidden gap-8 font-medium text-slate-700 md:flex">
      <a className="hover:text-sky-600" href="/">
        Trang chủ
      </a>
      <a className="hover:text-sky-600" href="/tours">
        Tour
      </a>
      <a className="hover:text-sky-600" href="/contact">
        Liên hệ
      </a>
    </nav>

    <a
      href="/contact"
      className="rounded-xl bg-sky-600 px-5 py-3 font-bold text-white hover:bg-sky-700"
    >
      Đặt tour
    </a>
  </div>
</header>

        {children}

        <footer className="bg-slate-950 px-6 py-12 text-white">
  <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
    <div>
      <h3 className="text-2xl font-extrabold text-sky-400">
        Time Voyages
      </h3>
      <p className="mt-4 text-slate-300">
        Khám phá Việt Nam với những hành trình được thiết kế chỉn chu,
        an toàn và đáng nhớ.
      </p>
    </div>

    <div>
      <h4 className="font-bold">Liên kết</h4>
      <div className="mt-4 space-y-2 text-slate-300">
        <p>
          <a href="/">Trang chủ</a>
        </p>
        <p>
          <a href="/tours">Tour du lịch</a>
        </p>
        <p>
          <a href="/contact">Liên hệ</a>
        </p>
      </div>
    </div>

    <div>
      <h4 className="font-bold">Liên hệ</h4>
      <div className="mt-4 space-y-2 text-slate-300">
        <p>Hotline: 0337 068 799</p>
        <p>Email: ctuts.1010@gmail.com</p>
        <p>N. 73 Ly Nam De, Cua Dong Ward, Hoan Kiem Dist., Hanoi</p>
      </div>
    </div>
  </div>

  <p className="mt-10 text-center text-sm text-slate-500">
    © 2026 Time Voyages. All rights reserved.
  </p>
</footer>
      </body>
    </html>
  );
}