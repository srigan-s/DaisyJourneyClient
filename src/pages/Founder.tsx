import React, { useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Quote } from 'lucide-react';
import FloatingMedicalElements from '../components/FloatingMedicalElements';

const Founder: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <FloatingMedicalElements />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary-50 animate-fade-in-up">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up">
              Our Founder's Story
            </h1>
            <div className="h-1 w-20 bg-secondary-500 mx-auto mb-6 rounded animate-pulse-slow"></div>
            <p className="text-xl text-gray-600 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              The inspiring journey of Yasmin Sheivari and the birth of Daisy's Journey
            </p>
          </div>
        </div>
      </section>

      {/* Founder Bio Section */}
      <section className="py-20 animate-fade-in-up">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-100 rounded-lg z-0"></div>
                <img
                  src="images/yasibody.jpg"
                  alt="Yasmin Sheivari, Founder of Daisy's Journey"
                  className="w-full h-auto rounded-lg shadow-lg relative z-10"
                />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-100 rounded-lg z-0"></div>
              </div>
            </div>
            
            <div>
              <SectionHeading title="Yasmin Sheivari" centered={false} />
              
              <h3 className="text-xl text-primary-600 font-medium mb-6">
                Founder & Executive Director
              </h3>
              
              <p className="text-lg text-gray-600 mb-6">
                Yasmin Sheivari founded Daisy's Journey in 2023 with a vision to transform 
                the hospital volunteer experience at Baycrest Hospital. Her passion for 
                healthcare and community service drives the organization's mission to 
                provide compassionate care and support to patients.
              </p>
              
              <p className="text-lg text-gray-600">
                Under Yasmin's leadership, Daisy's Journey has trained over 50 volunteers 
                who have contributed more than 1,000 hours of service to patients and families 
                at Baycrest Hospital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-20 animate-fade-in-up">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="The Journey" 
            subtitle="How Daisy's Journey grew from an idea to reality"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>
              
              <div className="relative z-10">
                {/* 2023 - Foundation */}
                <div className="mb-20 relative">
                  <div className="flex items-center justify-center">
                    <div className="bg-primary-600 text-white text-xl font-bold py-2 px-6 rounded-full mb-8 relative z-10">
                      2023
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="md:text-right">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">The Foundation</h3>
                      <p className="text-gray-600">
                        Daisy's Journey is established with the mission to enhance patient 
                        care through dedicated volunteer service at Baycrest Hospital.
                      </p>
                    </div>
                    <div>
                      <img
                        src="/images/yasistart.jpg"
                        alt="Foundation moment"
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
                
                {/* 2024 - Growth */}
                <div className="mb-20 relative">
                  <div className="flex items-center justify-center">
                    <div className="bg-primary-600 text-white text-xl font-bold py-2 px-6 rounded-full mb-8 relative z-10">
                      2024
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="order-2 md:order-1">
                      <img
                        src="images/middle.jpg"
                        alt="Program expansion"
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                    <div className="order-1 md:order-2 md:text-left">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Program Expansion</h3>
                      <p className="text-gray-600">
                        The volunteer program grows significantly, with specialized training 
                        programs and expanded service areas within Baycrest Hospital.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* 2025 - Future */}
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="bg-primary-600 text-white text-xl font-bold py-2 px-6 rounded-full mb-8 relative z-10">
                      2025
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="md:text-right">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Looking Forward</h3>
                      <p className="text-gray-600">
                        Launching new initiatives and partnerships to further enhance the 
                        volunteer experience and patient care at Baycrest Hospital.
                      </p>
                    </div>
                    <div>
                      <img
                        src="images/yasiSpeak.jpg"
                        alt="Future vision"
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Quote Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Quote size={60} className="mx-auto mb-8 text-primary-200 opacity-50" />
            <p className="text-2xl md:text-3xl italic mb-8 leading-relaxed">
              "Our vision is to create a community of compassionate volunteers who make 
              a meaningful difference in the lives of patients at Baycrest Hospital. 
              Together, we're building a legacy of care and connection."
            </p>
            <p className="text-xl font-medium">- Yasmin Sheivari</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founder;