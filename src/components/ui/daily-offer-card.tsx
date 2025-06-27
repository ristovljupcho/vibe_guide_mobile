import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

type DailyOfferCardProps = {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  imageSrc: StaticImageData;
};

export default function DailyOfferCard({
  name,
  startDate,
  endDate,
  description,
  imageSrc,
}: DailyOfferCardProps) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const now = new Date();

  const isToday =
    start.getFullYear() === now.getFullYear() &&
    start.getMonth() === now.getMonth() &&
    start.getDate() === now.getDate();

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="relative w-[300px] h-[200px] rounded-2xl overflow-hidden shadow-lg">
      <Image src={imageSrc} alt={name} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/65 to-transparent" />
      {isToday && (
        <div className="absolute top-3 left-3 bg-green-200 text-green-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          AVAILABLE NOW
        </div>
      )}
      <div className="absolute bottom-3 left-3 right-3 text-color">
        <h2 className="main-text font-semibold">{name}</h2>
        <p className="information-text">
          {formatTime(start)} - {formatTime(end)}
        </p>
        <p className="description-text line-clamp-1">{description}</p>
      </div>
    </div>
  );
}
