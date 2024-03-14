import { IconBrandMessenger, IconBrandPaypal, IconBuildingStore, IconInfoCircle } from "@tabler/icons-react";
import CountdownTimer from "./CountdownTimer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { IconCurrencyDollar } from "@tabler/icons-react";
import { IconCreditCard } from "@tabler/icons-react";
import { IconBrandCashapp } from "@tabler/icons-react";
import { SeparatorWithIcon } from "./SeparationItems";


export function PricingPayment () {

    return (
        <>
            <div className='py-12 px-6 lg:px-0' id='paquetes'>
                <h2 className='uppercase text-[1.6em] lg:text-[2.625em] text-center mb-4' style={{fontFamily: 'Oswald', fontWeight: 400, lineHeight: '1.143'}}>
                    Comprar
                </h2>
                <h3 className='text-[1em] lg:text-[1.25em] text-center font-light px-8 lg:px-64 mb-4' style={{fontFamily: 'Poppins'}}>
                    A continuación le mostramos nuestro precio de PAGO ÚNICO.
                </h3>
                <h2 className='text-[1.6em] lg:text-[2.625em] text-center mb-4' style={{fontFamily: 'Oswald', fontWeight: 400, lineHeight: '1.143'}}>
                    Métodos de Pago
                </h2>
                <h4 className='uppercase text-[1em] lg:text-[1.25em] text-center text-blueprimary mb-4' style={{fontFamily: 'Oswald', fontWeight: 400, lineHeight: '1.143', letterSpacing: '2px'}}>
                    APROVECHA NUESTROS PRECIOS DE PROMOCIÓN POR QUE POSTERIORMENTE CAMBIARÁN
                </h4>
                <div>
                    <CountdownTimer />
                </div>
                <h4 className='text-[1em] lg:text-[1.25em] text-center text-red-500 mb-4' style={{fontFamily: 'Oswald', fontWeight: 400, lineHeight: '1.143'}}>
                    Tiempo restante de precio en promoción
                </h4>
                <div className='mt-16 flex flex-col lg:flex-row 2xl:px-24 items-center justify-center gap-4'>
                    <Card className='w-96 flex flex-col shadow-2xl rounded-2xl border-2'>
                        <CardHeader>
                            <CardTitle className='flex flex-col items-center text-center text-xl text-muted-foreground'>
                                <div className='flex justify-center items-center border-4 border-greenprimary rounded-full w-24 h-24'>
                                    <IconBrandPaypal size={64} className='text-greenprimary' />
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='flex flex-col items-center justify-center space-y-3 h-full'>
                            <CardDescription>
                            <div className='text-center text-lg text-muted-foreground'>
                                <div className="mb-4 text-xl font-semibold text-muted-foreground">
                                PAGO ÚNICO
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='flex items-center gap-2'>
                                    <h1 className='text-2xl text-greenprimary line-through'>
                                        <em style={{fontFamily: 'Poppins'}}>$50.00</em>
                                    </h1>
                                    <h1 className='text-3xl text-blueprimary'>
                                        <em style={{fontFamily: 'Bungee'}}>$40.00</em>
                                    </h1>
                                </div>
                            </div>
                            <div className='text-center mt-4'>
                                <h1 className='text-lg font-semibold'>
                                <em>PayPal (USD)</em>
                                </h1>
                            </div>
                            <div className='mt-4 text-center text-sm font-bold text-muted-foreground'>
                                + Comisión por uso de método de pago.
                            </div>
                            <div className='mt-6 flex items-center justify-center'>
                                <div className='flex items-center space-x-4 lg:space-x-6'>
                                    <a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4BK4JHYWWAPRA' target='_blank'>
                                        <Button className='bg-greenprimary'>
                                        <IconBrandPaypal /> &nbsp; 
                                        <div>Comprar</div>
                                        </Button>
                                    </a>
                                </div>
                            </div>
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Card className='w-96 flex flex-col shadow-2xl rounded-2xl border-2'>
                    <CardHeader>
                        <CardTitle className='flex flex-col items-center text-center text-xl text-muted-foreground'>
                            <div className='flex justify-center items-center border-4 border-greenprimary rounded-full w-24 h-24'>
                                <IconCurrencyDollar size={64} className='text-greenprimary' />
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-col items-center justify-center space-y-3 h-full'>
                        <CardDescription>
                            <div className='text-center text-lg text-muted-foreground'>
                                <div className="mb-4 text-xl font-semibold text-muted-foreground">
                                PAGO ÚNICO
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='flex items-center gap-2'>
                                    <h1 className='text-2xl text-greenprimary line-through'>
                                        <em style={{fontFamily: 'Poppins'}}>$1,000</em>
                                    </h1>
                                    <h1 className='text-3xl text-blueprimary'>
                                        <em style={{fontFamily: 'Bungee'}}>$750</em>
                                    </h1>
                                </div>
                            </div>
                            <div className='text-center mt-4'>
                                <h1 className='text-lg font-semibold'>
                                    <em>MercadoPago (MXN)</em>
                                </h1>
                            </div>
                            <div className='mt-4 text-center text-sm font-bold text-muted-foreground'>
                                + Comisión por uso de método de pago.
                            </div>
                            <div className='mt-6 flex items-center justify-center'>
                                <div className='flex items-center space-x-4 lg:space-x-6'>
                                    <a target='_blank' href='https://mpago.la/1LbuzSY'>
                                        <Button className='bg-greenprimary'>
                                        <IconCreditCard /> &nbsp; 
                                        <div>Comprar</div>
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </CardDescription>
                    </CardContent>
                    </Card>
                </div>
            </div>
            <SeparatorWithIcon icon={IconBrandCashapp} iconSize={48} color='greenprimary' />
            <div className='py-12 px-6 lg:px-0'>
                <h2 className='uppercase text-[1.6em] lg:text-[2.625em] text-center mb-4' style={{fontFamily: 'Oswald', fontWeight: 400, lineHeight: '1.143'}}>
                    Deposito OXXO / 7-Eleven / Transferencia (MXN)
                </h2>
                <div className='mt-16 flex flex-col lg:flex-row 2xl:px-24 items-center justify-center gap-4 lg:px-24'>
                    <Card className='w-full lg:w-[35vw] flex flex-col shadow-2xl rounded-2xl border-2'>
                    <CardHeader>
                        <CardTitle className='flex flex-col items-center text-center text-xl text-muted-foreground'>
                        <div className='flex justify-center items-center border-4 border-greenprimary rounded-full w-24 h-24'>
                        <IconBuildingStore size={64} className='text-greenprimary' />
                        </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-col items-center justify-center space-y-3 h-full'>
                        <CardDescription>
                        <div className='text-center text-lg text-muted-foreground'>
                            <div className="mb-4 text-xl font-semibold text-muted-foreground">
                            OXXO
                            </div>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-2xl text-blueprimary'>
                            <em style={{fontFamily: 'Bungee'}}>4152 3140 0408 8871</em>
                            </h1>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-lg font-semibold'>
                            <em>BBVA Bancomer</em>
                            </h1>
                        </div>
                        <div className='mt-4 text-center'>
                            <h1 className='text-lg font-normal'>
                            <b>Monto</b>: <em>$750</em>
                            </h1>
                        </div>
                        <div className='mt-2 text-center'>
                            <h1 className='text-lg font-normal'>
                            <b>Nombre</b>: <em>Jorge Hernandez</em>
                            </h1>
                        </div>
                        <div className='mt-4 text-center text-sm font-semibold text-muted-foreground'>
                            <em>Puede realizar su pago en <b>OXXO</b> solamente brindando el número de tarjeta y monto a depositar, también puede realizar <b>transferencia</b> desde su banca móvil.</em>
                        </div>
                        <div className='mt-4 text-center text-sm font-bold text-muted-foreground'>
                            <em>Una vez realizado su pago envíenos su comprobante por Messenger.</em>
                        </div>
                        <div className='mt-6 flex items-center justify-center'>
                            <div className='flex items-center space-x-4 lg:space-x-6'>
                            <a target='_blank' href='http://m.me/aeontv?text=Realice%20mi%20pago'>
                                <Button className='bg-greenprimary'>
                                <IconBrandMessenger /> &nbsp; Ya pagué
                                </Button>
                            </a>
                            </div>
                        </div>
                        </CardDescription>
                    </CardContent>
                    </Card>
                    <Card className='w-full lg:w-[35vw] flex flex-col shadow-2xl rounded-2xl border-2'>
                    <CardHeader>
                        <CardTitle className='flex flex-col items-center text-center text-xl text-muted-foreground'>
                        <div className='flex justify-center items-center border-4 border-greenprimary rounded-full w-24 h-24'>
                        <IconBuildingStore size={64} className='text-greenprimary' />
                        </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-col items-center justify-center space-y-3 h-full'>
                        <CardDescription>
                        <div className='text-center text-lg text-muted-foreground'>
                            <div className="mb-4 text-xl font-semibold text-muted-foreground">
                            7-Eleven
                            </div>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-2xl text-blueprimary'>
                            <em style={{fontFamily: 'Bungee'}}>4189 1431 1341 8316</em>
                            </h1>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-lg font-semibold'>
                            <em>Banorte</em>
                            </h1>
                        </div>
                        <div className='mt-4 text-center'>
                            <h1 className='text-lg font-normal'>
                            <b>Monto</b>: <em>$750</em>
                            </h1>
                        </div>
                        <div className='mt-2 text-center'>
                            <h1 className='text-lg font-normal'>
                            <b>Nombre</b>: <em>Jorge Hernandez</em>
                            </h1>
                        </div>
                        <div className='mt-4 text-center text-sm font-semibold text-muted-foreground'>
                            <em>Puede realizar su pago en <b>7-Eleven</b>, <b>Farmacias Guadalajara</b>, <b>Farmacias del Ahorro</b> y/o <b>Soriana</b> solamente brindando el número de tarjeta y monto a depositar, también puede realizar <b>transferencia</b> desde su banca móvil.</em>
                        </div>
                        <div className='mt-4 text-center text-sm font-bold text-muted-foreground'>
                            <em>Una vez realizado su pago envíenos su comprobante por Messenger.</em>
                        </div>
                        <div className='mt-6 flex items-center justify-center'>
                            <div className='flex items-center space-x-4 lg:space-x-6'>
                            <a target='_blank' href='http://m.me/aeontv?text=Realice%20mi%20pago'>
                                <Button className='bg-greenprimary'>
                                <IconBrandMessenger /> &nbsp; Ya pagué
                                </Button>
                            </a>
                            </div>
                        </div>
                        </CardDescription>
                    </CardContent>
                    </Card>
                </div>
            </div>  
            <div className='mb-12 px-2'>
                <h2 className='uppercase text-[1.6em] lg:text-[2.625em] text-center mb-6' style={{fontFamily: 'Oswald', fontWeight: 400, lineHeight: '1.143'}}>
                    Puntos a considerar
                </h2>
                <ul className='flex flex-col items-start justify-center space-y-4 px-4 md:px-16 lg:px-48'>
                    <li className='flex items-center justify-center space-x-4'>
                        <IconInfoCircle size={16} className='text-greenprimary min-w-[16px]' />
                        <h1 className='text-sm lg:text-lg'>
                            El costo de nuestro pago único es por dispositivo.
                        </h1>
                    </li>
                    <li className='flex items-center justify-center space-x-4'>
                        <IconInfoCircle size={16} className='text-greenprimary min-w-[16px]' />
                        <h1 className='text-sm lg:text-lg'>
                            Si desea tener otro dispositivo para reproducir contenido simultáneamente deberá pagar la cuota de “pago único” por el dispositivo extra.
                        </h1>
                    </li>
                    <li className='flex items-center justify-center space-x-4'>
                        <IconInfoCircle size={16} className='text-greenprimary min-w-[16px]' />
                        <h1 className='text-sm lg:text-lg'>
                            El costo le incluye todo el contenido antes mencionado.
                        </h1>
                    </li>
                    <li className='flex items-center justify-center space-x-4'>
                        <IconInfoCircle size={16} className='text-greenprimary min-w-[16px]' />
                        <h1 className='text-sm lg:text-lg'>
                        Una vez que realice el pago deberá notificarnos mediante nuestro facebook o bien mediante telegram, para generarle de manera inmediata su cuenta y así pueda hacer uso del servicio Premium.
                        </h1>
                    </li>
                    <li className='flex items-center justify-center space-x-4'>
                        <IconInfoCircle size={16} className='text-greenprimary min-w-[16px]' />
                        <h1 className='text-sm lg:text-lg'>
                            Le recomendamos seguirnos en facebook y unirse a nuestro grupo de telegram en donde mostramos avisos y todas nuestras actualizaciones del contenido que se suben.
                        </h1>
                    </li>
                </ul>
                <div className="my-6 flex md:flex-row flex-col gap-3 items-center justify-center">
                  <a href='https://www.facebook.com/aeontv' target='_blank' >
                    <Button className='dark:bg-transparent bg-black text-white border border-white hover:bg-blueprimary hover:scale-105 transition px-8 py-6 uppercase'>Facebook</Button>
                  </a>
                  <Button className='bg-greenprimary text-white hover:scale-105 hover:bg-[#357c00] transition px-8 py-6 uppercase pointer-events-none'>Telegram</Button>
                  
                </div>
            </div> 
        </>
    );
}  