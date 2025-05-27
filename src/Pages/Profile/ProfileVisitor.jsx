import React from 'react'
import { Profile } from './Profile'
import { ToolTipVisitor } from '../../Components/ToolTip/ToolTipVisitor'

export const ProfileVisitor = () => {
    return (
        <>
            <ToolTipVisitor />
            <Profile redirectPath="/visitor" redirectPathModal="/profileVisitor" />
        </>
    )
};
