import React from 'react'

export const PdfViewer = ({ fileUrl }) => {
    return (
        <div className='w-full h-full'>
            {fileUrl && (
                <div className='mt-4 h-full w-full'>
                    <img src={fileUrl} alt="" />
                </div>
            )}
        </div>
    )
};