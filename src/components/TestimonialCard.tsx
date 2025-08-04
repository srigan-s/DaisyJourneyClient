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
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg className="w-8 h-8 text-secondary-400" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8v6a6 6 0 01-6 6H2v2a8 8 0 008 8v-4a4 4 0 01-4-4v-2h4V8h-6zm16 0v6a6 6 0 01-6 6h-2v2a8 8 0 008 8v-4a4 4 0 01-4-4v-2h4V8h-6z" />
          </svg>
        </div>
        
        <p className="text-gray-600 italic mb-6 flex-grow">
          {quote}
        </p>
        
        <div className="flex items-center mt-auto">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
              <span className="text-primary-700 text-xl font-semibold">
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