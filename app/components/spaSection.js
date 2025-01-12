import spa from "../../public/assets/spa1.jpeg";

export default function SpaSection() {
    return (
      <section id="spa" className="section-padding bg-accent">
        <div className="container mx-auto container-padding">
          <h2 className="text-4xl md:text-5xl text-primary font-display text-center mb-12">
            Spa & Wellness
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-display text-primary">Your Journey to Tranquility</h3>
              <p className="text-gray-600">
                Immerse yourself in a world of relaxation and rejuvenation at our luxury spa. Our expert therapists combine ancient healing traditions with modern techniques to provide an unforgettable wellness experience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>Signature Massage Treatments</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>Luxury Facial Treatments</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>Wellness Programs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>Yoga and Meditation</span>
                </li>
              </ul>
              <button className="bg-secondary text-primary px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors">
                Book Treatment
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={spa.src}
                alt="Spa Treatment"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80"
                alt="Wellness Center"
                className="w-full h-64 object-cover rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }