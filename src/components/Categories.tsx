import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Code, Briefcase, Palette, TrendingUp, Heart, Lightbulb, Users, Globe } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Technology & Engineering",
      icon: Code,
      mentorCount: 156,
      description: "Software development, DevOps, system architecture",
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    },
    {
      id: 2,
      name: "Business & Strategy",
      icon: Briefcase,
      mentorCount: 89,
      description: "Business strategy, operations, consulting",
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    },
    {
      id: 3,
      name: "Design & Creative",
      icon: Palette,
      mentorCount: 67,
      description: "UX/UI design, graphic design, creative direction",
      color: "bg-pink-500/10 text-pink-600 border-pink-500/20",
    },
    {
      id: 4,
      name: "Marketing & Growth",
      icon: TrendingUp,
      mentorCount: 92,
      description: "Digital marketing, growth hacking, brand strategy",
      color: "bg-green-500/10 text-green-600 border-green-500/20",
    },
    {
      id: 5,
      name: "Health & Wellness",
      icon: Heart,
      mentorCount: 43,
      description: "Fitness coaching, nutrition, mental health",
      color: "bg-red-500/10 text-red-600 border-red-500/20",
    },
    {
      id: 6,
      name: "Personal Development",
      icon: Lightbulb,
      mentorCount: 78,
      description: "Career coaching, productivity, goal setting",
      color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    },
    {
      id: 7,
      name: "Leadership & Management",
      icon: Users,
      mentorCount: 102,
      description: "Team management, executive coaching, communication",
      color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
    },
    {
      id: 8,
      name: "Entrepreneurship",
      icon: Globe,
      mentorCount: 55,
      description: "Startup advice, fundraising, scaling businesses",
      color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Explore Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find mentors in your field of interest or explore new areas for 
            professional growth and development.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-[1.02]"
              >
                <div className="space-y-4">
                  {/* Icon and Mentor Count */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.mentorCount} mentors
                    </Badge>
                  </div>

                  {/* Category Info */}
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Browse All Button */}
        <div className="text-center">
          <Button variant="hero" size="lg">
            Browse All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;