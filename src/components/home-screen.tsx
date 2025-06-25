"use client";

import { Menu, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import PlacesView from "@/components/place-view/places-view";

interface HomeScreenProps {
  onMenuToggle: () => void;
  onSearch: () => void;
}

const navButtonClasses =
  "w-10 h-10 bg-white/20 rounded-full flex items-center justify-center";

export default function HomeScreen({ onMenuToggle, onSearch }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-color">
      {/* Header */}
      <header className="flex items-center justify-between p-4 pt-12">
        <Image src="/logo.png" alt="Logo" width={150} height={75} />
        <button onClick={onMenuToggle} className="text-white flex items-center justify-center h-[75px]">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <button
          onClick={onSearch}
          className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-3 text-left text-white/60"
          aria-label="Search for a place"
        >
          search for a place...
        </button>
      </div>

      {/* Venue Grid */}
      <PlacesView />

    
    </div>
  );
}
