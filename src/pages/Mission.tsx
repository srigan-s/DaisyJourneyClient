import React, { useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Heart, Shield, Users, Smile, Star, Clock } from 'lucide-react';

const values = [
  {
    icon: <Heart className="text-primary-500 w-8 h-8" />,
    title: 'Compassion',
    description: 'We treat everyone with empathy and kindness.',
  },
  {
    icon: <Shield className="text-primary-500 w-8 h-8" />,
    title: 'Safety',
    description: 'We prioritize the safety and well-being of all patients and volunteers.',
  },
  {
    icon: <Users className="text-primary-500 w-8 h-8" />,
    title: 'Community',
    description: 'We build bridges between youth and healthcare systems.',
  },
];

const impact = [
  {
    icon: <Smile className="text-secondary-500 w-8 h-8" />,
    title: '100+ Volunteers',
    description: 'Trained and active in multiple hospitals.',
  },
  {
    icon: <Star className="text-secondary-500 w-8 h-8" />,
    title: '500+ Patients Reached',
    description: 'Making a difference one interaction at a time.',
  },
  {
    icon: <Clock className="text-secondary-500 w-8 h-8" />,
    title: 'Thousands of Hours',
    description: 'Dedicated volunteer service to the community.',
  },
];

const Card = ({
  icon,
  title,
  description,
  highlight = 'primary',
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: 'primary' | 'secondary';
}) => (
  <div
    className={`animate-wobble bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-${highlight}-500`}
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Mission: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Our Mission" />
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12 animate-fade-in-up">
          We empower youth to become compassionate healthcare leaders through hands-on volunteer experiences in hospital settings.
        </p>

        {/* Core Values */}
        <SectionHeading title="Our Core Values" />
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-16">
          {values.map((val, index) => (
            <Card key={index} {...val} highlight="primary" />
          ))}
        </div>

        {/* Impact */}
        <SectionHeading title="Our Impact" />
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {impact.map((val, index) => (
            <Card key={index} {...val} highlight="secondary" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
