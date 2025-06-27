import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

type PlaceCardProps = {
  name: string;
  rating: number;
  primaryType: string;
  topTraits: string[];
  imageSrc: StaticImageData;
};

export default function PlaceCard({
  name,
  rating,
  primaryType,
  topTraits,
  imageSrc,
}: PlaceCardProps) {
  return (
    <div className="bg-[#202824] rounded-3xl w-[230px] shadow-md overflow-hidden text-white">
      <Image
        src={imageSrc}
        alt="Logo"
        width={150}
        height={75}
        className="block"
      />
      <div className="p-4">
        <h2 className="text-xl font-serif">{name}</h2>
        <p className="text-md text-gray-300">{rating}</p>
        <p className="text-md text-gray-300">{primaryType}</p>
        {topTraits.map((trait, index) => (
          <a
            key={index}
            href="#"
            className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-gray-600"
          >
            {trait}
          </a>
        ))}
      </div>
    </div>
  );
}
