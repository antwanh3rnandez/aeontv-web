import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card"
import { TestimonialType2 } from "../../../interfaces/Testimoniales.interface"

interface TestimonialProps {
  testimonial: TestimonialType2;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <>
    <div className="p-4 w-[100%] h-[100%]">
      <Card className="w-full h-[100%] bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <CardHeader className='flex flex-col items-center justify-center'>
            <div className='w-20 h-20 border-2 border-greenprimary rounded-full flex flex-col items-center justify-center'>
              <img className='w-20 h-20 rounded-full' style={{aspectRatio: '1 / 1'}} src={`${import.meta.env.VITE_TESTIMONIOS_IMAGES+testimonial.foto}`}></img>
            </div>
            <CardTitle className="text-gray-500 mt-4 font-normal">{testimonial.nombre}</CardTitle>
        </CardHeader>
        <CardContent>
            <CardDescription className="text-gray-700"><em>" {testimonial.testimonio} </em>"</CardDescription>
            <CardDescription className="text-gray-500 mt-4">{`Suscriptor desde hace ${(parseInt(testimonial.antiguedad)) > 1 ? testimonial.antiguedad+" años" : testimonial.antiguedad+" año"}`}</CardDescription>
        </CardContent>
      </Card>
    </div>
    
    </>
  );
};

export default Testimonial;

