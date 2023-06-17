import React from 'react';

const Td = ({children}) => {
    return (
        <td className='px-[20px] py-[20px] border border-slate-300'>
            {children}
        </td>
    );
};

export default Td;