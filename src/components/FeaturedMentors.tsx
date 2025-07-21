import MentorCard from "./MentorCard";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedMentors = () => {
  // Mock data for featured mentors
  const featuredMentors = [
    {
      id: "1",
      name: "Sarah Johnson",
      title: "VP of Engineering",
      company: "Meta",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      rating: 4.9,
      reviewCount: 245,
      hourlyRate: 150,
      location: "San Francisco, CA",
      categories: ["Leadership", "Engineering", "Career Growth"],
      responseTime: "2 hours",
      isAvailable: true,
    },
    {
      id: "2",
      name: "Michael Rodriguez",
      title: "Senior Data Scientist",
      company: "Netflix",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      rating: 4.8,
      reviewCount: 189,
      hourlyRate: 120,
      location: "Los Angeles, CA",
      categories: ["Data Science", "Machine Learning", "Python"],
      responseTime: "1 hour",
      isAvailable: true,
    },
    {
      id: "3",
      name: "Emily Chen",
      title: "Product Design Director",
      company: "Airbnb",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      rating: 5.0,
      reviewCount: 312,
      hourlyRate: 130,
      location: "New York, NY",
      categories: ["UX Design", "Product Strategy", "Design Systems"],
      responseTime: "30 minutes",
      isAvailable: false,
    },
    {
      id: "4",
      name: "James Park",
      title: "Marketing Director",
      company: "Spotify",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: 4.7,
      reviewCount: 156,
      hourlyRate: 110,
      location: "Austin, TX",
      categories: ["Digital Marketing", "Growth Hacking", "Analytics"],
      responseTime: "3 hours",
      isAvailable: true,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Featured Mentors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with industry experts who have helped thousands of professionals 
            achieve their career goals.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Mentors
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMentors;