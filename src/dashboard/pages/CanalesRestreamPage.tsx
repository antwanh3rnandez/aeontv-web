import { Card } from "../../components/ui/card"
import { Footer } from "../../components/pages/Footer";
import { HeroPages } from "../../components/pages/HeroPages";

export const CanalesRestreamPage = () => {

  return (
    <div className="flex-col md:flex">
      <div className="relative w-full bg-black h-[220px]">
        <HeroPages title="Canales Re-Stream"/>
        <div className="relative flex-1 space-y-4 px-6 sm:px-16 md:px-24 lg:px-32 mt-12">
          <div className='py-12'>
            <div className="2xl:px-32">
                <h1 className='mb-6 text-3xl xl:text-5xl text-center font-extralight'>
                    <em>¿Ya tiene su propio servicio IPTV activo y solo requiere canales o APP Android?</em>
                </h1>
                <h1 className='mb-8 text-xl text-center'>
                    <em className='font-extralight'>A continuación le mostramos los costos individuales por paquetes de canales y así mismo también el costo por la generación de su aplicación android para ofrecer su servicio.</em>
                </h1>
            </div>
            <div className="py-12">
                <h1 className='mb-8 text-3xl xl:text-5xl text-center font-extralight'>
                    Paquetes de Canales
                </h1>
                <div className="p-8 rounded-none space-y-6">
                    <div className="flex flex-wrap justify-center gap-6">
                        {/* Plan Lite */}
                        <Card className="rounded-xl hover:shadow-xl">
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-4">LITE</h3> 
                                <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-center mb-4">
                                    <span className="text-2xl xl:text-4xl font-semilight text-blueprimary">$</span>
                                    <span className="text-5xl xl:text-7xl font-semilight text-blueprimary">3,000</span>
                                    <span className="text-2xl xl:text-3xl font-light ">/ mes</span>
                                </div>
                                <h1 className='my-2 text-xl text-center'>
                                    <em className='font-extralight'>*Precios marcados en Pesos Mexicanos</em>
                                </h1>
                            </div>
                            <div className="mb-2 p-2 bg-gray-200 dark:bg-gray-700 h-24 flex flex-col items-center justify-center">
                                <span className="sm: text-xl md:text-2xl xl:text-3xl font-light text-center">Paquete de 50 Canales a elegir</span>
                            </div>
                            <div className="p-6">
                                <a
                                href="#"
                                className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-blueprimary text-white rounded-sm text-center font-semibold hover:bg-blue-600 transition duration-300"
                            >
                                Comprar
                                </a>
                            </div>
                        </Card>
                        {/* Plan Basic */}
                        <Card className="rounded-xl hover:shadow-xl">
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-4">BASIC</h3> 
                                <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-center mb-4">
                                    <span className="text-2xl xl:text-4xl font-semilight text-orange-500">$</span>
                                    <span className="text-5xl xl:text-7xl font-semilight text-orange-500">4,500</span>
                                    <span className="text-2xl xl:text-3xl font-light ">/ mes</span>
                                </div>
                                <h1 className='my-2 text-xl text-center'>
                                    <em className='font-extralight'>*Precios marcados en Pesos Mexicanos</em>
                                </h1>
                            </div>
                            <div className="mb-2 p-2 bg-gray-200 dark:bg-gray-700 h-24 flex flex-col items-center justify-center">
                                <span className="sm: text-xl md:text-2xl xl:text-3xl font-light text-center">Paquete de 80 Canales a elegir</span>
                            </div>
                            <div className="p-6">
                                <a
                                href="#"
                                className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-orange-500 text-white rounded-sm text-center font-semibold hover:bg-blue-600 transition duration-300"
                            >
                                Comprar
                                </a>
                            </div>
                        </Card>
                        {/* Plan Advanced */}
                        <Card className="rounded-xl hover:shadow-xl">
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-4">ADVANCED</h3> 
                                <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-center mb-4">
                                    <span className="text-2xl xl:text-4xl font-semilight text-green-500">$</span>
                                    <span className="text-5xl xl:text-7xl font-semilight text-green-500">8,000</span>
                                    <span className="text-2xl xl:text-3xl font-light ">/ mes</span>
                                </div>
                                <h1 className='my-2 text-xl text-center'>
                                    <em className='font-extralight'>*Precios marcados en Pesos Mexicanos</em>
                                </h1>
                            </div>
                            <div className="mb-2 p-2 bg-gray-200 dark:bg-gray-700 h-24 flex flex-col items-center justify-center">
                                <span className="sm: text-xl md:text-2xl xl:text-3xl font-light text-center">Paquete de 150 Canales a elegir</span>
                            </div>
                            <div className="p-6">
                                <a
                                href="#"
                                className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-green-500 text-white rounded-sm text-center font-semibold hover:bg-blue-600 transition duration-300"
                            >
                                Comprar
                                </a>
                            </div>
                        </Card>             
                        {/* Plan Premium */}
                        <Card className="rounded-xl hover:shadow-xl">
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-4">PREMIUM</h3> 
                                <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-center mb-4">
                                    <span className="text-2xl xl:text-4xl font-semilight text-red-600">$</span>
                                    <span className="text-5xl xl:text-7xl font-semilight text-red-600">10,000</span>
                                    <span className="text-2xl xl:text-3xl font-light ">/ mes</span>
                                </div>
                                <h1 className='my-2 text-xl text-center'>
                                    <em className='font-extralight'>*Precios marcados en Pesos Mexicanos</em>
                                </h1>
                            </div>
                            <div className="mb-2 p-2 bg-gray-200 dark:bg-gray-700 h-24 flex flex-col items-center justify-center">
                                <span className="sm: text-xl md:text-2xl xl:text-3xl font-light text-center">Paquete de 200 Canales a elegir</span>
                            </div>
                            <div className="p-6">
                                <a
                                href="#"
                                className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-red-600 text-white rounded-sm text-center font-semibold hover:bg-blue-600 transition duration-300"
                            >
                                Comprar
                                </a>
                            </div>
                        </Card>
                        {/* Plan Platinum */}
                        <Card className="rounded-xl hover:shadow-xl">
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-4">PLATINUM</h3> 
                                <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-center mb-4">
                                    <span className="text-2xl xl:text-4xl font-semilight text-purple-700">$</span>
                                    <span className="text-5xl xl:text-7xl font-semilight text-purple-700">15,000</span>
                                    <span className="text-2xl xl:text-3xl font-light ">/ mes</span>
                                </div>
                                <h1 className='my-2 text-xl text-center'>
                                    <em className='font-extralight'>*Precios marcados en Pesos Mexicanos</em>
                                </h1>
                            </div>
                            <div className="mb-2 p-2 bg-gray-200 dark:bg-gray-700 h-24 flex flex-col items-center justify-center">
                                <span className="sm: text-xl md:text-2xl xl:text-3xl font-light text-center">Paquete de 300 Canales a elegir</span>
                            </div>
                            <div className="p-6">
                                <a
                                href="#"
                                className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-purple-700 text-white rounded-sm text-center font-semibold hover:bg-blue-600 transition duration-300"
                            >
                                Comprar
                                </a>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <h1 className='mb-8 text-3xl xl:text-5xl text-center font-extralight'>
                    Paquetes de App Android
                </h1>
                <div className="p-8 rounded-none space-y-6">
                    <div className="flex flex-wrap justify-center gap-6">
                        {/* Plan Mensual */}
                        <Card className="rounded-xl hover:shadow-xl">
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-4">MENSUAL</h3> 
                                <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-center mb-4">
                                    <span className="text-2xl xl:text-4xl font-semilight text-blueprimary">$</span>
                                    <span className="text-5xl xl:text-7xl font-semilight text-blueprimary">1,200</span>
                                    <span className="text-2xl xl:text-3xl font-light ">/ mes</span>
                                </div>
                                <h1 className='my-2 text-xl text-center'>
                                    <em className='font-extralight'>*Precios marcados en Pesos Mexicanos</em>
                                </h1>
                            </div>
                            <div className="mb-2 p-2 bg-gray-200 dark:bg-gray-700 h-24 flex flex-col items-center justify-center">
                                <span className="sm: text-xl md:text-2xl xl:text-3xl font-light text-center">App con sus propios logos y nombre</span>
                            </div>
                            <div className="p-6">
                                <a
                                href="#"
                                className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-blueprimary text-white rounded-sm text-center font-semibold hover:bg-blue-600 transition duration-300"
                            >
                                Comprar
                                </a>
                            </div>
                        </Card>
                        {/* Plan Pago Unico */}
                        <Card className="rounded-xl hover:shadow-xl">
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-4">PAGO ÚNICO</h3> 
                                <div style={{fontFamily: 'Poppins', fontWeight: '400'}} className="flex items-center justify-center mb-4">
                                    <span className="text-2xl xl:text-4xl font-semilight text-orange-500">$</span>
                                    <span className="text-5xl xl:text-7xl font-semilight text-orange-500">15,000</span>
                                    
                                </div>
                                <h1 className='my-2 text-xl text-center'>
                                    <em className='font-extralight'>*Precios marcados en Pesos Mexicanos</em>
                                </h1>
                            </div>
                            <div className="mb-2 p-2 bg-gray-200 dark:bg-gray-700 h-24 flex flex-col items-center justify-center">
                                <span className="sm: text-xl md:text-2xl xl:text-3xl font-light text-center">App con sus propios logos y nombre</span>
                            </div>
                            <div className="p-6">
                                <a
                                href="#"
                                className="h-20 flex flex-col justify-center items-center w-full py-2 px-4 bg-orange-500 text-white rounded-sm text-center font-semibold hover:bg-blue-600 transition duration-300"
                            >
                                Comprar
                                </a>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <h1 className="mb-8 text-3xl xl:text-5xl text-center font-extralight">
                    Requerimientos e información:
                </h1>
                <p className='mb-8 text-xl text-center'>
                    <em className='font-extralight'>• Es necesario contar con Xtream Codes o Xtream UI.</em>
                </p>
                <p className='mb-8 text-xl text-center'>
                    <em className='font-extralight'>• La aplicación funciona con cualquier tipo de sistema Android, ya sea Celular, Tablet, SmartTV, FireTV, FireStick, etc.</em>
                </p>
                <p className='mb-8 text-xl text-center'>
                    <em className='font-extralight'>• Canales en servidores dedicados propios monitoreados 24/7 para así disminuir cualquier error o inconveniente que pueda ocurrir.</em>
                </p>
                <p className='mb-8 text-xl text-center'>
                    <em className='font-extralight'>• Soporte 24/7 a nuestros clientes empresariales.</em>
                </p>
                <p className='mb-8 text-xl text-center'>
                    <em className='font-semibold'>Cualquier duda o pregunta puede contactarnos y con gusto le atenderemos.</em>
                </p>
            </div>
          </div>  
        </div>
        <Footer/>
      </div>
    </div>
  )
}
