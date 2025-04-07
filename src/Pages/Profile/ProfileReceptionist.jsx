import React from 'react'
import { Profile } from './Profile'
import { ToolTipReceptionist } from '../../Components/ToolTip/ToolTipReceptionist'

export const ProfileReceptionist = () => {
    return (
        <>
            <ToolTipReceptionist />
            <Profile redirectPath="/Receptionist" redirectPathModal="/profileReceptionist"/>
        </>
    )
};
