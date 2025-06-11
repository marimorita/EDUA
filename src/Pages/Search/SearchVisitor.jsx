import React, {useState,useEffect } from 'react'
import { Search } from './Search'
import { ToolTipVisitor } from '../../Components/ToolTip/ToolTipVisitor'
import { axiosInstance } from '../../../axiosConfig'
import { FaBell } from 'react-icons/fa';

export const SearchVisitor = () => {
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
      <ToolTipVisitor />
      <Search obj={dataConvert} Icon={FaBell} redirectPath={'/visitor'} />
    </>
  )
}