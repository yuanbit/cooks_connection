import React from "react";
import { Instagram, Facebook, Mail } from "lucide-react";
import { FaMeetup, FaLink } from "react-icons/fa6"; // Import Meetup and Threads alternative icon

export function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container px-4">
        <div className="flex flex-col items-center space-y-8">
          <h3 className="font-heading text-2xl">Cooks Connection</h3>

          <div className="space-y-4">
            <p className="text-center text-white/80">Connect with us on:</p>
            <div className="flex items-center gap-6">
              <a href="https://www.instagram.com/cc.berlin" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/cooksconnection" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.meetup.com/meetup-group-iuiytppt/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <FaMeetup size={24} />
              </a>
              <a href="https://www.threads.net/@cc.berlin" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <FaLink size={24} />
              </a>
            </div>
          </div>

         <div className="flex flex-col items-center space-y-2 text-white/80">
  <div className="flex items-center gap-2">
    <Mail size={24} />
    <a href="mailto:info@cooksconnection.de" className="hover:text-white transition-colors">
      info@cooksconnection.de
    </a>
  </div>
</div>

        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <div className="flex justify-center items-center gap-4 text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Cooks Connection. All rights reserved.</p>
            <span className="text-white/40">•</span>
            <a href="/impressum" className="hover:text-white transition-colors">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
