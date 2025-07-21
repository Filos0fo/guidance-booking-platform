import { Button } from "./ui/button";
import { ArrowRight, Play, Users, Star, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-accent/10">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Level Up Your Career with 
                <span className="text-transparent bg-gradient-to-r from-accent to-success bg-clip-text">
                  {" "}Expert Mentors
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Connect with industry leaders and accelerate your professional growth through personalized 1-on-1 mentorship sessions.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Expert Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Sessions Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="hero" className="group">
                Find Your Mentor
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="xl" variant="outline" className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                Trusted by 50k+ professionals
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                4.9/5 rating
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10 bg-card border border-border rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                {/* Mock mentor profile */}
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Mentor"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-card-foreground">David Chen</h3>
                    <p className="text-sm text-muted-foreground">Senior Product Manager at Google</p>
                    <div className="flex items-center mt-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">4.9</span>
                      <span className="text-sm text-muted-foreground ml-1">(127 reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Mock calendar */}
                <div className="bg-secondary/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">Available This Week</h4>
                    <Calendar className="w-4 h-4 text-accent" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {["Mon 2PM", "Wed 10AM", "Fri 4PM"].map((time) => (
                      <div
                        key={time}
                        className="bg-background border border-border rounded-md p-2 text-center text-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full" variant="hero">
                  Book 30min Session - $89
                </Button>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-success/20 rounded-2xl transform rotate-6 scale-105 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;