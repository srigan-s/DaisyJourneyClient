import React, { useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import PartnerCard from '../components/PartnerCard';
import Button from '../components/Button';
import FloatingMedicalElements from '../components/FloatingMedicalElements';

const Partners: React.FC = () => {
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
              Our Partner
            </h1>
            <div className="h-1 w-20 bg-secondary-500 mx-auto mb-6 rounded animate-pulse-slow"></div>
            <p className="text-xl text-gray-600 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Daisy's Journey collaborates with Baycrest Hospital to create impactful 
              volunteer experiences and improve patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Hospital Partner Section */}
      <section className="py-20 animate-fade-in-up">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <PartnerCard 
              name="Baycrest Hospital"
              logo="images/baycrest.png"
              description="A leading healthcare provider specializing in geriatric care, research, and innovation in aging and brain health."
              website="https://www.baycrest.org"
            />
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-20 bg-primary-50 animate-fade-in-up">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Partnership Benefits" centered={false} />
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Enhanced Patient Experience
                    </h3>
                    <p className="text-gray-600">
                      Our volunteers help create a more supportive and comfortable environment for patients,
                      leading to improved satisfaction and outcomes.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Staff Support
                    </h3>
                    <p className="text-gray-600">
                      Volunteers provide non-clinical assistance, allowing healthcare professionals to 
                      focus more on medical care and specialized tasks.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Community Connection
                    </h3>
                    <p className="text-gray-600">
                      Our partnership strengthens the connection between Baycrest and the 
                      community, fostering trust and engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.squarespace-cdn.com/content/v1/65367682ba14580bbb5ac9bc/1704387877705-SJYN6IJMQMSPKNXPL3WQ/ARK_apotex_03.jpg"
                alt="Hospital staff and volunteers collaborating"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in Partnership?
            </h2>
            <p className="text-xl mb-8">
              If you're interested in bringing Daisy's Journey volunteer programs to your 
              healthcare facility, we'd love to hear from you.
            </p>
            <a
            href="https://www.instagram.com/journeywithdaisy"
            target="_blank"
            rel="noopener noreferrer"
            > 
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Contact Us to Learn More
            </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;