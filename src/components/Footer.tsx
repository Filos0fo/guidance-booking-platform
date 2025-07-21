import { Link } from "react-router-dom";
import { User, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">MentorConnect</span>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              Connecting ambitious professionals with industry experts for personalized mentorship and career growth.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/mentors" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Find Mentors
              </Link>
              <Link to="/categories" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Categories
              </Link>
              <Link to="/how-it-works" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                How It Works
              </Link>
              <Link to="/pricing" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Pricing
              </Link>
            </div>
          </div>

          {/* For Mentors */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Mentors</h3>
            <div className="space-y-3">
              <Link to="/become-mentor" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Become a Mentor
              </Link>
              <Link to="/mentor-resources" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Resources
              </Link>
              <Link to="/mentor-guidelines" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Guidelines
              </Link>
              <Link to="/mentor-support" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Support
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>hello@mentorconnect.com</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 MentorConnect. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;