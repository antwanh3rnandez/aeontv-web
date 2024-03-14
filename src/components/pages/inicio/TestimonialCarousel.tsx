import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Testimonial from './Testimonial';
import { TestimonialType } from '../../../interfaces/Testimoniales.interface';
import { useEffect, useState } from 'react';
import axios from 'axios';

type TestimonialCarouselProps = {
  testimonials: TestimonialType[];
};

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {

  const [slidePercentage, setSlidePercentage] = useState(33.33);

  const updateSlidePercentage = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 900) {
      setSlidePercentage(100);
    } else {
      setSlidePercentage(33.33);
    }
  };

  useEffect(() => {
    updateSlidePercentage();
    window.addEventListener('resize', updateSlidePercentage);
    return () => {
      window.removeEventListener('resize', updateSlidePercentage);
    };
  }, []);

  return (
    <div className="w-full h-[100%] flex items-center justify-center">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={slidePercentage}
        autoPlay={true}
        className='w-full h-[100%]'
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-[100%] h-[100%] flex items-center justify-center">
            <Testimonial testimonial={testimonial} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;

export function TestimonialSection () {

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const apiUrlTestimonial = import.meta.env.VITE_TESTIMONIOS_URL;

    axios.get(apiUrlTestimonial)
      .then((response) => {
        setTestimonials(response.data.data);
        console.log(testimonials);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  return (
    <div className="space-y-4 px-6 sm:px-16 md:px-32 xl:px-48 mt-12">
      <div className='py-12'>
        <h1 className='mb-6 text-5xl text-center font-extralight'>
          <em>Testimoniales</em>
        </h1>
        <h1 className='mb-6 text-2xl text-center font-extralight'>
          Lo que nuestros clientes opinan de nuestro servicio:
        </h1>
        <div className='mt-16 2xl:px-24'>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </div>
  );
}
