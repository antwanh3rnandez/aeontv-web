import { Button } from "../../components/ui/button"
import hero from "../../assets/hero-3.png"
import tv from "../../assets/tv-aeon.png"
import { Footer } from '../../components/pages/Footer';
import { LatestMovies } from '../../components/pages/inicio/CustomSplide';

import { ContentNums } from '../../components/ContentNums';
import { PricingPayment } from '../../components/PricingPayments';
import { SeparatorSectionUp } from '../../components/SeparationItems';
import { TestimonialSection } from "../../components/pages/inicio/TestimonialCarousel";
import { useEffect, useState } from "react";
import axios from "axios";

export const InicioPage = () => {

  const [count, setCount] = useState(5000);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_PAGE_MOVIES_URL;

    axios
      .get(apiUrl)
      .then((response) => {
        setCount(response.data.data.allCount);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  return (
    <div className="flex-col md:flex">
      <div className="relative w-full bg-black h-[500px] md:h-[650px]">
        <img className="w-full h-full object-cover" src={hero} alt="Hero" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="w-full h-full bg-black bg-opacity-20 text-white text-center p-4 rounded"
            style={{ backdropFilter: "blur(0px)" }}
          >
            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 items-center justify-center my-6">
              <div className="md:order-1 flex flex-col items-center justify-center">
                <h2
                  className="lg:text-[1.125em] md:text-[1em] text-[.8em]"
                  style={{
                    fontFamily: "Oswald",
                    fontWeight: 400,
                    lineHeight: "1.55",
                    letterSpacing: "3px",
                  }}
                >
                  EL MEJOR CONTENIDO POR INTERNET PARA TU DISPOSITIVO ROKU
                </h2>
                <h2
                  className="lg:text-[5em] md:text-[3.5em] text-[2.5em] mt-3"
                  style={{
                    fontFamily: "Oswald",
                    fontWeight: 600,
                    lineHeight: "1.26",
                  }}
                >
                  OLVIDATE DE LAS <br />
                  MENSUALIDADES
                </h2>
                <h2
                  className="uppercase lg:text-[1.125em] md:text-[1em] text-[.8em] mt-3"
                  style={{
                    fontFamily: "Oswald",
                    fontWeight: 400,
                    lineHeight: "1.55",
                    letterSpacing: "3px",
                  }}
                >
                  AeonTV le ofrece todo nuestro contenido con un PAGO ÚNICO
                </h2>
                <div className="my-6 flex md:flex-row flex-col gap-3">
                  <a href="#paquetes">
                    <Button className="bg-greenprimary text-white hover:scale-105 hover:bg-[#357c00] transition px-8 py-6">
                      COMPRAR AHORA
                    </Button>
                  </a>
                  <a href="http://demo.aeontv.com.mx" target="_blank">
                    <Button className="bg-transparent text-white border border-white hover:bg-blueprimary hover:scale-105 transition px-8 py-6">
                      SOLICITAR DEMO
                    </Button>
                  </a>
                </div>
              </div>
              <div className="md:order-2 hidden md:flex flex-col items-center justify-center">
                <img className="max-w-xs lg:max-w-lg" src={tv}></img>
              </div>
            </div>
          </div>
        </div>
        <LatestMovies />
        <div className="style-441 space-y-4 px-3 sm:px-16 md:px-32 lg:px-48 pb-24">
          <div className="my-12">
            <div className="mt-16 grid space-y-6 lg:space-x-12 lg:space-y-0 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 lg:mx-0 text-center">
              <div>
                <h4
                  className="uppercase text-[2em] lg:text-[2.625em]"
                  style={{
                    fontFamily: "Oswald",
                    fontWeight: 400,
                    lineHeight: "1.143",
                  }}
                >
                  Llegamos para <span className="text-pink">revolucionar</span>
                  <br />
                  El <span className="text-pink">Streaming.</span>
                </h4>
                <p
                  className="mt-5 text-[0.875rem] lg:text-[1em] px-3 lg:px-12"
                  style={{ fontFamily: "Poppins", lineHeight: "1.6" }}
                >
                  Sabemos que actualmente todos los proveedores de IPTV que
                  ofrecen películas, series y canales de tv, cobran costos
                  mensuales o por tiempo, es por eso que AeonTV quiso cambiar lo
                  tradicional y liberar de una vez por todas a sus dispositivos
                  Roku's de las mensualidades.
                </p>
              </div>
              <div>
                <h4
                  className="uppercase text-[2em] lg:text-[2.625em]"
                  style={{
                    fontFamily: "Oswald",
                    fontWeight: 400,
                    lineHeight: "1.143",
                  }}
                >
                  Nuestro servicio
                  <br />
                  Es muy <span className="text-pink">convincente.</span>
                </h4>
                <p
                  className="mt-5 text-[0.875rem] lg:text-[1em] px-3 lg:px-12"
                  style={{ fontFamily: "Poppins", lineHeight: "1.6" }}
                >
                  Pida su demostración y compruebe por usted mismo la calidad de
                  nuestro servicio, con más de {count} películas, series y
                  canales de tv en vivo y eventos deportivos, AeonTV es la mejor
                  opción para su dispositivo Roku.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-12">
            <h4
              className="uppercase text-[1em] lg:text-[1.25em] text-center text-[#00b0f4] mb-4"
              style={{
                fontFamily: "Oswald",
                fontWeight: 400,
                lineHeight: "1.143",
              }}
            >
              Nuestro servicio
            </h4>
            <h2
              className="uppercase text-[1.6em] lg:text-[2.625em] text-center mb-4"
              style={{
                fontFamily: "Oswald",
                fontWeight: 400,
                lineHeight: "1.143",
              }}
            >
              Las cosas claras
            </h2>
            <h3
              className="text-[1em] lg:text-[1.25em] text-center font-light"
              style={{ fontFamily: "Poppins" }}
            >
              Queremos darle siempre lo mejor es por eso que le ofrecemos…
            </h3>
            <div className="mt-16 grid space-y-6 lg:space-x-12 lg:space-y-0 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 lg:mx-0 text-center">
              <div className="order-1 lg:order-1">
                <h4
                  className="uppercase text-[1em] lg:text-[1.25em] text-greenprimary mb-4"
                  style={{
                    fontFamily: "Oswald",
                    fontWeight: 400,
                    lineHeight: "1.143",
                  }}
                >
                  SIN LETRAS PEQUEÑAS
                </h4>
                <h4
                  className="uppercase text-[1em] lg:text-[1.25em]"
                  style={{
                    fontFamily: "Oswald",
                    fontWeight: 400,
                    lineHeight: "1.143",
                  }}
                >
                  LO QUE VES ES LO QUE OBTIENES
                </h4>
                <p
                  className="mt-5 text-[0.875rem] lg:text-[1em] px-4"
                  style={{ fontFamily: "Poppins", lineHeight: "1.6" }}
                >
                  Con AeonTV no hay letras pequeñas, lo que prometemos en
                  contenido y servicio es lo que usted obtendrá al adquirir
                  nuestro servicio.
                </p>
              </div>
              <div className="order-3 lg:order-2">
                <h4
                  className="uppercase text-[1em] lg:text-[1.25em] text-greenprimary mb-4"
                  style={{
                    fontFamily: "Oswald",
                    fontWeight: 400,
                    lineHeight: "1.143",
                  }}
                >
                  TE ESCUCHAMOS
                </h4>
                <h4
                  className="uppercase text-[1em] lg:text-[1.25em]"
                  style={{
                    fontFamily: "Oswald",
                    fontWeight: 400,
                    lineHeight: "1.143",
                  }}
                >
                  DESEA ALGUNA PELICULA O SERIE?
                </h4>
                <p
                  className="my-5 text-[0.875rem] lg:text-[1em] px-4"
                  style={{ fontFamily: "Poppins", lineHeight: "1.6" }}
                >
                  Ofrecemos servicio de peticiones para que usted pueda
                  solicitar su serie o película favorito si no se encuentra en
                  nuestro catalogo.
                </p>
                <a href="#paquetes">
                  <Button className="bg-greenprimary text-white hover:scale-105 hover:bg-[#357c00] transition px-8 py-6">
                    FORMULARIO DE PETICIONES
                  </Button>
                </a>
              </div>
              <div className="order-2 lg:order-3">
                <h4
                  className="uppercase text-[1em] lg:text-[1.25em] text-greenprimary mb-4"
                  style={{
                    fontFamily: "Oswald",
                    fontWeight: 400,
                    lineHeight: "1.143",
                  }}
                >
                  SOPORTE
                </h4>
                <h4
                  className="uppercase text-[1em] lg:text-[1.25em]"
                  style={{
                    fontFamily: "Oswald",
                    fontWeight: 400,
                    lineHeight: "1.143",
                  }}
                >
                  ESTAREMOS DISPONIBLES PARA USTED.
                </h4>
                <p
                  className="mt-5 text-[0.875rem] lg:text-[1em] px-4"
                  style={{ fontFamily: "Poppins", lineHeight: "1.6" }}
                >
                  Usted podrá contactarnos mediante nuestros métodos disponibles
                  y le responderemos a la brevedad posible su cuestión.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ContentNums />
        <PricingPayment />
        <SeparatorSectionUp color="greenprimary" />
        <TestimonialSection />
        <Footer />
      </div>
    </div>
  );
}
