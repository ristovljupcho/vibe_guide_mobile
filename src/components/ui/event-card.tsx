import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

type EventCardProps = {
  eventName: string;
  placeName: string;
  description: string;
  startDate: string;
  endDate: string;
  images: StaticImageData[];
};

export default function EventCard({
  eventName,
  placeName,
  description,
  startDate,
  endDate,
  images,
}: EventCardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const start = new Date(startDate);
  const end = new Date(endDate);
  const now = new Date();

  const isToday =
    start.getFullYear() === now.getFullYear() &&
    start.getMonth() === now.getMonth() &&
    start.getDate() === now.getDate();

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const handleNext = () =>
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-[300px] h-[200px] rounded-2xl overflow-hidden shadow-lg">
      <Image
        src={images[currentImage]}
        alt={`${eventName} image ${currentImage + 1}`}
        fill
        className="object-cover transition-opacity duration-300"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/65 to-transparent" />
      {isToday && (
        <div className="absolute top-3 left-3 bg-green-200 text-green-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          TODAY
        </div>
      )}
      <div className="absolute bottom-3 left-3 right-3">
        <h2 className="main-text font-semibold">{eventName}</h2>
        <p className="information-text">{placeName}</p>
        <p className="information-text">
          {formatTime(start)} - {formatTime(end)}
        </p>
        <p className="description-text line-clamp-1">{description}</p>
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/70 rounded-full w-6 h-15 flex items-center justify-center text-black text-base cursor-pointer z-10"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
