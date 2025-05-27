import { useLocation } from 'wouter';
import React, { useContext } from 'react';
import { BiSolidImageAdd } from "react-icons/bi";
import { FaUser, FaHistory } from 'react-icons/fa';
import { StateContext } from '../../Context/Context';
import { ModalSuccess } from '../Modals/ModalSuccess';
import { ToolTip, ToolTipDropdown, ToolTipButton } from './ToolTip';

export const ToolTipReceptionist = () => {
    const [, setLocation] = useLocation();
    const { viewSuccessModal, setViewSuccessModal } = useContext(StateContext)
    return (
        <>
            <ToolTip>
                <ToolTipDropdown Icon={FaUser} options={[
                    { label: 'Ver mi perfil', action: () => setLocation('/profileReceptionist') },
                    { label: 'Cerrar sesión', action: () => setViewSuccessModal(true) },
                ]} />
                <ToolTipButton Icon={BiSolidImageAdd} clickButton={() => setLocation('/pdf')} />
                <ToolTipButton Icon={FaHistory} clickButton={() => setLocation('/notificationsReceptionist')} />
            </ToolTip>

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