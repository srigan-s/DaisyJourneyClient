import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import Button from './Button';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  location,
  description,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar size={16} className="mr-2 text-primary-500" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Clock size={16} className="mr-2 text-primary-500" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <MapPin size={16} className="mr-2 text-primary-500" />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        
        <Button variant="outline" className="w-full">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default EventCard;