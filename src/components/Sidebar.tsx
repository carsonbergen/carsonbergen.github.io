import { Children, useState } from 'react';
import { HiBars3BottomRight, HiXMark } from 'react-icons/hi2';

function Sidebar(props: {children: any, className: string}) {
    const [isOpen, setIsOpen] = useState(false);

    

    return(
        <>
            <div className={`sidebar ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
                <div className={ props.className }>
                </div>
            </div>
            <label 
                className='sidebar-button swap swap-rotate'
                tabIndex={0}>
                <input 
                    type='checkbox'
                    onClick={ () => setIsOpen(!isOpen) }
                />
                <div className='swap-off'>
                    { <HiBars3BottomRight className='w-8 h-8 page-dropdown-button'/> }
                </div>
                <div className='swap-on'>
                    { <HiXMark className='w-8 h-8 page-dropdown-button'/> }
                </div>
            </label>
        </>
    );
}

export default Sidebar;