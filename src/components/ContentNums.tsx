import { useEffect, useState } from 'react';
import axios from 'axios';
import { IconDeviceTv, IconUsersGroup } from '@tabler/icons-react';
import { IconMovie } from '@tabler/icons-react';

export function ContentNumsItem ({ icon: Icon, count, title }) {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-row items-center justify-center'>
                <Icon size={48} stroke={1.5} color='#78cff1' />
                <h1 className='text-[2.5em] lg:text-[4em] text-center mb-4 text-white ml-4' style={{fontFamily: 'Oswald', fontWeight: 400, lineHeight: '1.143', letterSpacing: '3px'}}>
                    {count}+
                </h1>
            </div>
            <h4 className='uppercase text-[.9em] lg:text-[1.25em] text-center text-white mb-4' style={{fontFamily: 'Oswald', fontWeight: 300, lineHeight: '1.143', letterSpacing: '3px'}}>
                {title}
            </h4>
        </div>
    );
}

export function ContentNums() {

    const [countChannels, setCountChannels] = useState(0);
    const [countMovies, setCountMovies] = useState(0);
    const [countSeries, setCountSeries] = useState(0);


    useEffect(() => {
        const apiUrl = import.meta.env.VITE_COUNTS_CONTENT_URL;

        axios.get(apiUrl)
        .then((response) => {
            setCountChannels(response.data.data.channels);
            setCountMovies(response.data.data.movies);
            setCountSeries(response.data.data.episodes);
            
        })
        .catch((error) => {
            console.error("Error al obtener datos:", error);
        });
    }, []);

    return (
        
        <div className='bg-numeros bg-blueprimary py-8 lg:py-24'>
          <h4 className='uppercase text-[1em] lg:text-[1.25em] text-center text-[#78cff1] mb-4' style={{fontFamily: 'Oswald', fontWeight: 300, lineHeight: '1.143', letterSpacing: '3px'}}>
            CADA DÍA AÑADIMOS MÁS
          </h4>
          <h2 className='uppercase text-[1.6em] lg:text-[2.625em] text-center mb-4 text-white' style={{fontFamily: 'Oswald', fontWeight: 400, lineHeight: '1.143'}}>
            NUESTRO CONTENIDO EN NÚMEROS
          </h2>
          <div className='mx-4 lg:mx-64'>
            <h3 className='text-[.8em] lg:text-[1.25em] text-center font-light text-white px-8 lg:px-64' style={{fontFamily: 'Poppins'}}>
              Todos los días actualizamos y añadimos nuevo contenido a nuestra plataforma para que usted siempre obtenga los mejores estrenos y los mejores títulos.
            </h3>
          </div>
          <div className='mt-8 grid space-y-6 lg:space-x-12 lg:space-y-0 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 lg:mx-0 text-center lg:px-48'>
            <ContentNumsItem icon={IconDeviceTv} count={countChannels} title="CANALES DE TV" />
            <ContentNumsItem icon={IconMovie} count={countMovies} title="PELICULAS" />
            <ContentNumsItem icon={IconUsersGroup} count={countSeries} title="EPISODIOS DE SERIES" />
          </div>
        </div>
        
    );
}