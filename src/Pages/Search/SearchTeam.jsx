import { FaBell } from 'react-icons/fa';
import { Search } from './Search'
import { ToolTipTeam } from '../../Components/ToolTip/ToolTipTeam'
import { axiosInstance } from '../../../axiosConfig'
import {useState, useEffect } from 'react'

export const SearchTeam = () => {
  const token = localStorage.getItem("token")
  const [dataConvert, setDataConvert] = useState([])
  const [dataNotifications, setDataNotifications] = useState([])
  const [dataNotificationsTeam, setDataNotificationsTeam] = useState(0)
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
        const response = await axiosInstance.get(`/memberTeam/memberTeam/${token}`)
        setDataNotificationsTeam(response.data.id);
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
    if (dataNotifications.length > 0 && dataNotificationsTeam !== 0) {
      const infoCards = dataNotifications.filter(informationCards => informationCards.roleCC === dataNotificationsTeam)
      setDataConvert(infoCards)
    }
  }, [dataNotifications, dataNotificationsTeam])

  return (
    <>
      <ToolTipTeam />
      <Search obj={dataConvert} Icon={FaBell} redirectPath={'/team'} />
    </>
  )
}