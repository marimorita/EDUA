import React from 'react';
import { useLocation } from 'wouter';
import { FaUser, FaBell, FaMapMarkedAlt } from 'react-icons/fa';
import { ToolTip, ToolTipDropdown, ToolTipButton } from './ToolTip';

export const ToolTipVisitor = () => {
  const [, setLocation] = useLocation();
  return (
    <ToolTip>
      <ToolTipDropdown Icon={FaUser} options={[
        { label: 'Ver mi perfil', action: () => setLocation('/profileTeam') },
        { label: 'Cerrar sesión', action: () => console.log('Cerrar sesión') }
      ]} />
      <ToolTipButton Icon={FaBell} clickButton={() => setLocation('/notificationsVisitor')} />
      <ToolTipButton Icon={FaMapMarkedAlt} clickButton={() => setLocation('/historialVisitor')} />
    </ToolTip>
  );
};
