import React from 'react';
import { useLocation } from 'wouter';
import { IoSearchSharp } from 'react-icons/io5';
import { FaUser, FaBell } from 'react-icons/fa';
import { ToolTip, ToolTipDropdown, ToolTipButton } from './ToolTip';

export const ToolTipTeam = () => {
  const [, setLocation] = useLocation();
  return (
    <ToolTip>
      <ToolTipDropdown Icon={FaUser} options={[
        { label: 'Ver mi perfil', action: () => setLocation('/profileTeam') },
        { label: 'Cerrar sesión', action: () => console.log('Cerrar sesión') }
      ]} />
      <ToolTipButton Icon={FaBell} clickButton={() => setLocation('/notificationsTeam')} />
      <ToolTipButton Icon={IoSearchSharp} clickButton={() => setLocation('/search')} />
    </ToolTip>
  );
};