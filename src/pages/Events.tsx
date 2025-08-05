import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Calendar } from 'lucide-react';
import FloatingMedicalElements from '../components/FloatingMedicalElements';

const Events: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pastEvents = [
    {
      title: "Fall 2024 Cohort Graduation",
      date: "December 15, 2024",
      image: "https://images.pexels.com/photos/7089397/pexels-photo-7089397.jpeg",
      description: "Celebrating our amazing volunteers who completed their training and service."
    },
    {
      title: "Summer Social Impact Event",
      date: "August 20, 2024",
      image: "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg",
      description: "A wonderful gathering showcasing the impact of our volunteers at Baycrest."
    },
    {
      title: "Spring 2024 Orientation",
      date: "March 5, 2024",
      image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg",
      description: "Welcoming our new cohort of passionate volunteers to Daisy's Journey."
    },
    {
      title: "Healthcare Career Panel",
      date: "February 15, 2024",
      image: "https://images.pexels.com/photos/5699482/pexels-photo-5699482.jpeg",
      description: "An inspiring discussion with healthcare professionals about career paths and opportunities in the field."
    },
    {
      title: "Winter Volunteer Recognition",
      date: "January 20, 2024",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
      description: "Honoring our dedicated volunteers for their outstanding service and commitment to patient care."
    }
  ];

  return (
    <div>
      <FloatingMedicalElements />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary-50 animate-fade-in-up">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up">
              Events & Programs
            </h1>
            <div className="h-1 w-20 bg-secondary-500 mx-auto mb-6 rounded animate-pulse-slow"></div>
            <p className="text-xl text-gray-600 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Join our upcoming cohort and be part of our mission to bring comfort and care 
              to patients at Baycrest Hospital.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Cohort Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary-600 rounded-lg overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Daisy's Journey 2025 Cohort
                </h2>
                <p className="text-primary-100 mb-6">
                  Applications Open: March 1, 2025 • Program Start: May 2025
                </p>
                <p className="text-white mb-8">
                  Join our next cohort of dedicated volunteers at Baycrest Hospital. This 
                  comprehensive program includes training, mentorship, and hands-on 
                  experience in patient care support.
                </p>
                <div className="space-y-4">
                  <Button className="bg-white text-primary-600 hover:bg-gray-100">
                    Apply Now
                  </Button>
                  <p className="text-primary-100 text-sm">
                    *Limited spots available. Early applications are encouraged.
                  </p>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src="/images/lightskin.jpg"
                  alt="Volunteer Program"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20 bg-gray-50 animate-fade-in-up">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Past Events" 
            subtitle="Take a look at some of our recent events and celebrations"
          />
          
          <div className="max-w-5xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="rounded-lg"
            >
              {pastEvents.map((event, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[500px] group">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
                      <div className="p-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                        <p className="text-gray-200 mb-2">{event.date}</p>
                        <p className="text-gray-300">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;