import React from 'react';
import './Program.css';
import timetable from '../../Assets/timetables.png';
import back from '../../Assets/back.png';
import ex1 from '../../Assets/ex1.png'
import ex2 from '../../Assets/ex2.png'
import ex3 from '../../Assets/ex3.png'
import ex4 from '../../Assets/ex4.png'



function Program() {
    return (
        <div className='back'> <img className='back' src={back} alt="" />
            <div className='Programs' id='programs'>

                <div className='programs_header'>
                    <span className='text'>EXPLORE OUR</span>
                    <span className='text2'>PROGRAMS</span>
                    <span className='text'>TO SHAPE YOU</span>

                </div>
                <div className='pgm'>
                    <div className='left_pgm'>
                        <img className='images_time' src={timetable} alt='' />
                    </div>
                    <span className='right_pgm'>
                        <div>  <div className='container'><img className='exerimg' src={ex1} alt='' /><br />
                            <div className='info' ><p>Endurance exercises contain workouts that get your blood flowing to continue an activity for a longer time.</p><br />
                                <a href='https://www.getbasicidea.com/the-4-main-types-of-exercise/'> <button className="buttonss">Read More</button></a></div></div>
                        </div>
                        <div className='container'>  <img className='exerimg' src={ex2} alt='' /><br />
                            <div className='info' ><p>Endurance exercises contain workouts that get your blood flowing to continue an activity for a longer time.</p><br />
                                <a href='https://www.getbasicidea.com/the-4-main-types-of-exercise/'> <button className="buttonss">Read More</button></a></div>
                        </div>
                        <div className='container'>  <img className='exerimg' src={ex3} alt='' /><br />
                            <div className='info' ><p>Endurance exercises contain workouts that get your blood flowing to continue an activity for a longer time.</p><br />
                                <a href='https://www.getbasicidea.com/the-4-main-types-of-exercise/'> <button className="buttonss">Read More</button></a></div>
                        </div>
                        <div className='container'>  <img className='exerimg' src={ex4} alt='' /><br />
                            <div className='info' ><p>Endurance exercises contain workouts that get your blood flowing to continue an activity for a longer time.</p><br />
                                <a href='https://www.getbasicidea.com/the-4-main-types-of-exercise/'> <button className="buttonss">Read More</button></a></div>
                        </div>
                    </span>

                </div>

            </div>
        </div>
    )
}

export default Program
