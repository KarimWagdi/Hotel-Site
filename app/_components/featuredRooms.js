import room1 from "../../public/assets/rooms-1.jpg";
import room2 from "../../public/assets/rooms-2.jpg";
import room3 from "../../public/assets/rooms-3.jpg";
import room4 from "../../public/assets/rooms-4.jpg";
import room5 from "../../public/assets/rooms-5.jpg";
import room6 from "../../public/assets/rooms-6.jpg";

const rooms = [
  {
    title: "Deluxe Ocean View",
    image: room1.src,
    price: "499",
    description: "Experience luxury with breathtaking ocean views",
  },
  {
    title: "Royal Suite",
    image: room2.src,
    price: "899",
    description: "Our finest suite with exclusive amenities",
  },
  {
    title: "Garden Villa",
    image: room3.src,
    price: "699",
    description: "Private villa surrounded by tropical gardens",
  },
  {
    title: "Presidential Suite",
    image: room4.src,
    price: "1299",
    description: "Ultimate luxury with panoramic views",
  },
  {
    title: "Beachfront Bungalow",
    image: room5.src,
    price: "799",
    description: "Direct access to private beach",
  },
  {
    title: "Family Suite",
    image: room6.src,
    price: "599",
    description: "Spacious comfort for the whole family",
  }
];

export default function FeaturedRooms() {
  return (
    <section id="rooms" className="section-padding bg-accent">
      <div className="container mx-auto container-padding">
        <h2 className="text-4xl md:text-5xl text-primary font-display text-center mb-12">
          Luxury Accommodations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display text-primary mb-2">
                  {room.title}
                </h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl text-primary">
                    ${room.price}
                    <span className="text-sm text-gray-500">/night</span>
                  </span>
                  <button className="bg-secondary text-primary px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}