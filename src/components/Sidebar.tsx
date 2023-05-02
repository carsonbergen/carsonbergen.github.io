import { Children, useState } from 'react';
import { HiBars3BottomRight, HiXMark } from 'react-icons/hi2';

function Sidebar(props: {children: any}) {
    const [isOpen, setIsOpen] = useState(false);

    

    return(
        <>
            <div className={`sidebar ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
                <div className='pt-12 flex flex-col w-full h-screen z-50'>
                    { props.children }
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
                    { <HiBars3BottomRight className='page-dropdown-button w-8 h-8 text-secondary border-secondary rounded-none bg-primary'/> }
                </div>
                <div className='swap-on'>
                    { <HiXMark className='page-dropdown-button w-8 h-8 text-secondary border-secondary rounded-full bg-yellow'/> }
                </div>
            </label>
           
        </>
    );
}

export default Sidebar;