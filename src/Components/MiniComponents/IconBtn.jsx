import React from 'react';

const IconBtn = ({icon,text}) => {
    return (
        <div className='flex items-center gap-2 cursor-pointer text-gray-500 font-medium'>
            <p className='text-xl'>{icon}</p>
            <p>{text}</p>
        </div>
    );
};

export default IconBtn;