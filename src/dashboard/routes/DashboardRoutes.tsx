import { Route, Routes } from "react-router-dom";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import { InicioPage } from "../pages/InicioPage";
import { CanalesPage } from "../pages/CanalesPage";
import { PeliculasPage } from "../pages/PeliculasPage";
import { SeriesPage } from "../pages/SeriesPage"; 
import { InfraestructuraPage } from "../pages/InfraestructuraPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { CanalesRestreamPage } from "../pages/CanalesRestreamPage";
import { RokuPage } from "../pages/ComoLoInstalo/Roku";
import { AndroidPage } from "../pages/ComoLoInstalo/Android";
import { WindowsPage } from "../pages/ComoLoInstalo/Windows";
import { MacPage } from "../pages/ComoLoInstalo/Mac";
import { IPhonePage } from "../pages/ComoLoInstalo/iOS";
import { SsiptvPage } from "../pages/ComoLoInstalo/Ssiptv";
import { SmartIptvPage } from "../pages/ComoLoInstalo/SmartIptv";

export const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/canales" element={<CanalesPage/>} />
        <Route path="/peliculas" element={<PeliculasPage/>} />
        <Route path="/series" element={<SeriesPage/>} />
        <Route path="/infraestructura" element={<InfraestructuraPage/>} />
        <Route path="/canales-restream" element={<CanalesRestreamPage/>} />
        <Route path="/instalar-roku" element={<RokuPage/>} />
        <Route path="/instalar-android" element={<AndroidPage/>} />
        <Route path="/instalar-windows" element={<WindowsPage/>} />
        <Route path="/instalar-mac" element={<MacPage/>} />
        <Route path="/instalar-ios" element={<IPhonePage/>} />
        <Route path="/instalar-smarttv-ssiptv" element={<SsiptvPage/>} />
        <Route path="/instalar-smarttv-smartiptv" element={<SmartIptvPage/>} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </DashboardLayout>
  );
};
