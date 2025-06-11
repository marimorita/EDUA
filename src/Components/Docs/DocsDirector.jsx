import { Docs } from './Docs';
import { toast, ToastContainer } from 'react-toastify';
import { FaBell } from 'react-icons/fa6';
import { ModalConfirm } from '../../Components/Modals/ModalConfirm';
import { StateContext } from '../../Context/Context';
import { axiosInstance } from '../../../axiosConfig';
import { ToolTipDirector } from '../ToolTip/ToolTipDirector';
import React, { useContext } from 'react'
import { useEffect, useRef, useState } from 'react';

export const DocsDirector = () => {
    const role = useRef(0)
    const [dataUser, setDataUser] = useState([])
    const idCard = localStorage.getItem("idCard")
    const [selectText, setSelectText] = useState();
    const [selectValue, setSelectValue] = useState()
    const [dataUserVisitor, setDataUserVisitor] = useState([])
    const [dataNotifications, setDataNotifications] = useState([])
    const { viewConfirmModal, setViewConfirmModal } = useContext(StateContext)

    const getSelectValue = (e) => {
        const selectedIndex = e.target.selectedIndex
        const selectedText = e.target.options[selectedIndex];
        setSelectValue(e.target.value);
        setSelectText(selectedText.text)
    }

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

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axiosInstance.get(`/memberTeam/memberTeam`)
                setDataUser(response.data);
            } catch (error) {
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
        const getUser = async () => {
            try {
                const response = await axiosInstance.get(`/visitor/visitor`)
                setDataUserVisitor(response.data);
            } catch (error) {
                toast.error(error.response.data.error, {
                    progressStyle: {
                        backgroundColor: '#A91010',
                    },
                });
            }
        }
        getUser()

    }, []);

    const activateFunction = () => {
    }

    const updateNotification = async () => {
        const idCC = {
            id: idCard,
            roleCC: selectValue,
        }
        try {
            const response = await axiosInstance.post('/notifications/update/roleCC', idCC)
            if (response.status === 200 || response.status === 201) {
                setViewConfirmModal(false)
                toast.success(`Se ha enviado exitosamente a: ${selectText}`, {
                    autoClose: 2000,
                    pauseOnHover: false,
                    progressStyle: {
                        background: '#59595d'
                    },
                })
            }
        } catch (error) {
            console.log(error);
            console.log(error.response.data.error);
        }
    }

    return (
        <>
            <ToolTipDirector />
            <Docs redirectPathBack="/notificationsDirector" tittle={dataNotifications.tittle} text={dataNotifications.text} Icon={FaBell} />
            <div className="bg-[#efefef] w-[90%] h-[90%] flex justify-center items-center mx-14 mt-10 border rounded-xl flex-col mb-10 p-6">
                <img src={dataNotifications.img} alt="DriveCapReceptionist" />
            </div>
            <div className='flex justify-center mb-[20px]'>
                <h1 className='font-semibold text-[1.5rem]'>Enviar a:</h1>
            </div>

            <div className=" flex justify-center gap-[10rem] px-20 mb-[3rem]">
                <div className="w-[50%] flex flex-col items-center gap-y-4">
                    <select
                        onChange={getSelectValue}
                        className="focus:text-black bg-white p-2 rounded w-[100%] border border-gray-300 h-18 font-semibold text-[#9ca3af]">
                        <option value="" disabled selected>Miembro del equipo</option>
                        {dataUser.map(data => (
                            <option value={data.id} className="text-black">{data.name}</option>
                        ))
                        }
                    </select>
                </div>
                <div className="w-[50%] flex flex-col items-center gap-y-4">
                    <select
                        onChange={getSelectValue}
                        className="focus:text-black bg-white p-2 rounded w-[100%] border border-gray-300 h-18 font-semibold text-[#9ca3af]">
                        <option value="" disabled selected>Area de visita</option>
                        {dataUserVisitor.map(data => (
                            <option value={data.id} className="text-black">{data.name}</option>))}
                    </select>
                </div>
            </div>
            <div className='flex justify-center items-center mb-8 bg-blue'>
                <button className='bg-[#d9d9d9] p-[10px] px-12 font-semibold rounded-md  text-[1.3rem] hover:text-white hover:scale-105 hover:shadow-lg transition duration-300 hover:bg-black ' onClick={() => setViewConfirmModal(true)}>Enviar</button>
            </div>
            <ModalConfirm
                visibility={viewConfirmModal}
                handleButtonClickConfirm={updateNotification}
                message={`¿Confirmas enviar esta captura drive a: ${selectText}?`}
                redirectPath="/login" />
            <ToastContainer
                position='top-center'
                autoClose={2000}
            />
        </>
    )
}

export const DocsMember = () => {
    return (
        <>
            <ToolTipDirector />
            <Docs redirectPathBack="/memberTasks" tittle="Faltan un día para que se cumpla el plazo de la visita a la solicitud N°1864 y no se ha dado respuesta" text="Jose guto te ha cargado una visita a la una solicitud N°84321 el día 12/02/2025" Icon={FaBell} />
        </>
    )
}

export const DocsMyDirector = () => {
    return (
        <>
            <ToolTipDirector />
            <Docs redirectPathBack="/director" tittle="Tiene la solictud N°123 desde el día 11/02/2025" Icon={FaBell} />
        </>
    )
}  