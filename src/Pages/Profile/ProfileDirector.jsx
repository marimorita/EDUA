import React from 'react'
import { Profile } from './Profile'
import { ToolTipDirector } from '../../Components/ToolTip/ToolTipDirector'

export const ProfileDirector = () => {
    return (
        <>
            <ToolTipDirector />
            <Profile redirectPath="/director" redirectPathModal="/profileDirector" />
        </>
    )
};
