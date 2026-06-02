import Image from "next/image";
type TourCardProps = {
  id: string;
  name: string;
  duration: string;
  location: string;
  price: string;
  image: string;
};

export default function TourCard({
  id,
  name,
  duration,
  location,
  price,
  image,
}: TourCardProps) {
  return (
    <a
      href={`/tours/${id}`}
      className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
    >
      <Image
  src={image}
  alt={name}
  width={600}
  height={400}
  className="h-56 w-full object-cover"
/>

      <div className="p-6">
        <p className="text-sm font-semibold text-sky-600">{location}</p>

        <h2 className="mt-2 text-2xl font-bold text-slate-900">{name}</h2>

        <p className="mt-3 text-slate-600">{duration}</p>

        <p className="mt-4 text-xl font-bold text-sky-600">{price}</p>

        <span className="mt-5 inline-block rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white">
          Xem chi tiết
        </span>
      </div>
    </a>
  );
}