import React, { useContext } from 'react';
import { useLocation } from 'wouter';
import { HiUserGroup } from 'react-icons/hi';
import { ModalSuccess } from '../Modals/ModalSuccess';
import { StateContext } from '../../Context/Context';
import { IoSearchSharp } from 'react-icons/io5';
import { FaUser, FaBell } from 'react-icons/fa';
import { ToolTip, ToolTipDropdown, ToolTipButton } from './ToolTip';

export const ToolTipDirector = () => {
    const [, setLocation] = useLocation();
    const { viewSuccessModal, setViewSuccessModal } = useContext(StateContext)
    return (
        <>
            <ToolTip>
                <ToolTipDropdown Icon={FaUser} options={[
                    { label: 'Ver mi perfil', action: () => setLocation('/profileDirector') },
                    { label: 'Mis tareas', action: () => setLocation('/dirTasks') },
                    { label: 'Cerrar sesión', action: () => setViewSuccessModal(true) },
                ]} />
                < ToolTipButton Icon={FaBell} clickButton={() => setLocation('/notificationsDirector')} />
                < ToolTipButton Icon={HiUserGroup} clickButton={() => setLocation('/teamTasks')} />
                < ToolTipButton Icon={IoSearchSharp} clickButton={() => setLocation('/searchDirector')} />
            </ToolTip >

            {viewSuccessModal && (
                <ModalSuccess
                    visibility={viewSuccessModal}
                    message="¡Felicidades! Tu cuenta ha sido cerrada con éxito."
                    redirectPath="/accessPanel"
                />
            )}
        </>
    );
};
