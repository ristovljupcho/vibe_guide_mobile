import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { Heart } from "lucide-react";

type PlaceCardProps = {
  name: string;
  rating: number;
  primaryType: string;
  topTraits: string[];
  imageSrc: StaticImageData;
  onClick?: () => void; // Optional click handler
};

export default function PlaceCard({
  name,
  rating,
  topTraits,
  imageSrc,
  onClick,
}: PlaceCardProps) {
  return (
    <div
      onClick={onClick}
      className="form-color rounded-2xl w-[200px] shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="relative">
        <div className="absolute top-2 right-2 group">
          <div className="bg-white rounded-full p-2 shadow-md cursor-pointer">
            <Heart className="w-3 h-3" />
          </div>
          <div className="absolute top-full mt-1 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs rounded px-2 py-1">
            Save
          </div>
        </div>
        <Image
          src={imageSrc}
          alt="Logo"
          height={200}
          className="block w-full rounded-2xl"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="main-text font-serif">{name}</h2>
          <div className="main-text font-semibold">{rating.toFixed(1)}</div>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {topTraits.map((trait, index) => (
            <a key={index} href="#" className="traits-text m-0.5">
              {trait}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
