import PlaceCard from "@/components/ui/place-card";
import places from "@/data/PlacePreviewResponseDTO.json";
import image from "@/data/place-picture.jpg";

export default function PlacesView() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
      {places.map((place, index) => (
        <PlaceCard
          key={index}
          imageSrc={image}
          name={place.name}
          rating={place.rating}
          primaryType={place.primaryType}
          topTraits={place.topTraits}
        />
      ))}
    </div>
  );
}
