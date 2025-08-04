import React from 'react';

interface PartnerCardProps {
  name: string;
  description: string;
  logo: string;
  website?: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  description,
  logo,
  website,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg flex flex-col h-full">
      <div className="flex justify-center mb-6">
        <img
          src={logo}
          alt={`${name} logo`}
          className="h-16 object-contain"
        />
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{name}</h3>
      
      <p className="text-gray-600 mb-6 flex-grow text-center">
        {description}
      </p>
      
      {website && (
        <div className="mt-auto text-center">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
          >
            Visit Website
          </a>
        </div>
      )}
    </div>
  );
};

export default PartnerCard;