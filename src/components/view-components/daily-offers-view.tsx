import DailyOfferCard from "@/components/ui/daily-offer-card";
import dailyOffers from "@/data/DailyOfferResponseDTO.json";
import image from "@/data/place-picture.jpg";

export default function DailyOffersView() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
      {dailyOffers.map((offer, index) => (
        <DailyOfferCard
          key={index}
          name={offer.name}
          startDate={offer.startDate}
          endDate={offer.endDate}
          description={offer.description}
          imageSrc={image}
        />
      ))}
    </div>
  );
}
