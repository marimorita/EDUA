import { useLocation } from 'wouter';
import { StateContext } from '../../Context/Context';
import { ModalSuccess } from '../Modals/ModalSuccess';
import { IoSearchSharp } from 'react-icons/io5';
import { FaUser, FaBell } from 'react-icons/fa';
import React, { useContext } from 'react';
import { ToolTip, ToolTipDropdown, ToolTipButton } from './ToolTip';

export const ToolTipVisitor = () => {
  const [, setLocation] = useLocation();
  const { viewSuccessModal, setViewSuccessModal } = useContext(StateContext)
  return (
    <>
      <ToolTip>
        <ToolTipDropdown Icon={FaUser} options={[
          { label: 'Ver mi perfil', action: () => setLocation('/profileVisitor') },
          { label: 'Cerrar sesión', action: () => setViewSuccessModal(true) },
        ]} />
        <ToolTipButton Icon={FaBell} clickButton={() => setLocation('/notificationsVisitor')} />
        <ToolTipButton Icon={IoSearchSharp} clickButton={() => setLocation('/searchVisitor')} />
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