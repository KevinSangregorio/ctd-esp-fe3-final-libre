/* Dependencies */
import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';

/* Others */
import { ContextGlobal } from "../Components/utils/global.context";
import { getDentistByID } from '../utils/services';

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const [dentistInfo, setDentistInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getDentistByID(id).then((dentist) => setDentistInfo(dentist));
  }, [id])

  return (
    <>
      <h1>Detail Dentist {dentistInfo?.id}</h1>
      <div className={`detail__container ${state.theme}`}>
        <p>Name: {dentistInfo?.name}</p>
        <p>Email: {dentistInfo?.email}</p>
        <p>Phone: {dentistInfo?.phone}</p>
        <p>Website: {dentistInfo?.website}</p>
      </div>
    </>
  )
}

export default Detail