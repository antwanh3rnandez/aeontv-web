import { Button } from "../ui/button"
import { 
  IconBrandFacebook, 
} from '@tabler/icons-react/';
import footer from "../../assets/bg.webp"

export const Footer = () => {
    return (
        <>
        <div className="relative h-48 lg:h-36 bg-slate-300">
          <img className="w-full h-full object-cover" src={footer} alt="Footer" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div
              className="w-full h-full bg-black bg-opacity-50 text-white text-center p-4 rounded"
              style={{ backdropFilter: 'blur(0px)' }}
            >
              <div className="w-full h-full flex flex-col gap-6 lg:flex-row items-center justify-center">
                <h2 className="text-3xl xl:text-5xl text-center font-extralight">
                  <em className='font-semibold'>Únete a la familia! </em>
                  <em>Adquiere nuestro servicio.</em>
                </h2>
                <div className="">
                  <a href='/#paquetes'>
                    <Button className='bg-greenprimary text-white rounded-md px-8 py-6'>COMPRAR AHORA</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row h-36 shadow-2xl'>
          <div className='w-[100%] bg-greenprimary flex flex-row items-center justify-center'>
            <a href="https://www.facebook.com/aeontv/" target="_blank" className="flex flex-row items-center justify-center space-x-4 p-8">
              <p className='md:text-xl xl:text-4xl font-normal text-white text-center'>PÁGINA DE FACEBOOK</p>
              <IconBrandFacebook size={64} className='text-white'/>
            </a>
          </div>
          {/* <div className='w-[50%] bg-orange-500 flex flex-row items-center justify-center'>
            <a href="https://t.me/" target="_blank" className="flex flex-row items-center justify-center space-x-4 p-8">
            <IconBrandTelegram size={64} className='text-white'/>
              <p className='md:text-xl xl:text-4xl font-normal text-white text-center'>ÚNETE A NUESTRO TELEGRAM</p>
            </a>
          </div> */}
        </div>
        <div className='w-full h-24 flex flex-col items-center justify-center'>
          <h1 className=''>
            © 2024 AeonTV. Sitio web creado por GethyMX
          </h1>
        </div>
        </>
    )
}