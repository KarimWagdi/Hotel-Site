import { Facebook, Instagram, Link, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-display mb-4">Royal Mandarin</h3>
            <p className="text-sm opacity-80">
              Experience luxury redefined at Royal Mandarin, where every moment becomes a cherished memory.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#rooms" className="hover:text-secondary transition-colors">Rooms & Suites</a></li>
              <li><a href="#dining" className="hover:text-secondary transition-colors">Dining</a></li>
              <li><a href="#spa" className="hover:text-secondary transition-colors">Spa & Wellness</a></li>
              <li><a href="#experiences" className="hover:text-secondary transition-colors">Experiences</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>123 Luxury Avenue</li>
              <li>Paradise City, PC 12345</li>
              <li>+1 (555) 123-4567</li>
              <li>info@royalmandarin.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 Royal Mandarin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}