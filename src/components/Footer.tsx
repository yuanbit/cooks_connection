
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="font-heading text-2xl">Venue Vista</h3>
            <p className="text-white/80">Creating unforgettable moments in extraordinary spaces.</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#venues" className="text-white/80 hover:text-white">Our Venues</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white">Services</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/80">contact@venuevista.com</li>
              <li className="text-white/80">(555) 123-4567</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Policies</h4>
            <div className="space-y-4">
              <p className="text-white/80">
                Cancellation Policy: Full refund available up to 30 days before event date. 
                50% refund up to 14 days. Please contact us for more details.
              </p>
              <a href="#" className="text-white/80 hover:text-white underline">Read Full Policy</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Venue Vista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
