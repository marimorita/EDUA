import React, { useContext } from 'react';
import { useLocation } from 'wouter';
import { StateContext } from '../../Context/Context';
import { ModalSuccess } from '../Modals/ModalSuccess';
import { IoSearchSharp } from 'react-icons/io5';
import { FaUser, FaBell } from 'react-icons/fa';
import { ToolTip, ToolTipDropdown, ToolTipButton } from './ToolTip';

export const ToolTipTeam = () => {
  const [, setLocation] = useLocation();
  const { viewSuccessModal, setViewSuccessModal } = useContext(StateContext)
  return (
    <>
      <ToolTip>
        <ToolTipDropdown Icon={FaUser} options={[
          { label: 'Ver mi perfil', action: () => setLocation('/profileTeam') },
          { label: 'Cerrar sesión', action: () => setViewSuccessModal(true) },
        ]} />
        <ToolTipButton Icon={FaBell} clickButton={() => setLocation('/notificationsTeam')} />
        <ToolTipButton Icon={IoSearchSharp} clickButton={() => setLocation('/searchTeam')} />
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