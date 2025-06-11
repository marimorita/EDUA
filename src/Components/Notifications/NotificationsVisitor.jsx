import { FaBell } from 'react-icons/fa';
import { Notifications } from './Notifications.jsx';
import { axiosInstance } from '../../../axiosConfig.js';
import { ToolTipVisitor } from '../ToolTip/ToolTipVisitor.jsx';
import { FaMapMarkerAlt } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import React, { useEffect, useState } from 'react'

export const NotificationsVisitor = () => {
  const token = localStorage.getItem("token")
  const [dataConvert, setDataConvert] = useState([])
  const [dataNotifications, setDataNotifications] = useState([])
  const [dataNotificationsVisitor, setDataNotificationsVisitor] = useState(0)
  useEffect(() => {
    const getNotifications = async () => {
      try {
        const response = await axiosInstance.get('/notifications/notifications')
        setDataNotifications(response.data);
      } catch (error) {
        console.log(error)
        toast.error(error.response.data.error, {
          progressStyle: {
            backgroundColor: '#A91010',
          },
        });
      }
    }
    getNotifications()
  }, [])

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axiosInstance.get(`/visitor/visitor/${token}`)
        setDataNotificationsVisitor(response.data.id);
      }
      catch (error) {
        console.log(error)
        toast.error(error.response.data.error, {
          progressStyle: {
            backgroundColor: '#A91010',
          },
        });
      }
    }
    getUser()
  }, [])

  useEffect(() => {
    if (dataNotifications.length > 0 && dataNotificationsVisitor !== 0) {
      const infoCards = dataNotifications.filter(informationCards => informationCards.roleCC === dataNotificationsVisitor)
      setDataConvert(infoCards)
    }
  }, [dataNotifications, dataNotificationsVisitor])

  
  return (
    <>
      <div className="mb-10">
        <ToolTipVisitor />
        <Notifications obj={dataConvert} redirectPath="/docsVisitor" Icon={FaBell} redirectPathArrow={"/visitor"} />
      </div>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        pauseOnHover={false}
      />
    </>
  );
};

// export const HistorialVisitor = () => {
//   return (
//     <div>
//       <ToolTipVisitor />
//       <Notifications obj={historialData} redirectPath="/docsHistorialVisitor" Icon={FaMapMarkerAlt} redirectPathArrow={"/visitor"} />
//     </div>
//   );
// };