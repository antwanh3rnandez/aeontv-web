import { Card } from "../../../components/ui/card"
import { Footer } from "../../../components/pages/Footer";
import { HeroPages } from "../../../components/pages/HeroPages";
import { IconCheck, IconDownload, IconInfoTriangleFilled, IconSearch, IconSettings } from "@tabler/icons-react";

export const SmartIptvPage = () => {

  return (
    <div className="flex-col md:flex">
      <div className="relative w-full bg-black h-[220px]">
        <HeroPages title="Instalar SpaceTV+ (SmartTV con SmartIPTV)"/>
        <div className="relative flex-1 space-y-4 px-6 sm:px-16 md:px-24 lg:px-32 mt-12">
          <div className='my-12'>
            <div className="my-24 2xl:px-32">
                <h1 className='mb-6 text-3xl xl:text-5xl text-center font-extralight'>
                    <em>SpaceTV+ | SmartIPTV</em>
                </h1>
                <h1 className='mb-12 text-xl text-center'>
                    <em className='font-extralight'>Esta aplicación le permitirá acceder al contenido de Películas, Canales y Series</em>
                </h1>
                <Card className="shadow-xl p-8" style={{fontFamily: "Poppins"}}>
                    <div className="grid lg:grid-cols-3 items-start justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconInfoTriangleFilled size={48} className="text-blueprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 1</h4>
                                <p className="font-light p-4">Deberá obtener su lista M3U para eso ingresará a su navegador a: <a href="https://www.spacetv.com.mx/cuenta" target="_blank" className="text-blueprimary">www.spacetv.com.mx/cuenta</a></p>
                                <p className="font-light p-4">Ingresara con sus datos y buscara la opción que dice SmartTV lista M3U.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconDownload size={48} className="text-blueprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 2</h4>
                                <p className="font-light p-4">Instalamos la aplicación «<b>Smart IPTV</b>» desde su tienda de aplicaciones. Abrimos la aplicación <b>Smart IPTV</b> y buscamos la <b>MAC Address</b> de tu SmartTV (<b>la encontrarás en settings</b>).</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconSearch size={48} className="text-blueprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 3</h4>
                                <p className="font-light p-4">Ahora en una computadora, ingresa a: <a href="http://siptv.eu/mylist" target="_blank" className="text-blueprimary">http://siptv.eu/mylist</a></p>
                                <p className="font-light p-4">Ubica la sección que dice “Add external playlist links (URLs)…”</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 items-start justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconSettings size={48} className="text-blueprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 4</h4>
                                <p className="font-light p-4">En donde dice “<b>MAC address</b>” escribe la MAC de tu SmartTV que encontraste en el paso 2. </p>
                                <p className="font-light p-4">En donde dice “Link” escribe la URL de la lista M3U del paso 1.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconCheck size={48} className="text-blueprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 5</h4>
                                <p className="font-light py-2 px-4">En country selecciona México.</p>
                                <p className="font-light py-2 px-4">Oprime “<b>Add Link</b>” para cargar la lista a tu SmartTV.</p>
                                <p className="font-light py-2 px-4">En tu SmartTV, abre nuevamente la aplicación Smart IPTV, la lista de contenido ya deberá mostrarse en pantalla.</p>
                                <p className="p-4"><em className="text-blueprimary">¡Listo! Ahora puede acceder al contenido.</em></p>
                            </div>
                        </div>
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
