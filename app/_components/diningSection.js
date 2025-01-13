import drink from "../../public/assets/1.-Aqua-y-Verde.jpg";

export default function DiningSection() {
    return (
      <section id="dining" className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <h2 className="text-4xl md:text-5xl text-primary font-display text-center mb-12">
            Culinary Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80"
                alt="Fine Dining"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors">
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-display mb-2">The Grand Restaurant</h3>
                  <p className="opacity-90">Fine dining with panoramic views</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80"
                alt="Sushi Bar"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors">
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-display mb-2">Sakura Sushi Bar</h3>
                  <p className="opacity-90">Authentic Japanese cuisine</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src={drink.src}
                alt="Lounge Bar"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors">
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-display mb-2">Sky Lounge</h3>
                  <p className="opacity-90">Cocktails and city views</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }