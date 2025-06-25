import Image, { StaticImageData } from "next/image";
import { Star } from "lucide-react";

interface PlaceCardProps {
  imageSrc: string | StaticImageData;
  name: string;
  rating: number;
  primaryType: string;
  topTraits: string[];
}

export default function PlaceCard({
  imageSrc,
  name,
  rating,
  primaryType,
  topTraits,
}: PlaceCardProps) {
  return (
    <div className="form-color rounded-2xl shadow-md hover:shadow-xl transition-shadow w-full max-w-sm overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>
      <div className="p-4">
        <div className="text-lg font-color">{name}</div>
        <div className="text-sm font-color mb-1 capitalize">{primaryType}</div>
        <div className="flex items-center gap-1 text-yellow-500 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < Math.round(rating) ? "currentColor" : "none"}
            />
          ))}
          <span className="text-sm font-color ml-1">({rating.toFixed(1)})</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {topTraits.map((trait, i) => (
            <span
              key={i}
              className="bg-color font-color text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
