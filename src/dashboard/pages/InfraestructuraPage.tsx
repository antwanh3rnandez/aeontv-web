import { Card } from "../../components/ui/card"
import { Footer } from "../../components/pages/Footer";
import { HeroPages } from "../../components/pages/HeroPages";
import { IconBrandAndroid, IconCheck, IconCode, IconDeviceTv, IconNumber1, IconNumber2, IconNumber3, IconNumber4, IconNumber5, IconQuote, IconServer2 } from "@tabler/icons-react";
import infraestructura from "../../assets/infraestructura.webp"
import logo from "../../assets/logo.png"
import screen from "../../assets/screen.webp"
import { Button } from "../../components/ui/button";

interface FeatureItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => (
    <div className="lg:flex justify-center items-center lg:items-start p-4">
      <div className="flex-shrink-0 lg:mr-4 flex flex-col items-center">
        {icon}
      </div>
      <div className="mt-4 lg:mt-0 text-center lg:text-start" style={{fontFamily: "Poppins"}}>
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="font-light">{description}</p>
      </div>
    </div>
);

export const InfraestructuraPage = () => {

  return (
    <div className="flex-col md:flex">
      <div className="relative w-full bg-black h-[220px]">
        <HeroPages title="¿Quiere tener su propio servicio IPTV?"/>
        <div className="relative flex-1 space-y-4 px-6 sm:px-16 md:px-24 lg:px-32 mt-12">
          <div className='py-12'>
            <div className="2xl:px-32">
                <h1 className='mb-6 text-3xl xl:text-5xl text-center font-extralight'>
                    <em>Una infraestructura IPTV requiere de 4 elementos esenciales para funcionar.</em>
                </h1>
                <h1 className='mb-12 text-xl text-center'>
                    <em className='font-extralight'>Lo primero que debe de entender es que para tener su propio servicio IPTV, debe de saber como funciona esta tecnología, básicamente se requiere de una pequeña «infraestructura» para tener todo en control o administrado.</em>
                </h1>
            </div>
            <div className="flex flex-col items-center lg:flex-row">
                <div className="flex flex-col items-center lg:mr-4 mb-4 lg:w-1/3 w-full h-[450px] lg:border-8 border-blueprimary">
                    <img
                            src={infraestructura}
                            alt="Infraestructura"
                            className="object-cover h-[450px] lg:w-full lg:h-[100%] shadow-2xl rounded-lg lg:rounded-none"
                        />
                </div>
                <div className="lg:w-2/3">
                    <div className="grid lg:grid-cols-2 lg:justify-center">
                        <FeatureItem
                            icon={<IconServer2 size={64} className="text-blueprimary"/>}
                            title="Servidor Dedicado"
                            description="Donde se almacenan las películas y series, importante que cuente con buen almacenamiento y RAM."
                        />
                        <FeatureItem
                            icon={<IconCode size={64} className="text-blueprimary"/>}
                            title="Software o Panel"
                            description="Encargado de administrar TODO, desde usuarios con su expiración automática hasta el contenido."
                        />
                        <FeatureItem
                            icon={<IconDeviceTv size={64} className="text-blueprimary"/>}
                            title="Canales"
                            description="También llamados canales de restream, se instalan en su Software o Panel para poder ofrecerlos hacia sus clientes."
                        />
                        <FeatureItem
                            icon={<IconBrandAndroid size={64} className="text-blueprimary"/>}
                            title="Aplicación Android"
                            description="Será la imagen principal de su servicio con sus propios logos, la cual se le brindará al cliente, ejemplo: usted desde su panel creará usuario y contraseña que automáticamente esos accesos funcionarán con la aplicación."
                        />
                    </div>
                </div>
            </div>
            <div className="mt-8 2xl:px-32">
                <h1 className='mb-12 text-xl text-center'>
                    <em className='font-extralight'>En el mundo del IPTV todo servicio o elemento que se requiera para el mismo se paga de manera mensual. No existe infraestructura IPTV la cual se realice a un solo pago ya que se requieren elementos que necesitan estar monitoreados 24/7.</em>
                </h1>
            </div>
            <div className="mt-24 2xl:px-32">
                <h1 className='mb-6 text-3xl xl:text-5xl text-center font-extralight'>
                    <em>Proceso de funcionamiento de Infraestructura IPTV</em>
                </h1>
                <Card className="shadow-xl p-8" style={{fontFamily: "Poppins"}}>
                    <div className="grid lg:grid-cols-3 items-start justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconNumber1 size={48} className="text-blueprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 1</h4>
                                <p className="font-light p-4">Servidor dedicado donde se subirá específicamente películas y series.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconNumber2 size={48} className="text-blueprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 2</h4>
                                <p className="font-light p-4">El software INSTALADO en el Servidor Dedicado encargado de todas las tareas administrativas, contenido y monitorear los recursos del servicio, desde donde IMPORTAREMOS las películas, series y canales del proceso siguiente.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconNumber3 size={48} className="text-blueprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 3</h4>
                                <p className="font-light p-4">El software INSTALADO en el Servidor Dedicado encargado de todas las tareas administrativas, contenido y monitorear los recursos del servicio, desde donde IMPORTAREMOS las películas, series y canales del proceso siguiente.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 items-start justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconNumber4 size={48} className="text-blueprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 4</h4>
                                <p className="font-light p-4">Aplicación Android encargada de conectarse al software para traer hacia el cliente de manera GRÁFICA todo el contenido en Canales, Películas y Series.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="border-2 border-blueprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                                <IconNumber5 size={48} className="text-blueprimary"/>
                            </div>
                            <div className="py-4 lg:mt-0 text-center lg:text-center">
                                <h4 className="font-semibold">PASO 5</h4>
                                <p className="font-light p-4">El cliente reproduce el contenido de manera satisfactoria</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="py-20 2xl:px-32">
                <h1 className='mb-6 text-3xl xl:text-5xl text-center font-extralight'>
                    <em>Paquetes</em>
                </h1>
                <h1 className='mb-12 text-xl text-center'>
                    <em className='font-extralight'>Todos los paquetes mostrados a continuación incluyen la renta del 1er mes de los 4 elementos requeridos para la infraestructura IPTV.</em>
                </h1>
                <Card className="shadow-2xl p-8 rounded-none">
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Plan Básico */}
                        <div className="rounded-xl ">
                            <Card className="hover:shadow-xl">
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">BÁSICO</h3> 
                                    <ul>
                                        <li className="flex flex-row items-start justify-start space-x-2">
                                            <IconCheck className="text-blueprimary"/>
                                            <div className="text-lg font-extralight mb-4">Servidor 8TB – 16 GB RAM – 3.4Ghz</div>
                                        </li>
                                        <li className="flex flex-row items-start justify-start space-x-2">
                                            <IconCheck className="text-blueprimary"/>
                                            <div className="text-lg font-extralight mb-4">Panel IPTV</div>
                                        </li>
                                        <li className="flex flex-row items-start justify-start space-x-2">
                                            <IconCheck className="text-blueprimary"/>
                                            <div className="text-lg font-extralight mb-4">50 Canales a Elegir</div>
                                        </li>
                                        <li className="flex flex-row items-start justify-start space-x-2">
                                            <IconCheck className="text-blueprimary"/>
                                            <div className="text-lg font-extralight mb-4">App Android con sus propios logos</div>
                                        </li>
                                        <li className="flex flex-row items-start justify-start space-x-2">
                                            <IconCheck className="text-blueprimary"/>
                                            <div className="text-lg font-extralight mb-4">Soporte 24/7</div>
                                        </li>
                                    </ul>
                                    <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-start mb-4">
                                        <span className="text-2xl md:text-4xl font-semilight">$</span>
                                        <span className="text-4xl md:text-7xl font-semilight">13,000</span>
                                        <span className="text-xl md:text-3xl font-light ">/ mes</span>
                                    </div>
                                    <h1 className='my-6 md:text-xl text-center'>
                                        <em className='font-extralight'>*Precios marcados en Pesos Mexicanos</em>
                                    </h1>
                                </div>
                                <a
                                    href="#"
                                    className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-blueprimary text-white rounded-lg text-center font-semibold hover:bg-blue-600 transition duration-300 rounded-t-none"
                                >
                                    Comprar
                                </a>
                            </Card>
                        </div>
                        {/* Plan Premium */}
                        <Card className="rounded-xl hover:shadow-xl">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4">PREMIUM</h3> 
                                <ul>
                                    <li className="flex flex-row items-start justify-start space-x-2">
                                        <IconCheck className="text-blueprimary"/>
                                        <div className="text-lg font-extralight mb-4">Servidor 24TB – 16GB RAM – 2.4 Ghz</div>
                                    </li>
                                    <li className="flex flex-row items-start justify-start space-x-2">
                                        <IconCheck className="text-blueprimary"/>
                                        <div className="text-lg font-extralight mb-4">Panel IPTV</div>
                                    </li>
                                    <li className="flex flex-row items-start justify-start space-x-2">
                                        <IconCheck className="text-blueprimary"/>
                                        <div className="text-lg font-extralight mb-4">80 Canales a Elegir</div>
                                    </li>
                                    <li className="flex flex-row items-start justify-start space-x-2">
                                        <IconCheck className="text-blueprimary"/>
                                        <div className="text-lg font-extralight mb-4">App Android con sus propios logos</div>
                                    </li>
                                    <li className="flex flex-row items-start justify-start space-x-2">
                                        <IconCheck className="text-blueprimary"/>
                                        <div className="text-lg font-extralight mb-4">Soporte 24/7</div>
                                    </li>
                                    <li className="flex flex-row items-start justify-start space-x-2">
                                        <IconCheck className="text-blueprimary"/>
                                        <div className="text-lg font-extralight mb-4"><b>500 Películas de regalo al contratar</b></div>
                                    </li>
                                </ul>
                                <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-start mb-4">
                                    <span className="text-2xl md:text-4xl font-semilight">$</span>
                                    <span className="text-4xl md:text-7xl font-semilight">16,000</span>
                                    <span className="text-xl md:text-3xl font-light ">/ mes</span>
                                </div>
                                <h1 className='my-6 text-xl text-center'>
                                    <em className='font-extralight'>*Precios marcados en Pesos Mexicanos</em>
                                </h1>
                            </div>
                            <a
                                href="#"
                                className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-blueprimary text-white rounded-lg text-center font-semibold hover:bg-blue-600 transition duration-300 rounded-t-none"
                            >
                                Comprar
                            </a>
                        </Card>
                    </div>
                    <div className='my-6 lg:text-lg md:text-md text-xs text-center' style={{fontFamily: "Poppins"}}>
                        <div className='font-semibold'>Que incluye la capacitación de su uso completo abarcando temas de servidor, software, aplicación android, se le entregan las páginas de donde descargará el contenido y todo el conocimiento que requiere para hacer uso del mismo.</div>
                    </div>
                </Card>
            </div>
            <div className="py-24 xl:px-32">
                <Card className="lg:shadow-2xl lg:p-8 border-none lg:border-solid" style={{fontFamily: "Poppins"}}>
                    <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center">
                        <div className="flex flex-col w-[90%]">
                            <div className="mb-3 flex flex-row items-center justify-center lg:items-start lg:justify-start">
                                <IconQuote size={40} className="text-blueprimary"/>
                            </div>
                            <div className="mb-3 text-center lg:text-start">
                                <em className="text-center lg:text-start">Es un negocio muy rentable, genera ganancias muy rápido a medida que usted le vaya dando publicidad y en la mayoría de los casos la gente llega por recomendación, el servidor que se le da esta planeado para futuro ya que tiene 24TB de almacenamiento (dependiendo del paquete que escoja), para que tenga muchísimo espacio donde subir las películas y series. Usted vende el mes al costo que usted desee, el software se encarga de vencer a los usuarios de forma automática, se le entrega todo lo necesario para subir, bajar películas y series, así mismo como capacitación para el uso del software. Entre más clientes más ganancias, este negocio no requiere de gran publicidad, mediante los grupos de facebook atrae a demasiados clientes.</em>
                            </div>
                            <div className="mb-3 text-center lg:text-start">
                                <em className="text-center lg:text-start">
                                Usted podrá ofrecer su app para Android, FireTV, TV Box’s, y para cualquier plataforma que acepte listas m3u como Windows, Mac, iPhone, SmartTV, etc, etc.
                                </em>
                            </div>
                            <div className="mb-3 text-center lg:text-start">
                                <em className="text-center lg:text-start">
                                Cualquier duda con gusto le atenderemos.
                                </em>
                            </div>
                            <div className="mb-2 text-center lg:text-start">
                                <p className="text-center font-bold text-lg lg:text-start">
                                SpaceTV+
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-[10%] items-center">
                            <img src={logo} className="lg:w-full lg:h-full min-w-[90px]" />
                        </div>
                    </div>
                    
                </Card>
            </div>
            <div className="py-12 2xl:px-32">
                <div className="flex flex-col lg:flex-row items-center lg:justify-center border-2 border-blueprimary px-2 pb-4">
                    <div className="relative lg:ml-[-50px] mt-[-15px] lg:mt-[15px] flex flex-col justify-center w-fit">
                        <img src={screen} className="w-full"/>
                    </div>
                    <div className="lg:ml-12 flex flex-col lg:items-start justify-center">
                        <h1 className='mb-4 mt-4 text-3xl xl:text-4xl font-extralight text-center lg:text-start'>
                            ¿Ya tiene su propio servicio IPTV activo y solo requiere canales o APP Android?
                        </h1>
                        <h1 className='mb-4 text-xl text-center font-extralight'>
                            Información y costos en:
                        </h1>
                        <div className="flex flex-row justify-center lg:justify-start">
                            <a href="/canales-restream">
                                <Button className="rounded-none bg-blueprimary">
                                    CANALES RE-STREAM O APP ANDROID
                                </Button>
                            </a>
                        </div>
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
