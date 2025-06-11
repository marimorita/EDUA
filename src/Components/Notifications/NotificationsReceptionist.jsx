import React, { useEffect, useState } from 'react'
import { FaHistory } from 'react-icons/fa';
import { Notifications } from './Notifications.jsx';
import { axiosInstance } from '../../../axiosConfig.js';
import { ToolTipReceptionist } from '../ToolTip/ToolTipReceptionist.jsx';
import { toast, ToastContainer } from 'react-toastify';

export const NotificationsReceptionist = () => {

  const [dataNotifications, setDataNotifications] = useState([])

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const response = await axiosInstance.get('/historial/historial')
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
    
  },[setDataNotifications])
  
  return (
    <>
      <div className='mb-10'>
        <ToolTipReceptionist />
        <Notifications obj={dataNotifications} redirectPath="/docsReceptionist" Icon={FaHistory} redirectPathArrow={"/receptionist"} />
      </div>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        pauseOnHover={false}
      />
    </>
  );
};