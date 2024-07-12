import { Card } from "../../components/ui/card";
import { Footer } from "../../components/pages/Footer";
import { HeroPages } from "../../components/pages/HeroPages";

export const TerminosPage = () => {
  return (
    <div className="flex-col md:flex">
      <div className="relative w-full bg-black h-[220px]">
        <HeroPages title="Terminos & Condiciones" />
        <div className="relative flex-1 space-y-4 px-6 sm:px-16 md:px-24 lg:px-32 mt-12">
          <div className="my-12">
            <div className="my-24 2xl:px-32">
              <h1 className="mb-6 text-3xl xl:text-5xl text-center font-extralight">
                <em>AeonTV</em>
              </h1>
              <h1 className="mb-12 text-xl text-center">
                <em className="font-extralight">
                  Estos términos y condiciones regulan el uso de la aplicación
                </em>
              </h1>
              <Card
                className="shadow-xl p-8 text-justify"
                style={{ fontFamily: "Poppins" }}
              >
                <em className="">
                  Al utilizar esta aplicación o canal de Roku, usted está
                  aceptando los términos y condiciones.
                  <br />
                  <br />
                  <b>Reembolsos.</b>
                  <br />
                  No se ofrecen reembolsos de ningún tipo, ni parciales ni
                  completos.
                  <br />
                  Usted comprende que este es un producto que, debido a las
                  condiciones de Roku, puede ser eliminado permanentemente. Por
                  lo tanto, acepta que en algún momento podría ser removido sin
                  posibilidad de reembolso. Sin embargo, siempre buscaremos una
                  solución para que pueda volver a disfrutar del canal en sus
                  dispositivos, manteniendo así su satisfacción.
                  <br />
                  <br />
                  <b>2</b>
                  <br />
                  La programación puede cambiar o variar sin previo aviso.
                  <br />
                  También acepta que, tratándose de Televisión En Línea y
                  archivos montados en un servidor, en algún momento pueden
                  ocurrir errores o caídas del servidor, las cuales se tratarán
                  de resolver de manera inmediata.
                  <br />
                  Aunque el estado de los servidores no depende de nosotros (y
                  no debería fallar), le garantizamos un 95% de Uptime de
                  AeonTV.
                  <br />
                  <br />
                  <b>3</b>
                  <br />
                  AeonTV no aloja archivos que violen las leyes de Copyright en
                  su servidor. Todos los videos, películas y series aquí
                  mostrados son recopilados del vasto mundo del internet.
                  <br />
                  <br />
                  Para más información, visite:{" "}
                  <a href="/" className="text-greenprimary">
                    www.aeontv.com.mx
                  </a>
                </em>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
