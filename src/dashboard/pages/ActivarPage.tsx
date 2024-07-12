import { Card } from "../../components/ui/card";
import { Footer } from "../../components/pages/Footer";
import { HeroPages } from "../../components/pages/HeroPages";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const ActivarPage = () => {

  const [idRoku, setIdRoku] = useState("")
  const [modeloRoku, setModeloRoku] = useState("")
  const [nombreRoku, setNombreRoku] = useState("")

  const [metodoPago, setMetodoPago] = useState("")
  const [idTransaccion, setIdTransaccion] = useState("")
  const [correo, setCorreo] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [terms, setTerms] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    const apiUrl = "https://aeontv.com.mx/cuenta_api/user-roku/";

    let data = {
      idRoku: idRoku,
      tipoCuenta: "Pago",
      modeloRoku: modeloRoku,
      nombreRoku: nombreRoku,
      metodoPago: metodoPago,
      idTransaccion: idTransaccion,
      email: correo,
      whatsapp: whatsapp,
      terminos: terms,
    };

    axios
      .post(apiUrl, data)
      .then((response) => {
        console.log(response.data.data.message);
        toast.success(response.data.data.message);
        handleCleanForm();
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          // Manejar error de ID de Roku duplicado
          console.error("Error: El ID de Roku ya está registrado.");
          toast.error("El ID de Roku ya está registrado.");
        } else {
          console.error("Error al enviar datos:", error);
          toast.error("Error al enviar datos:", error);
        }
      });
  };

  const handleCleanForm = () => {
    setIdRoku("");
    setModeloRoku("");
    setNombreRoku("");
    setMetodoPago("");
    setIdTransaccion("");
    setCorreo("");
    setWhatsapp("");
    setTerms(false);
  }

  const handleChange = (e) => {
    const inputValue = e.target.value
      .replace(/[^a-zA-Z0-9]/g, "")
      .replace(/O/g, "0"); // Reemplazamos la letra 'O' por el número '0'
    let formattedValue = "";

    for (let i = 0; i < inputValue.length && i < 32; i++) {
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        formattedValue += "-";
      }
      formattedValue += inputValue[i];
    }

    setIdRoku(formattedValue);
  };

  return (
    <div className="flex-col md:flex">
      <div className="relative w-full bg-black h-[220px]">
        <HeroPages title="Activar Servicio" />
        <div className="relative flex-1 space-y-4 px-6 sm:px-16 md:px-24 lg:px-32 mt-12">
          <div className="my-12">
            <div className="my-24 2xl:px-32">
              <h1 className="mb-6 text-3xl xl:text-5xl text-center font-extralight">
                <em>AeonTV</em>
              </h1>
              <h1 className="mb-12 text-xl text-center">
                <em className="font-extralight">
                  Es necesario haber realizado su pago para activar el servicio,
                  así mismo haber instalado la aplicación en su dispositivo. Si
                  no ha realizado alguno de los 2 pasos necesarios, puede
                  hacerlos en los siguientes enlaces:
                  <br />
                  <a href="/instalar" className="text-greenprimary">
                    {" "}
                    Instalar AeonTV
                  </a>
                  {` | `}
                  <a href="/#paquetes" className="text-greenprimary">
                    {" "}
                    Realizar Pago
                  </a>
                </em>
              </h1>
              <Card className="shadow-xl p-8" style={{ fontFamily: "Poppins" }}>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-2">
                    <Card className="flex flex-col lg:flex-wrap items-center justify-center gap-2 p-5 border-1 border-greenprimary mt-4 lg:mt-0 w-full h-full">
                      <label className="font-semibold text-end">
                        Ingrese su Método de Pago:
                      </label>
                      <select
                        name="metodoPago"
                        className="border-2 border-greenprimary text-black rounded-md p-2 w-full"
                        value={metodoPago}
                        onChange={(e) => setMetodoPago(e.target.value)}
                        required
                      >
                        <option value="">Seleccione</option>
                        <option value="PayPal">PayPal</option>
                        <option value="MercadoPago">MercadoPago</option>
                        <option value="Transferencia/Deposito">
                          Transferencia/Deposito
                        </option>
                      </select>

                      <label className="mt-2 font-semibold text-end">
                        Ingrese el ID de la Transacción:
                      </label>
                      <input
                        type="text"
                        name="idTransaccion"
                        className="border-2 border-greenprimary text-black rounded-md p-2 w-full"
                        value={idTransaccion}
                        onChange={(e) => setIdTransaccion(e.target.value)}
                        required
                      />

                      <label className="mt-2 font-semibold text-end">
                        Ingrese su Correo Electrónico:
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="border-2 border-greenprimary text-black rounded-md p-2 w-full"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                      />

                      <label className="mt-2 font-semibold text-end">
                        Ingrese su Número de WhatsApp:
                      </label>
                      <input
                        type="text"
                        name="whatsapp"
                        className="border-2 border-greenprimary text-black rounded-md p-2 w-full"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        required
                      />
                    </Card>
                    <Card className="flex flex-col items-center justify-start gap-2 p-5 border-1 border-greenprimary w-full h-full">
                      <label className="font-semibold text-end">
                        Ingrese su ID de Roku:
                      </label>
                      <input
                        type="text"
                        name="idRoku"
                        maxLength={37} // 32 characters + 4 dashes
                        value={idRoku}
                        onChange={handleChange}
                        className="border-2 border-greenprimary text-black rounded-md p-2 w-full"
                        required
                      />

                      <label className="mt-2 font-semibold text-end">
                        Ingrese el Modelo de su Roku:
                      </label>
                      <input
                        type="text"
                        name="modeloRoku"
                        className="border-2 border-greenprimary text-black rounded-md p-2 w-full"
                        value={modeloRoku}
                        onChange={(e) => setModeloRoku(e.target.value)}
                        required
                      />

                      <label className="mt-2 font-semibold text-end">
                        Ingrese el Nombre de su Roku:
                      </label>
                      <input
                        type="text"
                        name="nombreRoku"
                        className="border-2 border-greenprimary text-black rounded-md p-2 w-full"
                        value={nombreRoku}
                        onChange={(e) => setNombreRoku(e.target.value)}
                        required
                      />
                      <p className="mt-5 text-red-500 text-center">
                        Ingrese los datos tal cual aparecen dentro del canal de
                        Roku, de lo contrario no se activará correctamente su
                        dispositivo.
                      </p>
                    </Card>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div>
                      <input
                        className="mt-3 mr-2"
                        name="terminos"
                        type="checkbox"
                        value={terms.toString()}
                        onChange={(e) => setTerms(e.target.checked)}
                        required
                      />
                      <label className="text-center">
                        Acepto los{" "}
                        <a
                          href="/terminos"
                          target="_blank"
                          className="text-greenprimary"
                        >
                          términos y condiciones
                        </a>
                        .
                      </label>
                    </div>
                    <button
                      type="submit"
                      id="enviar"
                      className="mt-4 bg-greenprimary text-white rounded-md p-2"
                    >
                      Activar
                    </button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
