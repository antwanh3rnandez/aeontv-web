import { Card } from "../../../components/ui/card";
import { Footer } from "../../../components/pages/Footer";
import { HeroPages } from "../../../components/pages/HeroPages";
import {
  IconAlertTriangleFilled,
  IconCurrencyDollar,
  IconDownload,
  IconRefresh,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import axios from "axios";

export type Codigo = {
  id: string;
  codigo: string;
  fecha: string;
};

export type CategoryList = {
  data: Codigo;
};

export const RokuPage = () => {

   const [data, setData] = useState<Codigo[]>([]);

   useEffect(() => {
     const apiUrl = "https://aeontv.com.mx/cuenta_api/codigo-roku/";

     axios
       .get(apiUrl)
       .then((response) => {
         setData(response.data.data);
       })
       .catch((error) => {
         console.error("Error al obtener datos:", error);
       });
   }, []);

   const codigos = data;

  return (
    <div className="flex-col md:flex">
      <div className="relative w-full bg-black h-[220px]">
        <HeroPages title="Instalar AeonTV" />
        <div className="relative flex-1 space-y-4 px-6 sm:px-16 md:px-24 lg:px-32 mt-12">
          <div className="my-12">
            <div className="my-24 2xl:px-32">
              <h1 className="mb-6 text-3xl xl:text-5xl text-center font-extralight">
                <em>AeonTV | Pago Único</em>
              </h1>
              <h1 className="mb-12 text-xl text-center">
                <em className="font-extralight">
                  Esta aplicación le permitirá acceder al contenido de
                  Películas, Canales y Series
                </em>
              </h1>
              <Card className="shadow-xl p-8" style={{ fontFamily: "Poppins" }}>
                <div className="grid lg:grid-cols-2 items-start justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="border-2 border-greenprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                      <IconDownload size={48} className="text-greenprimary" />
                    </div>
                    <div className="py-4 lg:mt-0 text-center lg:text-center">
                      <h4 className="font-semibold">PASO 1</h4>
                      <p className="font-light p-4">
                        Instalar el canal de Roku con los siguientes codigos de
                        instalación (Los códigos pueden cambiar cada cierto
                        tiempo).
                        <br />
                        <div className="flex flex-wrap items-center justify-center">
                            {codigos.map((item, index) => (
                            <>
                                <a
                                href={`https://my.roku.com/add/${item.codigo}`}
                                target="_blank"
                                key={index}
                                className="text-greenprimary"
                                >
                                &bull; {item.codigo} &nbsp;
                                </a>
                                <br />
                            </>
                            ))}
                        </div>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="border-2 border-greenprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                      <IconRefresh size={48} className="text-greenprimary" />
                    </div>
                    <div className="py-4 lg:mt-0 text-center lg:text-center">
                      <h4 className="font-semibold">PASO 2</h4>
                      <p className="font-light p-4">
                        Una vez instalado vamos desde el Roku a Configuración{" "}
                        {">"} Sistema {">"} Actualización de Sistema {">"}{" "}
                        «Verificar ahora» para que le aparezca el canal.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="border-2 border-greenprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                      <IconAlertTriangleFilled
                        size={48}
                        className="text-greenprimary"
                      />
                    </div>
                    <div className="py-4 lg:mt-0 text-center lg:text-center">
                      <h4 className="font-semibold">PASO 3</h4>
                      <p className="font-light p-4">
                        Obtendremos el ID de Roku, Modelo y Nombre entrando al
                        canal de Roku, estos datos los necesitaremos para
                        activar el servicio luego de nuestro pago.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="border-2 border-greenprimary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                      <IconCurrencyDollar
                        size={48}
                        className="text-greenprimary"
                      />
                    </div>
                    <div className="py-4 lg:mt-0 text-center lg:text-center">
                      <h4 className="font-semibold">PASO 4</h4>
                      <p className="font-light p-4">
                        Si realizó su pago mediante PayPal o MercadoPago
                        automaticamente se le redirigirá a la página de
                        activación, de lo contrario deberá enviarnos los datos
                        de su equipo con su comprobante para realizarle la
                        activación de su servicio.
                      </p>
                      <p className="p-4">
                        <em className="text-greenprimary">
                          ¡Listo! Ahora puede acceder al contenido.
                        </em>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
