import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
          setIsLoading(false);
        });
    }, []);

    return (
      
      <div className='py-12'>
        <h1 className='mb-6 text-5xl text-center font-extralight'>
          <em>Disfruta de los mejores estrenos</em>
        </h1>
        <h1 className='mb-6 text-2xl text-center font-extralight'>
          Contamos con los últimos estrenos de cine así como los mejores títulos
        </h1>
        <div className='w-full h-auto max-h-[400px]'>
          {isLoading ? (
            <div className="flex flex-row md:grid md:grid-cols-8 w-full lg:h-[35vh] h-[15vh] gap-[2px] shadow-xl">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="skeleton-item"></div>
              ))}
            </div>
          ) : (
            <CustomSplide id="splideMovies" perPage={8} extraClass={`shadow-xl`} images={imagesMovies} />
          )}
        </div>
      </div>

    );
  }