import React, { useState, useEffect } from 'react';
import './Shows.scss';

const Shows = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://radionopal-cms.herokuapp.com/programas')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.error('Oh no, error occured: ', err);
      });
  }, []);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {data.map((item, key) => {
        return (
          <div key={key} className="Show">
            <h1 className="Show__title text-4xl">{item.nombre}</h1>
            <span className="Show__host">Por: {item.host}</span>
            <h2 className="Show__description text-gray-400">{item.descripcion}</h2>
            <img src={item.imagen[0].url} alt={item.descripcion} />
          </div>
        );
      })}
    </div>
  );
};

export default Shows;
