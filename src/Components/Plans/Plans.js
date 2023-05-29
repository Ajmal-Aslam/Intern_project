// import React from 'react';
// import './Plans.css';
// import backplan from '../../Assets/backwhy.png';
// import { default as plans_data } from '../Plans/planscost.js';
// import tick from '../../Assets/tick.png';


// export default function Plans() {
//     return (
//         <div className='start'> <img className='back' src={backplan} alt='/' />
//             <div className='program_header'>
//                 <span className='text'>READY TO START</span>
//                 <span className='text2'>YOUR JOURNEY</span>
//                 <span className='text'>NOW WITHUS</span>

//             </div>

//             {/* sections plans */}

//             <div className='plans'>
//                 {
//                     plans_data.map((plan, i) => {
//                         <div className='plan' key={(i)}>
//                             <img src={plan.icon.src} alt="/" />
//                             <span>{plan.name}</span>
//                             <span>{plan.price}</span>
//                             <div className='features'>
//                                 {plan.features.map((feature, i) => (
//                                     <div className="feature" key={i}>
//                                         <img src={tick} alt="/" />
//                                         <span key={i}>{feature}</span>
//                                     </div>
//                                 ))}

//                             </div>
//                             <span>{plan.features}</span>

//                         </div>
//                     })
//                 }
//             </div>


//         </div>
//     )
// }

import React, { useState } from 'react';
import './Plans.css';
import backplan from '../../Assets/backwhy.png';
import { default as plansData } from '../Plans/planscost.js';
import tick from '../../Assets/tick.png';

export default function Plans() {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const selectPlan = (plan) => {
        setSelectedPlan(plan);
    };

    return (
        <div className='start'>
            <img className='back' src={backplan} alt='/' />
            <div className='program_header'>
                <span className='text'>READY TO START</span>
                <span className='text2'>YOUR JOURNEY</span>
                <span className='text'>NOW WITH US</span>


                {/* sections plans */}
                <div className='plans'>
                    {plansData.map((plan, i) => (
                        <div className='plan' key={i}>
                            <img className='plans_img' src={plan.icon.src} alt='/' />
                            <span>{plan.name}</span>
                            <span>{plan.price}</span>
                            <div className='features'>

                                {plan.features.map((feature, j) => (
                                    <div className='feature' key={j}>
                                        <img className='plans_img' src={tick} alt='/' />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <button onClick={() => selectPlan(plan)}>Select</button>
                        </div>
                    ))}
                </div>

                {selectedPlan && (
                    <div className='selected-plan'>
                        <h2>Selected Plan</h2>
                        <p>Name: {selectedPlan.name}</p>
                        <p>Price: {selectedPlan.price}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

