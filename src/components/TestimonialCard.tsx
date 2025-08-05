import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-t-4 border-gradient-to-r from-pink-400 to-purple-500">
      <div className="flex items-start space-x-4">
        {/* Headshot bubble */}
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 p-0.5 animate-float">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              {image ? (
                <img 
                  src={image} 
                  alt={name}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center text-purple-600 font-bold text-lg">
                  {name.charAt(0)}
                </div>
              )}
            </div>
          </div>
          {/* Online indicator */}
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-bounce"></div>
        </div>
        
        <div className="flex-1">
          <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
            "{quote}"
          </blockquote>
          <div>
            <p className="font-semibold text-gray-900 text-lg">{name}</p>
            <p className="text-purple-600 font-medium">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;