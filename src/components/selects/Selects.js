import React from 'react'
import './SelectsStyles.css'

import img8 from '../../assets/8.jpg'
import img9 from '../../assets/9.jpg'
import img10 from '../../assets/10.jpg'
import img11 from '../../assets/11.jpg'
import img12 from '../../assets/12.jpg'
import img13 from '../../assets/13.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={img8} text='Temples' />
                <SelectsImg bgImg={img9} text='Hills' />
                <SelectsImg bgImg={img10} text='Beaches' />
                <SelectsImg bgImg={img11} text='Forest' />
                <SelectsImg bgImg={img12} text='Resorts' />
                <SelectsImg bgImg={img13} text='ThemePark' />
            </div>

        </div>
    )
}

export default Selects
