import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton } from "../../../components/ui/skeleton"

interface CustomSplideProps {
    id: string;
    images: any[];
    extraClass?: string;
    perPage?: number;
  }
  
  export function CustomSplide({ id, images, extraClass, perPage }: CustomSplideProps) {
    return (
      <Splide
        id={id}
        className={extraClass}
        options={{
          type: 'loop',
          perPage: perPage,
          perMove: 1,
          pagination: false,
          autoplay: true, // Utilizar directamente la opción autoplay
        interval: 2000, // Puedes ajustar el intervalo entre diapositivas aquí
          speed: 1000,
        }}
      >
        {images.map((image, index) => (
          <SplideSlide key={index} id={`${id}-slide${index}`} className="loading-slide">
            <img src={`${import.meta.env.VITE_MOVIES_IMAGE_BASE_URL+image.url.slice(1)}`} alt={`Image ${index + 1}`} />
          </SplideSlide>
        ))}
      </Splide>
    );
  }

  export function LatestMovies() {

    const [imagesMovies, setImagesMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
      const apiUrlImages = import.meta.env.VITE_MOVIES_IMAGES_URL;
  
      axios.get(apiUrlImages)
        .then((response) => {
          setImagesMovies(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error al obtener datos:", error);
          setIsLoading(true);
        });
    }, []);

    return (
      
      <div className='py-12'>
        <h2 className='uppercase text-[1.6em] lg:text-[2.625em] text-center mb-4' style={{fontFamily: 'Oswald', fontWeight: 400, lineHeight: '1.143'}}>
          Disfruta de los mejores estrenos
        </h2>
        <h3 className='mb-6 text-[1em] lg:text-[1.255em] text-center font-light' style={{fontFamily: 'Poppins'}}>
          Contamos con los últimos estrenos de cine así como los mejores títulos
        </h3>
        <div className='w-full h-auto max-h-[400px]'>
          {isLoading ? (
            <div className="flex flex-row md:grid md:grid-cols-8 w-full lg:h-[35vh] h-[15vh] gap-[2px] shadow-xl">
              {[...Array(8)].map((_, index) => (
                <Skeleton key={index} className="w-[100%] h-[100%] min-h-[100px] min-w-[100px] mb-4 bg-[#f0f0f0]" />
              ))}
            </div>
          ) : (
            <CustomSplide id="splideMovies" perPage={8} extraClass={`shadow-xl`} images={imagesMovies} />
          )}
        </div>
      </div>

    );
  }