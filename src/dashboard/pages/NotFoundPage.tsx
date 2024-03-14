import { NavLink } from "react-router-dom";
import {
  Card,
} from "../../components/ui/card";
import { menuOptions } from "../../layouts/DashboardLayout";

export const NotFoundPage = () => {
  return (
    <div className="flex-col md:flex">
      <div className="mt-12 mb-6 mx-6 flex flex-col items-center justify-center">
        <p className="hero-text lg:text-[10.5em] text-[8.5em] hero-animated glow">404</p>
        <p className="hero-text lg:text-[2.5em] text-[1.5em]">Página no encontrada</p>
        <p className="hero-text lg:text-[1.5em] text-[.8em]">
          La página que está buscando no existe. Por favor, verifique la URL e intente nuevamente.
        </p>
      </div>
      <div className="mx-6 mb-8 flex flex-col items-center justify-center">
        <p className="lg:text-[1.5em] text-[1em] text-center font-light" style={{fontFamily: 'Poppins'}}>
          Aquí le dejamos nuestro contenido para que pueda ubicar lo que buscaba con más facilidad.
        </p>
      </div>
      <div className="mx-2 mb-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-md grid lg:grid-cols-1 text-center">
          {menuOptions.map((option, index) => (
            <div key={index}>
              {option.dropdown ? (
                option.children?.map((child, childIndex) => (
                  <Card className="px-2 py-3">
                    <NavLink
                      to={child.path}
                      className="text-blueprimary hover:underline"
                      key={childIndex}
                    >
                      {child.name}
                    </NavLink>
                  </Card>
                ))
              ) : (
                <Card className="px-2 py-3">
                  <NavLink
                    to={option.path}
                    className="text-blueprimary hover:underline"
                    key={index}
                  >
                    {option.name}
                  </NavLink>
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-6 mb-8 flex flex-col items-center justify-center">
        <p className="lg:text-[1em] text-[.7em] text-center font-light" style={{fontFamily: 'Poppins'}}>
          Si no encuentra lo que busca, no dude en contactarnos en cualquier metodo de contacto disponible aquí en nuestra web.
        </p>
      </div>
    </div>
  );
};
