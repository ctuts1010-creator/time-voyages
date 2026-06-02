import { tours } from "@/data/tours";

export default async function TourDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tour = tours.find((item) => item.id === id);

  if (!tour) {
    return (
      <main className="px-6 py-20">
        <h1 className="text-3xl font-bold">Không tìm thấy tour</h1>
      </main>
    );
  }

  return (
    <main className="bg-slate-50">
      <section
        className="relative flex h-[60vh] items-end bg-cover bg-center px-6 pb-16"
        style={{ backgroundImage: `url('${tour.image}')` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto w-full max-w-6xl text-white">
          <p className="font-semibold uppercase tracking-widest text-sky-300">
            {tour.location}
          </p>

          <h1 className="mt-3 max-w-3xl text-5xl font-bold md:text-6xl">
            {tour.name}
          </h1>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[2fr_1fr]">
          <div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900">
                Tổng quan tour
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {tour.description}
              </p>
            </div>

            <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900">
                Lịch trình
              </h2>

              <div className="mt-6 space-y-4">
                {tour.itinerary.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 p-5"
                  >
                    <p className="font-semibold text-slate-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-slate-500">Giá từ</p>

            <p className="mt-2 text-3xl font-bold text-sky-600">
              {tour.price}
            </p>

            <div className="mt-6 space-y-3 text-slate-700">
              <p>
                <strong>Thời gian:</strong> {tour.duration}
              </p>
              <p>
                <strong>Điểm đến:</strong> {tour.location}
              </p>
            </div>

            <a
              href="/contact"
              className="mt-8 block rounded-xl bg-sky-600 px-6 py-4 text-center font-bold text-white"
            >
              Đặt tour ngay
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}