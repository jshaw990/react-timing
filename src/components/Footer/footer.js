import React from 'react';

import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='credit'>
                Created by <a href='https://github.com/jshaw990/'>Jayden Shaw</a>
            </div>
            <div className='disclaimer'>
                Please note, due to use of a free API, some results are inacurrate.
            </div>
        </div>
    )
}

export default Footer;