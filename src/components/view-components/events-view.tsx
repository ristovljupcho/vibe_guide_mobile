import EventCard from "@/components/ui/event-card";
import events from "@/data/EventResponseDTO.json";
import image1 from "@/data/event-1.jpg";
import image2 from "@/data/event-2.jpg";

export default function EventsView() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
      {events.map((event, index) => (
        <EventCard
          key={index}
          eventName={event.eventName}
          placeName={event.placeName}
          description={event.description}
          startDate={event.startDate}
          endDate={event.endDate}
          images={[image1, image2]}
        />
      ))}
    </div>
  );
}
