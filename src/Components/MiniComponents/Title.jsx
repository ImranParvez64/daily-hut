import React from 'react';

const Title = ({title}) => {
    return (
        <div>
            <h1 className='text-xl md:text-3xl  font-semibold text-gray-700'>{title}</h1>
        </div>
    );
};

export default Title;