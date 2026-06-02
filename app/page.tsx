import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";
export default function Home() {
  return (
    <main>
      <section
        className="relative flex min-h-[85vh] items-center bg-cover bg-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto max-w-6xl text-white">
          <p className="mb-4 font-semibold uppercase tracking-widest text-sky-300">
            Time Voyages Travel
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            Du lịch dễ dàng, trải nghiệm đáng nhớ
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-100 md:text-xl">
            Khám phá các tour du lịch Việt Nam với lịch trình rõ ràng, giá minh bạch và hỗ trợ tận tâm.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/tours"
              className="rounded-xl bg-sky-500 px-8 py-4 font-bold text-white"
            >
              Khám phá tour
            </a>

            <a
              href="/contact"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white"
            >
              Tư vấn miễn phí
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-center font-semibold text-sky-600">
            TOUR NỔI BẬT
          </p>

          <h2 className="mt-2 text-center text-4xl font-bold text-slate-900">
            Hành trình được yêu thích
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {tours.map((tour) => (
  <TourCard
    key={tour.id}
    id={tour.id}
    name={tour.name}
    duration={tour.duration}
    location={tour.location}
    price={tour.price}
    image={tour.image}
  />
))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold">Lịch trình rõ ràng</h3>
            <p className="mt-3 text-slate-600">
              Mỗi tour đều có thông tin chi tiết về thời gian, điểm đến và dịch vụ đi kèm.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold">Giá minh bạch</h3>
            <p className="mt-3 text-slate-600">
              Không phát sinh bất ngờ, thông tin giá được trình bày rõ trước khi đặt tour.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold">Hỗ trợ tận tâm</h3>
            <p className="mt-3 text-slate-600">
              Đội ngũ tư vấn hỗ trợ bạn trước, trong và sau chuyến đi.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}