import React from 'react';

const MiniNabItems = ({title,symbol,arrow}) => {
    return (
        <div>
              <p className='flex items-center gap-2 text-gray-500 text-sm font-medium'>{title} <span>{arrow}</span> <span className='mr-4'>{symbol}</span></p>
        </div>
    );
};

export default MiniNabItems;