import { useState, useEffect } from "react";
import axios from "axios"; 
import { Card } from "../../components/ui/card"
import { Footer } from "../../components/pages/Footer";
import { DataTableExample } from "./DataTableExample"
import { HeroPages } from "../../components/pages/HeroPages";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

export type Category = {
  id: string;
  category_type: string;
  category_name: string;
  parent_id: string;
  cat_order: string;
}

export type CategoryList = {
    data: Category[];
}

export const SeriesPage = () => {

  const [data, setData] = useState<Category[]>([]);
  const [count, setCount] = useState(1000);

  useEffect(() => {
    const apiUrl = `https://spacetv-api.axol.dev/cuenta_api/categorias/series/`;

    axios.get(apiUrl)
      .then((response) => {
        setData(response.data.data.categories); 
        setCount(response.data.data.allCount);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  const categories = data;

  return (
    <div className="flex-col md:flex">
      <div className="relative w-full bg-black h-[220px]">
        <HeroPages title="Series"/>
        <div className="relative flex-1 space-y-4 px-6 sm:px-16 md:px-24 lg:px-32 mt-12">
          <div className='py-12'>
            <h1 className='mb-6 text-5xl text-center font-extralight'>
              <em>¡Contamos con <b>{count}</b> capítulos y contando!</em>
            </h1>
            <h1 className='mb-6 text-3xl text-center font-extralight'>
              <em>
                Los mejores títulos y estrenos 
              </em>
            </h1>
            <h1 className='mb-6 text-2xl text-center font-extralight'>
            ¡Añadimos nuevos títulos TODOS los días!
            </h1>
            <h1 className='mb-12 text-xl text-center'>
             <em className='font-extralight'>El contenido puede variar a la fecha de la visualización de esta lista, el contenido de canales puede cambiar sin previo aviso.</em>
            </h1>
            <div className='mt-16 2xl:px-24'>
              <Card className='shadow-2xl rounded-none border-2 xl:p-6'>
                <Tabs defaultValue="48" className="w-[100%]">
                  <TabsList className="mx-8 mt-6 grid gap-2 md:grid-cols-2 xl:grid-cols-4 h-[100%] p-3 shadow-lg">
                    {
                      categories.map((categoria, index) => (
                        <TabsTrigger 
                          value={categoria.id}
                          key={index}
                        >
                            {categoria.category_name}
                        </TabsTrigger>
                      ))
                    }
                  
                  </TabsList>
                    {
                      categories.map((categoria, index) => (
                        <TabsContent 
                          value={categoria.id}
                          key={index}
                        >
                          <DataTableExample type="series" categoria={categoria.id}/>
                        </TabsContent>
                      ))
                    }
                </Tabs>
              </Card>
            </div>
          </div>  
        </div>
        <Footer/>
      </div>
    </div>
  )
}
