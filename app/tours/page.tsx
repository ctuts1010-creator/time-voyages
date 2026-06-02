import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";

export default function ToursPage() {
  return (
    <main className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-semibold text-sky-600">TOURS</p>

        <h1 className="mt-2 text-5xl font-bold text-slate-900">
          Tất cả tour du lịch
        </h1>

        <p className="mt-4 max-w-2xl text-slate-600">
          Lựa chọn hành trình phù hợp cho kỳ nghỉ của bạn cùng Time Voyages.
        </p>

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
    </main>
  );
}