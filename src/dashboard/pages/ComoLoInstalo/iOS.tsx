import { Card } from "../../../components/ui/card"
import { Footer } from "../../../components/pages/Footer";
import { HeroPages } from "../../../components/pages/HeroPages";
import { IconDownload, IconLockOpen, IconRefresh } from "@tabler/icons-react";

import smarters from "../../../assets/smarters.webp";

export const IPhonePage = () => {

  return (
    <div className="flex-col md:flex">
      <div className="relative w-full bg-black h-[220px]">
        <HeroPages title="Instalar SpaceTV+ (iOS/iPhone/iPad)"/>
        <div className="relative flex-1 space-y-4 px-6 sm:px-16 md:px-24 lg:px-32 mt-12">
          <div className='my-12'>
            <div className="my-24 2xl:px-32">
                <h1 className='mb-6 text-3xl xl:text-5xl text-center font-extralight'>
                    <em>SpaceTV+ | iOS/iPhone/iPad</em>
                </h1>
                <h1 className='mb-12 text-xl text-center'>
                    <em className='font-extralight'>Esta aplicación le permitirá acceder al contenido de Películas, Canales y Series</em>
                </h1>
                <Card className="shadow-xl p-8" style={{fontFamily: "Poppins"}}>
                    <div className="grid lg:grid-cols-3 items-start justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconDownload size={48} className="text-blueprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 1</h4>
                                <p className="font-light p-4">Primero deberá descargar esta aplicación en su dispositivo:</p>
                                <p className="font-light p-4"><a href="https://apps.apple.com/mx/app/iptv-smarter-player/id6450916775" target="_blank" className="text-blueprimary">https://apps.apple.com/mx/app/iptv-smarter-player/id6450916775</a></p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconRefresh size={48} className="text-blueprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 2</h4>
                                <p className="font-light p-4">Una vez descargada solamente llenamos los campos que serían:</p>
                                <p className="font-light p-2">&bull; AnyName: <b>SpaceTV</b></p>
                                <p className="font-light p-2">&bull; Username: <b>Su usuario</b></p>
                                <p className="font-light p-2">&bull; Password: <b>Su contraseña</b></p>
                                <p className="font-light p-2">&bull; http://url_here.com:port (Último campo): <b>http://158.69.225.52:25461</b></p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconLockOpen size={48} className="text-blueprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 3</h4>
                                <p className="font-light p-4">Marcamos la casilla de «<b>Remember Me</b>» para que no le vuelva a pedir los datos cada vez que ingrese y le damos en «<b>Login</b>» o «<b>Next</b>». </p>
                                <p className="font-light p-4 italic">¡Listo! Ahora puede acceder al contenido.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="py-4 lg:mt-0 text-center lg:text-center">
                            <h4 className="font-semibold tracking-widest mb-4">CAPTURA</h4>
                            <div className="w-full flex items-center justify-center">
                                <img className="w-4/6" src={smarters}></img>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 2xl:px-32">
                        <h1 className='mb-4 lg:text-xl text-center italic'>
                            <p className='font-light'>IMPORTANTE: En caso de escribir mal ya sea usuario o contraseña el canal le marcará error, en caso de que su cuenta expire será el mismo caso.</p>
                            <p className='font-light'>Tiene que respetar mayúsculas y minúsculas tanto en usuario como en contraseña.</p>
                        </h1>
                    </div>
                </Card>
            </div>
          </div>  
        </div>
        <Footer/>
      </div>
    </div>
  )
}
