import React from 'react'
import { Profile } from './Profile'
import { ToolTipTeam } from '../../Components/ToolTip/ToolTipTeam'

export const ProfileTeam = () => {
    return (
        <>
            <ToolTipTeam />
            <Profile redirectPath="/team" redirectPathModal="/profileTeam" />
        </>
    )
};
