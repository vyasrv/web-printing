import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const ButtonOne = ({ url, name, type, justifyItem }) => {
    let buttonStyles = "";

    switch (type) {
        case 'primary':
            buttonStyles = `inline-flex items-center justify-center text-sm tracking-normal font-semibold hover:text-primary hover:bg-white/90 bg-white text-black  rounded-xl cursor-pointer transition duration-300 py-2 px-5`;
            break;
        case 'secondary':
            buttonStyles = `bg-secondary hover:bg-white hover:text-ternary text-white rounded-full px-3 py-2`;
            break;
        case 'danger':
            buttonStyles = `bg-red-500 text-white border-red-700`;
            break;
        default:
            buttonStyles = `text-primary `;
    }

    return (
        <div className={`w-full flex justify-${justifyItem}`}>

            {url ? (<Link href={url} passHref={true} target='_blank'>
                <button id="btn-one" aria-label="btn-one" className={`cursor-pointer items-center flex gap-1 md:text-base text-sm ${buttonStyles}`}>
                    {name}
                    <span>
                        <FaArrowRight size={12} />
                    </span>
                </button>
            </Link>) : (
                <button id="btn-one" aria-label="btn-one" className={`cursor-pointer items-center flex gap-1 md:text-base text-sm ${buttonStyles}`}>
                    {name}
                    <span>
                        <FaArrowRight size={12} />
                    </span>
                </button>)}

        </div>
    );
};

export default ButtonOne;
