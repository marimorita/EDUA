import React from 'react';
import { useLocation } from 'wouter';
import { HiUserGroup } from 'react-icons/hi';
import { IoSearchSharp } from 'react-icons/io5';
import { FaUser, FaBell } from 'react-icons/fa';
import { ToolTip, ToolTipDropdown, ToolTipButton } from './ToolTip';

export const ToolTipDirector = () => {
    const [, setLocation] = useLocation();
    return (
        <ToolTip>
            <ToolTipDropdown Icon={FaUser} options={[
                { label: 'Ver mi perfil', action: () => setLocation('/profile') },
                { label: 'Mis tareas', action: () => setLocation('/dirTasks') },
                { label: 'Cerrar sesión', action: () => console.log('Cerrar sesión') }
            ]} />
            <ToolTipButton Icon={FaBell} clickButton={() => setLocation('/notifications')} />
            <ToolTipButton Icon={HiUserGroup} clickButton={() => setLocation('/teamTasks')} />
            <ToolTipButton Icon={IoSearchSharp} clickButton={() => setLocation('/search')} />
        </ToolTip>
    )
}
