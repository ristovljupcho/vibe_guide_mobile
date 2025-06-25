"use client";
import { Menu, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import PlacesView from "@/components/place-view/places-view"

interface HomeScreenProps {
  onMenuToggle: () => void;
  onSearch: () => void;
}

export default function HomeScreen({
  onMenuToggle,
  onSearch,
}: HomeScreenProps) {
  const venues = [
    {
      id: 1,
      name: "Casa Bar",
      type: "cocktails bar",
      rating: 412,
      score: 0,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Casa Bar",
      type: "cocktails bar",
      rating: 355,
      score: 25.52,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Casa Bar",
      type: "cocktails bar",
      rating: 355,
      score: 25.52,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Casa Bar",
      type: "cocktails bar",
      rating: 355,
      score: 25.52,
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <div className="min-h-screen bg-color">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={75}
          className="block"
        />
        <button
          onClick={onMenuToggle}
          className="text-white flex items-center justify-center h-[75px]"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <button
          onClick={onSearch}
          className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-3 text-left text-white/60"
        >
          search for a place...
        </button>
      </div>

      {/* Venue Grid */}
    <PlacesView/>

      {/* Navigation Arrows */}
      <div className="flex justify-between px-8 pb-8">
        <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
