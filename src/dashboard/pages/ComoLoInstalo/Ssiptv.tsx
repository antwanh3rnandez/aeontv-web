import { Card } from "../../../components/ui/card"
import { Footer } from "../../../components/pages/Footer";
import { HeroPages } from "../../../components/pages/HeroPages";
import { IconCheck, IconDownload, IconInfoTriangleFilled, IconSearch, IconSettings } from "@tabler/icons-react";

export const SsiptvPage = () => {

  return (
    <div className="flex-col md:flex">
      <div className="relative w-full bg-black h-[220px]">
        <HeroPages title="Instalar SpaceTV+ (SmartTV con SSIPTV)"/>
        <div className="relative flex-1 space-y-4 px-6 sm:px-16 md:px-24 lg:px-32 mt-12">
          <div className='my-12'>
            <div className="my-24 2xl:px-32">
                <h1 className='mb-6 text-3xl xl:text-5xl text-center font-extralight'>
                    <em>SpaceTV+ | SSIPTV</em>
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
                                <p className="font-light p-4">Instala la aplicación SS IPTV en su SmartTV. Puede encontrar aquí como instalar dicha app, dependiendo de la marca de su TV:</p>
                                <p className="font-light p-4"><a href="https://bit.ly/3iB0Dzq" target="_blank" className="text-blueprimary">https://bit.ly/3iB0Dzq</a></p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconSearch size={48} className="text-blueprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 3</h4>
                                <p className="font-light p-4">Una vez instalada la abrimos para ver cual es nuestro «Código de Conexión«. Después vamos a: <a href="https://bit.ly/3yzCDCp" target="_blank" className="text-blueprimary">https://bit.ly/3yzCDCp</a>, e ingresamos nuestro código de conexión.</p>
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
                                <p className="font-light p-4">Seleccionamos «<b>External Playlist</b>» y luego «<b>Add</b>«, en «<b>Playlist URL</b>» ingresamos el url que obtuvimos en el paso 1 y en donde dice «<b>Playlist Title</b>» escribimos «<b>Space TV</b>«, oprimimos «<b>Save</b>«.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconCheck size={48} className="text-blueprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 5</h4>
                                <p className="font-light p-4">Una vez guardamos los cambios, regresamos a la pantalla principal y veremos nuestra lista llamada «<b>Space TV</b>» ya cargada en la aplicación.</p>
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
