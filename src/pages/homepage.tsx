import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Homepage() {
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (caches) {
      caches.keys().then(async function (names) {
        if (names.length > 0) {
          setWarning(true);
        }
        setWarning(false);
      });
    }
  }, []);

  const reLoadPage = () => {
    caches.keys().then(async function (names) {
      if (names.length > 0) {
        await Promise.all(names.map((name) => caches.delete(name)));
        window.location.reload();
      }
    });
  };

  const [mockData, setMockData] = useState<any[] | undefined>(undefined);

  const getData = async () => {
    const data: any = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setMockData(data.data);
  };

  return (
    <div className="App">
      {warning ? (
        <div>
          <p>Hay una nueva version de la App</p>
          <button onClick={() => reLoadPage()}>Recargar la pagina</button>
        </div>
      ) : null}
      <div>
        <Link to="/madison">Nueva Pagina</Link>
        <button onClick={() => getData()}>Obtener Data</button>
      </div>
      <div>
        {mockData
          ? mockData.map((el: any) => {
              return (
                <div>
                  <p>{el.id}</p>
                  <p>{el.name}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Homepage;

/*
{warning ? (
          <div>
            <p>Hay una nueva version de la App</p>
            <button onClick={() => reLoadPage()}>Recargar la pagina</button>
          </div>
        ) : null}*/
