import trone from '../../Assets/tr1.png';
import trtwo from '../../Assets/tr2.png'
import trthree from '../../Assets/tr3.png'

const trainers_data = [
    {
        image: {
            src: trone,
            alt: 'Trainer 1',
            width: '200px',
            height: '200px'
        },
        heading: 'Strength Training',
        details: 'In this program, you are trained to improve your strength through many exercises.'
    },
    {
        image: {
            src: trtwo,
            alt: 'Trainer 2',
            width: '200px',
            height: '200px'
        },
        heading: 'Strength Training',
        details: 'In this program, you are trained to do sequential moves in a range of specific steps or actions.'
    },
    {
        image: {
            src: trthree,
            alt: 'Trainer 3',
            width: '200px',
            height: '200px'
        },
        heading: 'Fat Burning',
        details: 'This program is suitable for you who want to get rid of your fat and achieve a healthier, more toned body.'
    }
];

export default trainers_data;
