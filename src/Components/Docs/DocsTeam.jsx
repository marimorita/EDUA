import { Docs } from './Docs';
import { FaBell } from 'react-icons/fa';
import { ToolTipTeam } from '../../Components/ToolTip/ToolTipTeam';
import { axiosInstance } from '../../../axiosConfig';
import React, { useState, useEffect } from 'react';

export const DocsTeam = () => {
  const idCard = localStorage.getItem("idCard")
  const [dataNotifications, setDataNotifications] = useState([])
  useEffect(() => {
    const getNotifications = async () => {
      try {
        const response = await axiosInstance.get(`/notifications/notifications/${idCard}`)
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
      <ToolTipTeam />
      <Docs redirectPathBack="/notificationsTeam" tittle={dataNotifications.tittle} text={dataNotifications.text} Icon={FaBell} />
      <div className="bg-[#efefef] w-[90%] h-[90%] flex justify-center items-center mx-14 mt-10 border rounded-xl flex-col mb-10 p-6">
        <img src={dataNotifications.img} alt="DriveCapReceptionist" />
      </div>
    </>
  )
}