import { FaBell } from 'react-icons/fa';
import { Notifications } from './Notifications.jsx';
import { axiosInstance } from '../../../axiosConfig.js';
import { ToolTipDirector } from '../ToolTip/ToolTipDirector.jsx';
import { toast, ToastContainer } from 'react-toastify';
import React, { useEffect, useState } from 'react'

export const NotificationsDirector = () => {

  const [dataNotifications, setDataNotifications] = useState([])

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

  }, [setDataNotifications])


  return (
    <>
      <div className='mb-10'>
        <ToolTipDirector />
        <Notifications obj={dataNotifications} redirectPath="/docsDirector" redirectPathArrow={"/director"} Icon={FaBell} />
      </div>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        pauseOnHover={false}
      />

    </>
  );
};