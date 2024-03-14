import { Card } from "../../../components/ui/card"
import { Footer } from "../../../components/pages/Footer";
import { HeroPages } from "../../../components/pages/HeroPages";
import { IconCheck, IconDownload, IconRefresh, IconSearch, IconSettings, IconShieldLock } from "@tabler/icons-react";

export const AndroidPage = () => {

  return (
    <div className="flex-col md:flex">
      <div className="relative w-full bg-black h-[220px]">
        <HeroPages title="Instalar AeonTV (FireStick o AndroidTV)"/>
        <div className="relative flex-1 space-y-4 px-6 sm:px-16 md:px-24 lg:px-32 mt-12">
          <div className='my-12'>
            <div className="my-24 2xl:px-32">
                <h1 className='uppercase text-[1.6em] lg:text-[2.625em] text-center mb-4 text-white' style={{fontFamily: 'Oswald', fontWeight: 400, lineHeight: '1.143'}}>
                    <em>Dispositivos Android & TV Box con Android.</em>
                </h1>
                <h1 className='mb-12 text-xl text-center'>
                    <em className='font-extralight'>Esta aplicación le permitirá acceder al contenido de Películas, Canales y Series</em>
                </h1>
                <Card className="shadow-xl p-8" style={{fontFamily: "Poppins"}}>
                    <div className="grid grid-cols-1 lg:flex lg:flex-row items-start justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-greenprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconRefresh size={48} className="text-greenprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold mb-2">PROCESO MANUAL</h4>
                                <h4 className="font-semibold">PASO 1</h4>
                                <p className="font-light p-4">En su dispositivo accede a Configuración {">"} Seguridad {">"} Activamos la opción «Orígenes desconocidos» y luego «Aceptar». </p>
                                <p className="font-light p-4">Si ya tiene activa esta opción continúe con el paso 2.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-greenprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconDownload size={48} className="text-greenprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 2</h4>
                                <p className="font-light p-4">Una vez realizado el paso anterior para que nos permita instalar el app. Ingresamos a su navegador y escribimos el siguiente URL:</p>
                                <p className="font-light">
                                    <a href="https://www.aeontv.com.mx/Aeon(v2.1).apk" target="_blank" className="text-greenprimary">https://www.aeontv.com.mx/Aeon(v2.1).apk</a>
                                </p>
                                <p className="font-light p-4 italic">Se comenzará la descarga.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-greenprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconCheck size={48} className="text-greenprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 3</h4>
                                <p className="font-light p-4">Cuando el archivo .apk se termine de descargar solamente le da clic para instalarlo en su dispositivo.</p>
                                <p className="font-light">Una vez descargado, solamente ingresa con su <b>usuario</b> y <b>contraseña</b> proporcionada cuando adquirió el servicio.</p>
                                <p className="font-light p-4 italic">¡Listo! Ahora puede acceder al contenido.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 2xl:px-32">
                        <h1 className='mb-4 text-xl text-center italic'>
                            <p className='font-light'>IMPORTANTE: En caso de escribir mal ya sea usuario o contraseña el canal le marcará error, en caso de que su cuenta expire será el mismo caso.</p>
                            <p className='font-light'>Tiene que respetar mayúsculas y minúsculas tanto en usuario como en contraseña.</p>
                        </h1>
                    </div>
                </Card>
            </div>
            <div className="my-24 2xl:px-32">
                <h1 className='uppercase text-[1.6em] lg:text-[2.625em] text-center mb-4 text-white' style={{fontFamily: 'Oswald', fontWeight: 400, lineHeight: '1.143'}}>
                    <em>Dispositivos de Amazon como FireTV, FireStick, Etc.</em>
                </h1>
                <Card className="shadow-xl p-8" style={{fontFamily: "Poppins"}}>
                    <div className="grid lg:grid-cols-2 items-start justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-greenprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconShieldLock size={48} className="text-greenprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 1</h4>
                                <p className="font-light p-4">Primero tenemos que activar las «Opciones de Desarrollador»</p>
                                <p className="font-light p-4">En el FireTV Accedemos a Configuración {">"} Acerca de {">"} Presionamos 7 veces en Acerca de y se habilitaran las Opciones de desarrollador.</p>
                                <p className="font-light p-4 italic">Si ya tenemos estas opciones habilitadas continúe con el paso 2.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-greenprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconSettings size={48} className="text-greenprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 2</h4>
                                <p className="font-light p-4">En su dispositivo accede a Configuración {">"} Mi Fire TV {">"} Opciones de Desarrollador {">"} Activamos la opción «Fuentes desconocidas» y luego «Activar». </p>
                                <p className="font-light p-4">También tiene que tener activa la opción «ADB Debugging» dentro de las Opciones de Desarrollador.</p>
                                <p className="font-light p-4 italic">Si ya tenemos estas opciones activas continúe con el paso 3.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-greenprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconDownload size={48} className="text-greenprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 3</h4>
                                <p className="font-light p-4">Descarga la app «Downloader» desde su tienda de aplicaciones lo abrimos y aceptamos los permisos.</p>
                                <p className="font-light p-4">Una vez realizado el paso anterior, ingresamos en el campo de búsqueda y escribimos el el siguiente código: </p>
                                <p className="font-light text-greenprimary text-2xl">782179
                                </p>
                                <p className="font-light p-4 italic">Se comenzará la descarga.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-greenprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconCheck size={48} className="text-greenprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 4</h4>
                                <p className="font-light p-4">Cuando el archivo se termine de descargar automáticamente comenzará su instalación, solamente acepta los permisos y le da «Instalar«.</p>
                                <p className="font-light">Ya tendrá AeonTV instalado, solamente ingresa con su <b>usuario</b> y <b>contraseña</b> proporcionada cuando adquirió el servicio. </p>
                                <p className="font-light p-4 italic">¡Listo! Ahora puede acceder al contenido.</p>
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
            <div className="my-24 2xl:px-32">
                <h1 className='uppercase text-[1.6em] lg:text-[2.625em] text-center mb-4 text-white' style={{fontFamily: 'Oswald', fontWeight: 400, lineHeight: '1.143'}}>
                    <em>Dispositivos AndroidTV (Xiaomi, Etc.)</em>
                </h1>
                <Card className="shadow-xl p-8" style={{fontFamily: "Poppins"}}>
                    <div className="grid lg:grid-cols-3 items-start justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-greenprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconSearch size={48} className="text-greenprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 1</h4>
                                <p className="font-light p-4">En su dispositivo accede a Google Play, buscamos la app «Downloader» y procedemos a instalarla. Puede darle clic a la palabra en azul para ir directo a la aplicación.</p>
                                <p className="font-light p-4">Una vez instalada la abrimos y aceptamos los permisos.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-greenprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconDownload size={48} className="text-greenprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 2</h4>
                                <p className="font-light p-4">Una vez realizado el paso anterior, en el campo de «File URL» escribimos cualquiera de los siguientes códigos:</p>
                                <p className="font-light text-greenprimary text-2xl">782179
                                </p>
                                <p className="font-light p-4 italic">Presionamos en «Go» y comenzará la descarga.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-greenprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconCheck size={48} className="text-greenprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 3</h4>
                                <p className="font-light p-4">Cuando el archivo se termine de descargar automáticamente comenzará su instalación, solamente acepta los permisos y le da «Instalar«.</p>
                                <p className="font-light p-4">Ya tendrá AeonTV instalado, solamente ingresa con su usuario y contraseña proporcionada cuando adquirió el servicio. </p>
                                <p className="font-light p-4 italic">¡Listo! Ahora puede acceder al contenido.</p>
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
