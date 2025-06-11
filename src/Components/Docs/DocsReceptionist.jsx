import { Docs } from './Docs';
import { toast } from 'react-toastify';
import { FaHistory } from 'react-icons/fa';
import { axiosInstance } from '../../../axiosConfig';
import { ToolTipReceptionist } from '../../Components/ToolTip/ToolTipReceptionist';
import { useEffect, useState, useContext } from 'react';

export const DocsReceptionist = () => {
  const [dataNotifications, setDataNotifications] = useState([])
  const idCard = localStorage.getItem("idCard")
  
  useEffect(() => {
    const getNotifications = async () => {
      try {
        const response = await axiosInstance.get(`/historial/historial/${idCard}`)
        setDataNotifications(response.data);
      } catch (error) {
        toast.error(error.response.data.error, {
          progressStyle: {
            backgroundColor: '#A91010',
          },
        });
      }
    }
    getNotifications()

  }, [setDataNotifications])

  return (
    <>
      <ToolTipReceptionist />
      <Docs redirectPathBack="/notificationsReceptionist" tittle={dataNotifications.tittle} text={dataNotifications.text} Icon={FaHistory} />
      <div className="bg-[#efefef] w-[90%] h-[90%] flex justify-center items-center mx-14 mt-10 border rounded-xl flex-col mb-10 p-6">
        <img src={dataNotifications.img} alt="DriveCapReceptionist" />
      </div>
    </>
  )
}