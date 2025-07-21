import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, MapPin, Clock } from "lucide-react";

interface MentorCardProps {
  mentor: {
    id: string;
    name: string;
    title: string;
    company: string;
    avatar: string;
    rating: number;
    reviewCount: number;
    hourlyRate: number;
    location: string;
    categories: string[];
    responseTime: string;
    isAvailable: boolean;
  };
}

const MentorCard = ({ mentor }: MentorCardProps) => {
  return (
    <div className="mentor-card bg-card border border-border rounded-xl p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative">
          <img
            src={mentor.avatar}
            alt={mentor.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          {mentor.isAvailable && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-background"></div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-card-foreground truncate">
            {mentor.name}
          </h3>
          <p className="text-sm text-muted-foreground truncate">
            {mentor.title} at {mentor.company}
          </p>
          <div className="flex items-center mt-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium ml-1">{mentor.rating}</span>
            <span className="text-sm text-muted-foreground ml-1">
              ({mentor.reviewCount} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-4">
        {mentor.categories.slice(0, 3).map((category) => (
          <Badge key={category} variant="secondary" className="text-xs">
            {category}
          </Badge>
        ))}
        {mentor.categories.length > 3 && (
          <Badge variant="outline" className="text-xs">
            +{mentor.categories.length - 3} more
          </Badge>
        )}
      </div>

      {/* Details */}
      <div className="space-y-2 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          {mentor.location}
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          Responds in {mentor.responseTime}
        </div>
      </div>

      {/* Pricing and Action */}
      <div className="mt-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-primary">
              ${mentor.hourlyRate}
            </span>
            <span className="text-sm text-muted-foreground">/hour</span>
          </div>
          {mentor.isAvailable ? (
            <Badge variant="outline" className="text-success border-success">
              Available
            </Badge>
          ) : (
            <Badge variant="outline" className="text-muted-foreground">
              Busy
            </Badge>
          )}
        </div>
        <Button className="w-full" variant="hero">
          Book Session
        </Button>
      </div>
    </div>
  );
};

export default MentorCard;