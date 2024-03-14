import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import { ModeToggle } from "../components/ToggleDarkMode";
import logo from "../assets/logo2.png";
import { IconChevronDown, IconChevronRight, IconMenu2 } from "@tabler/icons-react";
import { Card } from "../components/ui/card";
// import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { ScrollToTopButton } from "../components/ScrollToTopButton";

export const menuOptions = [
  {
    path: "/",
    name: "Inicio",
    dropdown: false,
  },
  {
    path: "",
    name: "¿Cómo lo instalo?",
    icon: <IconChevronDown/>,
    dropdown: true,
    children: [
      { path: "/instalar-android", 
        name: "Instalar AeonTV (FireTV o AndroidTV)",
      },
      { path: "/instalar-windows", 
        name: "Instalar AeonTV (Windows)",
      },
      { path: "/instalar-mac", 
        name: "Instalar AeonTV (Mac)",
      },
      { path: "/instalar-ios", 
        name: "Instalar AeonTV (iOS/iPhone/iPad)",
      },
      { path: "/instalar-smarttv-ssiptv", 
        name: "Instalar AeonTV (SmartTV con SSIPTV)",
      },
      { path: "/instalar-smarttv-smartiptv", 
        name: "Instalar AeonTV (SmartTV con SmartIPTV)",
      },
    ],
  },
  {
    path: "/canales",
    name: "Canales",
    dropdown: false,
  },
  {
    path: "/peliculas",
    name: "Peliculas",
    dropdown: false,
  },
  {
    path: "/series",
    name: "Series",
    dropdown: false,
  },
  {
    path: "/infraestructura",
    name: "¿Quiere tener su Propio Servicio IPTV?",
    dropdown: false,
  },
  {
    path: "/canales-restream",
    name: "Canales Re-Stream",
    dropdown: false,
  },
];

export const DashboardLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  const [isHover, setIsHover] = useState(false); 

  const [isHoverResponsive, setIsHoverResposive] = useState(false); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsHover(false);
  };

  const toggleSubMenu = () => {
    setIsHover(!isHover);
  };

  const toggleSubMenuResposive = () => {
    setIsHoverResposive(!isHoverResponsive);
  };

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return `text-md font-medium transition-colors hover:text-primary capitalize focus:outline-none ${!isActive ? "text-muted-foreground" : ""}`;
  };

  return (
    <>
      <div className="border-b">
        <div
          className={`flex flex-row ${isMobileMenuOpen ? "border-b-2" : ""} h-28 items-center justify-center px-4 lg:space-x-6`}
        >
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <a href="/">
              <img className="w-40" src={logo} alt="Logo" />
            </a>
            {/* Menú Normal */}
            <div className="hidden lg:flex lg:space-x-4 md:space-x-3 md:text-sm xl:space-x-6 2xl:space-x-10">
              {menuOptions.map((option, index) => (
                <div key={index} style={{fontFamily: 'Poppins'}}>
                  {option.dropdown ? (
                    <div className="relative group" onMouseEnter={toggleSubMenu}>
                      <div className="flex flex-row text-muted-foreground hover:text-primary">
                        <button
                          onClick={closeMobileMenu}
                          className={getNavLinkClass({ isActive: true })}
                        >
                          {option.name}
                        </button>
                        {option.icon}
                      </div>
                      <div
                        className={`${
                          isHover ? "block" : "hidden"
                        } absolute w-96 left-0 mt-2 space-y-2 origin-top-right bg-slate-100 dark:bg-gray-600 z-50 shadow-lg rounded-lg group-hover:block hover`}
                      >
                        {option.children?.map((child, index) => (
                          <NavLink
                            to={child.path}
                            className="w-full block px-6 py-2 text-md text-black dark:text-white font-light text-primary capitalize transition-colors hover:text-muted-foreground dark:hover:text-muted-foreground"
                            key={index}
                            style={{fontFamily: 'Poppins'}}
                          >
                            {child.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={option.path}
                      className={getNavLinkClass}
                      key={index}
                    >
                      {option.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <ModeToggle />
          </div>
          <div className="lg:hidden ml-auto flex items-center space-x-4">
            <button className="lg:hidden" onClick={toggleMobileMenu}>
              <Card className="p-1">
                <IconMenu2 size={28} />
              </Card>
            </button>
          </div>
        </div>
        {/* Menú Responsive */}
        {isMobileMenuOpen && (
          <div className="fixed lg:hidden top-0 right-0 h-full w-80 bg-gray-600 z-50 shadow-lg">
            <div className="py-2 space-y-2 border-b-2 border-primary-foreground text-sm">
              <div className="flex flex-col items-center py-4">
                <a href="/">
                  <img className="w-16" src={logo} alt="Logo" />
                </a>
              </div>
              {menuOptions.map((option, index) => (
                <div key={index} style={{fontFamily: 'Poppins'}}>
                {option.dropdown ? (
                  <div className="relative group" onClick={toggleSubMenuResposive}>
                    <div className="flex flex-row space-x-2 text-muted-foreground hover:text-primary">
                      <button
                        onClick={closeMobileMenu}
                        className={getNavLinkClass({ isActive: true })}
                      >
                        <div className="pl-4">
                          {option.name}
                        </div>
                      </button>
                      {isHoverResponsive ? option.icon : <IconChevronRight/>}
                    </div>
                    <div
                      className={`${
                        isHoverResponsive ? "block" : "hidden"
                      } w-full left-0 mt-2 space-y-1 origin-top-right`}
                    >
                      {option.children?.map((child, index) => (
                        <NavLink
                          to={child.path}
                          className="w-full block pl-8 py-2 text-sm font-light text-primary capitalize transition-colors hover:text-muted-foreground dark:hover:text-muted-foreground"
                          key={index}
                          style={{fontFamily: 'Poppins'}}
                        >
                          {child.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={option.path}
                    className={getNavLinkClass}
                    key={index}
                  >
                    <div className="pl-4">
                      {option.name}
                    </div>
                  </NavLink>
                )}
                {/* Divisor entre cada elemento padre del menu */}
                {index < menuOptions.length - 1 && (
                  <hr className="border-[.5px] w-[100%] border-primary-foreground my-2"></hr>
                )}
              </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <main className="" onClick={closeMobileMenu}>
        {children}
        {/* <FloatingWhatsApp
            phoneNumber='+5218125949904'
            accountName='AeonTV'
            statusMessage='Normalmente responde en algunos segundos'
            chatMessage="Hola, Tenemos promociones para ti, pregunta aquí 👇🏻"
            placeholder='Escribe un mensaje...'
            chatboxStyle={{color: 'black'}}
            avatar={logo}
          /> */}
        <ScrollToTopButton />
      </main>
    </>
  );
};