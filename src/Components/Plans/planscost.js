import preone from '../../Assets/premium2.png';
import proone from '../../Assets/pro2.png'
import baseone from '../../Assets/basic.png'

const plans_data = [
    {
        icon: {
            src: baseone,
            alt: 'Trainer 1',
            width: '200px',
            height: '200px'
        },
        name: 'BASIC PLAN',
        price: "$ 25",
        features: [
            "2 hours of exercises",
            "free consulatation to coaches",
            "Acess to th Community"
        ],
    },
    {
        icon: {
            src: preone,
            alt: 'Trainer 1',
            width: '200px',
            height: '200px'
        },
        name: 'PREMIUM PLAN',
        price: "$ 45",
        features: [
            "2 hours of exercises",
            "free consulatation to coaches",
            "Acess to th Community"
        ],
    },
    {
        icon: {
            src: proone,
            alt: 'Trainer 1',
            width: '200px',
            height: '200px'
        },
        name: 'PRO PLAN',
        price: "$ 85",
        features: [
            "2 hours of exercises",
            "free consulatation to coaches",
            "Acess to th Community"
        ],
    },
];

export default plans_data;
