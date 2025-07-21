import { Search, Calendar, VideoIcon, Star } from "lucide-react";
import { Button } from "./ui/button";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Search,
      title: "Find Your Mentor",
      description: "Browse through hundreds of expert mentors and filter by category, expertise, availability, and price range.",
      color: "bg-accent/10 text-accent",
    },
    {
      step: 2,
      icon: Calendar,
      title: "Book a Session",
      description: "Choose a convenient time slot, share your goals, and complete secure payment to confirm your mentorship session.",
      color: "bg-success/10 text-success",
    },
    {
      step: 3,
      icon: VideoIcon,
      title: "Connect & Learn",
      description: "Join your 1-on-1 video call, get personalized advice, actionable insights, and accelerate your growth.",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      step: 4,
      icon: Star,
      title: "Leave Feedback",
      description: "Rate your experience and provide feedback to help other mentees discover the best mentors for their needs.",
      color: "bg-yellow-500/10 text-yellow-600",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in just four simple steps and begin your journey towards 
            professional growth and success.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.step} className="relative">
                {/* Step Card */}
                <div className="text-center space-y-4">
                  {/* Step Number */}
                  <div className="relative">
                    <div className={`w-16 h-16 mx-auto rounded-full ${step.color} flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Line (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border transform -translate-y-1/2">
                    <div className="w-3 h-3 bg-accent rounded-full absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-accent/10 to-success/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Join thousands of professionals who have accelerated their careers with expert mentorship.
            </p>
            <Button variant="hero" size="xl">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;