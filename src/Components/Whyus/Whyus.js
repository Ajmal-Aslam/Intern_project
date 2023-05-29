import React from 'react'
import backs from '../../Assets/gifygym.gif';
import tick from '../../Assets/crctick.png';
import './Whyus.css';
import trainers_data from './Whyustrainers.js'
import brand1 from '../../Assets/brand1.png';
import brand2 from '../../Assets/brand2.png'
import brand3 from '../../Assets/brand3.png'


function Whyus() {
    return (
        <> <img className='back' src={backs} alt="" />
            <div className='figures '>
                <div className='contents '>
                    <div>
                        <h1 className='countnumber'>+140</h1>
                        <p className='paragraph'>Expert Coaches</p>
                    </div>

                    <div>
                        <h1 className='countnumber'>+975</h1>
                        <p className='paragraph'>Members Joined</p>
                    </div>

                    <div>
                        <h1 className='countnumber'>+200</h1>
                        <p className='paragraph'>Fitness Programs</p>
                    </div>

                </div>


            </div>
            <div className='Right'>
                <div className='right_reason'>
                    <span className='ABC'>Some Reasons</span>
                    <div>
                        <span className='text'>Why </span>
                        <span> Choose us</span>
                    </div>
                    <div className='reasons'>
                        <div className='reasons_data'>
                            <img className='imagess' src={tick} alt='/' />
                            <span>OVER 100+ EXPERT COACHES</span>
                        </div>
                        <div className='reasons_data'>
                            <img className='imagess' src={tick} alt='/' />
                            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                        </div>
                        <div className='reasons_data'>
                            <img className='imagess' src={tick} alt='/' />
                            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                        </div>
                        <div className='reasons_data'>
                            <img className='imagess' src={tick} alt='/' />
                            <span>RELIABLE PARTNERS</span>
                        </div>
                        <div className='reasons_data'>
                            <img className='imagess' src={tick} alt='/' />
                            <span>PEACEFULL ATMOSPHERIC ENVIRONMENT</span>
                        </div>
                    </div>
                </div>
                <div className='partner'>
                    <span className='ABC'>OUR PARTNERS</span>
                    <div className='partners'>
                        <img className='brand' src={brand1} alt='/' />
                        <img className='brand' src={brand2} alt='/' />
                        <img className='brand' src={brand3} alt='/' />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Whyus
