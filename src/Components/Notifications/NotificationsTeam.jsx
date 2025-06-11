import { FaBell } from 'react-icons/fa';
import { ToolTipTeam } from '../ToolTip/ToolTipTeam';
import { axiosInstance } from '../../../axiosConfig.js';
import { Notifications } from './Notifications';
import { toast, ToastContainer } from 'react-toastify';
import React, { useEffect, useState } from 'react'

export const NotificationsTeam = () => {
    const token = localStorage.getItem("token")
    const [dataConvert, setDataConvert] = useState([])
    const [dataNotifications, setDataNotifications] = useState([])
    const [dataNotificationsMemberTeam, setDataNotificationsMemberTeam] = useState(0)
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
                setDataNotificationsMemberTeam(response.data.id);

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
        if (dataNotifications.length > 0 && dataNotificationsMemberTeam !== 0) {
            const infoCards = dataNotifications.filter(informationCards => informationCards.roleCC === dataNotificationsMemberTeam)
            setDataConvert(infoCards)
        }
    }, [dataNotifications, dataNotificationsMemberTeam])

    useEffect(() => {
        console.log(dataConvert)
        console.log(dataNotificationsMemberTeam);
    })

    return (
        <>
            <div className="mb-10">
                <ToolTipTeam />
                <Notifications obj={dataConvert} redirectPath="/docsTeam" Icon={FaBell} redirectPathArrow={"/Team"} />
            </div>
            <ToastContainer
                position='top-center'
                autoClose={2000}
                pauseOnHover={false}
            />
        </>
    );
};