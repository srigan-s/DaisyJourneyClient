import React from 'react';
import { Stethoscope, Heart, Cross, Pill, Activity, Shield } from 'lucide-react';

const FloatingMedicalElements: React.FC = () => {
  const elements = [
    { Icon: Stethoscope, className: 'top-20 left-10 text-primary-200', delay: '0s' },
    { Icon: Heart, className: 'top-40 right-20 text-secondary-200', delay: '1s' },
    { Icon: Cross, className: 'top-60 left-1/4 text-primary-300', delay: '2s' },
    { Icon: Pill, className: 'bottom-40 right-10 text-secondary-300', delay: '0.5s' },
    { Icon: Activity, className: 'bottom-60 left-20 text-primary-200', delay: '1.5s' },
    { Icon: Shield, className: 'top-1/3 right-1/4 text-secondary-200', delay: '2.5s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map(({ Icon, className, delay }, index) => (
        <Icon
          key={index}
          size={24}
          className={`absolute opacity-30 animate-float-wobble ${className}`}
          style={{ animationDelay: delay }}
        />
      ))}
    </div>
  );
};

export default FloatingMedicalElements;