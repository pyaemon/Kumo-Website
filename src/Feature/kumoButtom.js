import React from 'react'


const KumoButton = (props) => {
    const { text } = props
    return (
        <button type="button" className="btn customeBtn" style={{
            boxShadow: '10px 10px 10px #00000029',
            border: '1px solid #4B74AD',
            borderRadius: '10px',
            opacity: 1,
            width: '300px',
            height: '50px',
            color: '#775ADA',
            font: 'normal normal normal 25px/33px Bodoni 72 Smallcaps',
            backgroundColor: '#FFFFFF',
            cursor: 'pointer',
            WebkitTransform: '0.4s', /* Safari */
            transitionDuration: '0.4s'
        }}> { text}</button >
        

    )
}

export default KumoButton