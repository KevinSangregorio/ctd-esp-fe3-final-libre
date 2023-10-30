/* Dependencies */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

/* Others */
import { getDentistByID } from '../utils/services';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
  const [dentistInfo, setDentistInfo] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    getDentistByID(id).then((dentist) => setDentistInfo(dentist));
  }, [id])

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  console.log("idFromDetail", id);
  console.log("dentistInfo", dentistInfo);
  return (
    <>
      <h1>Detail Dentist {dentistInfo?.id}</h1>
      <div className='detail__container'>
        <p>Name: {dentistInfo?.name}</p>
        <p>Email: {dentistInfo?.email}</p>
        <p>Phone: {dentistInfo?.phone}</p>
        <p>Website: {dentistInfo?.website}</p>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail