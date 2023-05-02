import { Children } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';

export default function Dropdown(props: {children: any, className: string}) {
    return(
        <>
            <div className={ props.className }>
                <label tabIndex={0}>
                    { <HiBars3BottomRight className='w-8 h-8 page-dropdown-button'/> }
                </label>
                <ul tabIndex={0} className='dropdown-content menu p-2'>
                    { props.children }
                </ul>
            </div>
        </>
    );
}