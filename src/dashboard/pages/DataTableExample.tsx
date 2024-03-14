import { useState, useEffect } from "react";
import axios from "axios"; 
import { Item, columnsCanales, columnsMovies, columnsSeries } from "../../components/ItemColumns";
import { DataTable } from "../../components/data-table";

export const DataTableExample = ({ type, categoria }: { type:string, categoria: string }) => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const apiUrl = `https://spacetv-api.axol.dev/cuenta_api/${type}/${categoria}/`;

    axios.get(apiUrl)
      .then((response) => {
        setData(response.data.data.results); 
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  let columnsToUse; 

  if (type === 'peliculas') {
    columnsToUse = columnsMovies; 
  } else if (type === 'series') {
    columnsToUse = columnsSeries; 
  } else {
    columnsToUse = columnsCanales; 
  }

  return (
    <div className={"container mx-auto py-5"}>
      <DataTable columns={columnsToUse} data={data} />
    </div>
  );
};
