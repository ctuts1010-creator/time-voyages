"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setLoading(true);
    setStatus("");

    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      tour: formData.get("tour"),
      message: formData.get("message"),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (response.ok) {
      setStatus("Gửi thành công! Time Voyages sẽ liên hệ bạn sớm.");
      form.reset();
    } else {
      setStatus("Gửi thất bại. Vui lòng thử lại.");
    }
  }

  return (
    <main className="bg-slate-50 px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.3fr]">
        <section>
          <p className="font-semibold text-sky-600">LIÊN HỆ</p>

          <h1 className="mt-2 text-5xl font-bold text-slate-900">
            Tư vấn chuyến đi của bạn
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Hãy để lại thông tin, Time Voyages sẽ liên hệ tư vấn tour phù hợp
            với thời gian, ngân sách và điểm đến bạn mong muốn.
          </p>

          <div className="mt-8 space-y-4 rounded-3xl bg-white p-8 shadow-sm">
            <p>
              <strong>Hotline:</strong> 0337 068 799
            </p>

            <p>
              <strong>Email:</strong> ctuts.1010@gmail.com
            </p>

            <p>
              <strong>Địa chỉ:</strong> N. 73 Ly Nam De, Cua Dong Ward, Hoan Kiem Dist., Hanoi
            </p>

            <p>
              <strong>Thời gian làm việc:</strong> 8:00 - 18:00
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">
            Gửi yêu cầu tư vấn
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block font-semibold">Họ và tên</label>
              <input
                name="name"
                required
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-sky-500"
                placeholder="Nguyễn Văn A"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">Số điện thoại</label>
              <input
                name="phone"
                required
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-sky-500"
                placeholder="0900 000 000"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-sky-500"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">Tour quan tâm</label>
              <select
                name="tour"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-sky-500"
              >
                <option>Đà Nẵng - Hội An</option>
                <option>Phú Quốc</option>
                <option>Hạ Long</option>
                <option>Tour khác</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold">Nội dung</label>
              <textarea
                name="message"
                required
                className="h-36 w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-sky-500"
                placeholder="Bạn muốn đi khi nào? Bao nhiêu người?"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-sky-600 px-6 py-4 font-bold text-white hover:bg-sky-700 disabled:opacity-60"
            >
              {loading ? "Đang gửi..." : "Gửi yêu cầu"}
            </button>

            {status && (
              <p className="font-semibold text-sky-600">
                {status}
              </p>
            )}
          </form>
        </section>
      </div>
    </main>
  );
}