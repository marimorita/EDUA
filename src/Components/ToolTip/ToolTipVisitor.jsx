import React, { useContext } from 'react';
import { useLocation } from 'wouter';
import { StateContext } from '../../Context/Context';
import { ModalSuccess } from '../Modals/ModalSuccess';
import { FaUser, FaBell, FaMapMarkedAlt } from 'react-icons/fa';
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
        <ToolTipButton Icon={FaMapMarkedAlt} clickButton={() => setLocation('/historialVisitor')} />
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