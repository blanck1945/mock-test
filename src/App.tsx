import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const [mockData, setMockData] = useState<any[] | undefined>(undefined);

  const getData = async () => {
    const data: any = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setMockData(data.data);
  };

  console.warn(caches);

  return (
    <div className="App">
      <div>
        <Link to="/brasil">Nueva Pagina</Link>
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

export default App;
