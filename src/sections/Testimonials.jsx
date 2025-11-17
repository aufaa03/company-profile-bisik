

import { appData } from "../data/appData";
import SectionHeading from "../components/SectionHeading";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { motion as Motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Testimonials() {
  const testimonials = appData.testimonials;

  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Motion.section
      id="testimonials"
      className="py-20 px-6 bg-light dark:bg-gray-900 relative z-10 overflow-hidden" 
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        <SectionHeading
          title="Apa Kata Klien Kami"
          subtitle="Testimoni dari mitra dan klien yang telah bekerja sama dengan kami."
        />

        {/* 4. INI DIA SLIDER-NYA */}
        <Swiper
          
          modules={[Navigation, Pagination, Autoplay]}
          
          slidesPerView={1} 
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000, 
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true, 
          }}
          navigation={true} 
          
          breakpoints={{
            768: {
              slidesPerView: 2, 
              spaceBetween: 40,
            },
          }}
          
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            
            
            <SwiperSlide key={index} className="pb-12 pt-4 px-4"> 
              
              {/* 2. PASTIKAN 'h-full' DAN 'flex' ADA DI KARTU INI */}
              <div className="bg-white dark:bg-gray-800/80 h-full p-8 rounded-lg shadow-lg text-center flex flex-col">
                
                {/* 3. PASTIKAN 'flex-grow' ADA DI WRAPPER KUTIPAN */}
                <div className="flex-grow">
                  <p className="text-gray-700 dark:text-gray-300 italic text-lg mb-6">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                {/* 4. PASTIKAN INFO PENULIS ADA DI DIV-NYA SENDIRI */}
                <div>
                  <h4 className="font-bold text-primary dark:text-white font-heading text-xl">
                    {testimonial.name}
                  </h4>
                  <p className="text-secondary dark:text-gray-400 font-medium">
                    {testimonial.title}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Motion.section>
  );
}

export default Testimonials;
