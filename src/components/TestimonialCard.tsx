import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  role, 
  image 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover-lift border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-secondary-400"></div>
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg className="w-10 h-10 text-secondary-400 animate-pulse-slow" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8v6a6 6 0 01-6 6H2v2a8 8 0 008 8v-4a4 4 0 01-4-4v-2h4V8h-6zm16 0v6a6 6 0 01-6 6h-2v2a8 8 0 008 8v-4a4 4 0 01-4-4v-2h4V8h-6z" />
          </svg>
        </div>
        
        <p className="text-gray-600 italic mb-8 flex-grow text-lg leading-relaxed">
          {quote}
        </p>
        
        <div className="flex items-center mt-auto">
          {image ? (
            <div className="relative mr-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 p-0.5 animate-pulse-slow">
                <img 
                  src={image} 
                  alt={name} 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-bounce-slow"></div>
            </div>
          ) : (
            <div className="relative mr-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center animate-pulse-slow">
                <span className="text-primary-700 text-xl font-bold">
                  {name.charAt(0)}
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-bounce-slow"></div>
            </div>
          )}
          <div>
            <h4 className="font-bold text-gray-800 text-lg">{name}</h4>
            <p className="text-primary-600 font-medium">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
                {name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <h4 className="font-semibold text-gray-800">{name}</h4>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;