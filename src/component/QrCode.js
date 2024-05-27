import React from 'react';
import image from '../images/image.png'
import  './QrCode.css'


function QrCode  ()  {
     return(
        <div className='qr-code-bloc'>
            <img 
               src= {image}
               alt='qr-code-image'
            />
            <div>
                <h1>Improve your front-end skills by building projects</h1>

                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
     )
}

export default QrCode