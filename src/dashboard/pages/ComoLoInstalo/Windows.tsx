import { Footer } from "../../../components/pages/Footer";
import { HeroPages } from "../../../components/pages/HeroPages";
import { Button } from "../../../components/ui/button";

import screen1 from "../../../assets/screenshot1-v3.webp";
import screen2 from "../../../assets/screenshot2-v3.webp";
import screen3 from "../../../assets/screenshot3-v3.webp";

import video from "../../../assets/windows.mp4"

export const WindowsPage = () => {

  //const videoSource = 'https://www.spacetv.com.mx/wp-content/uploads/2021/08/windows.mkv';

  return (
    <div className="flex-col md:flex">
      <div className="relative w-full bg-black h-[220px]">
        <HeroPages title="Instalar SpaceTV+ (Windows)"/>
        <div className="relative flex-1 space-y-4 px-6 sm:px-16 md:px-24 lg:px-32 mt-12">
          <div className='my-12'>
            <div className="my-24 2xl:px-32">
                <h1 className='mb-6 text-3xl xl:text-5xl text-center font-extralight'>
                    <em>SpaceTV+ | Windows</em>
                </h1>
                <h1 className='mb-12 text-xl text-center'>
                    <em className='font-extralight'>Esta aplicación le permitirá acceder al contenido de Películas, Canales y Series</em>
                </h1>
                <div className="grid lg:grid-cols-2" style={{fontFamily: 'Poppins'}}>
                    <div className="p-3 lg:w-[110%] z-10">
                        <video width="100%" controls>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="bg-blueprimary lg:p-24 p-12 lg:text-start text-center z-0 w-full">
                        <p className="text-xl mb-4">Tutorial</p>
                        <p className="text-md font-bold mb-4">Este proceso es demasiado sencillo lo que vamos a necesitar es:</p>
                        <p className="text-md font-light mb-4">* Descargar la app de SpaceTV+ para Windows desde el botón naranja de aquí abajo.</p>
                        <p className="text-md font-light mb-6">Una vez tenemos el archivo descargado simplemente seguimos los pasos del video.</p>
                        <div className="flex flex-row items-center justify-center">
                            <a href="http://158.69.225.52/apps/SpaceTV+(1.2.1).exe" target="_blank"><Button className='bg-orange-500 hover:bg-orange-800 text-white rounded-full px-8 py-6'>DESCARGAR SPACETV+</Button></a>
                        </div>
                    </div>
                </div>
                <div className="mt-6 2xl:px-32">
                    <h1 className='mb-4 lg:text-xl text-center italic'>
                        <p className='font-light'>Ya tendrá SpaceTV+ instalado, solamente ingresa con su usuario y contraseña proporcionada cuando adquirió el servicio.</p>
                    </h1>
                </div>
            </div>
            <div className="my-12 lg:px-48">
                <h2 className="text-4xl text-center font-light" style={{fontFamily: "Poppins"}}>Capturas de la&nbsp;
                <em style={{color: 'rgb(3, 169, 244)', fontFamily: 'Playfair Display'}}>interfaz</em> de&nbsp;
                <em style={{color: 'rgb(3, 169, 244)', fontFamily: 'Playfair Display'}}>SpaceTV+</em>&nbsp;en Windows</h2>
            </div>
            <div className="mt-18 mb-24">
                <div className="w-[100%] flex items-end">
                    <div className="relative w-[30%] z-0 shadow-xl">
                        <img className="w-full" src={screen1} alt="Seccion TV"/>
                    </div>
                    
                    <div className="relative w-[40%] z-10 shadow-xl">
                        <img className="w-full" src={screen2} alt="Seccion Principal"/>
                    </div>
                    
                    <div className="relative w-[30%] z-0 shadow-xl">
                        <img className="w-full" src={screen3} alt="Seccion Peliculas"/>
                    </div>
                </div>
            </div>
          </div>  
        </div>
        <Footer/>
      </div>
    </div>
  )
}
