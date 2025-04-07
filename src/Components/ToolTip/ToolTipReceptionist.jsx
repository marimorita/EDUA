import React from 'react';
import { FaFilePdf } from "react-icons/fa6";
import { useLocation } from 'wouter';
import { FaUser, FaHistory } from 'react-icons/fa';
import { ToolTip, ToolTipDropdown, ToolTipButton } from './ToolTip';

export const ToolTipReceptionist = () => {
    const [, setLocation] = useLocation();
    return (
        <ToolTip>
            <ToolTipDropdown Icon={FaUser} options={[
                { label: 'Ver mi perfil', action: () => setLocation('/profileReceptionist') },
                { label: 'Cerrar sesión', action: () => console.log('Cerrar sesión') }
            ]} />
            <ToolTipButton Icon={FaFilePdf} clickButton={() => setLocation('/pdf')} />
            <ToolTipButton Icon={FaHistory} clickButton={() => setLocation('/notificationsReceptionist')} />
        </ToolTip>
    );
};