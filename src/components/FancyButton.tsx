import React from 'react';
import PropTypes from 'prop-types';

export default function FancyButton(props: { name: string, tooltip: string, handleClick: () => void }) {
    return (
        // <button className='fancyButton group' onClick={props.handleClick}>
        //     <>
        //         { props.name }
        //             { props.tooltip != "" ? 
        //                 <span className="fancyButtonTooltip group-hover:scale-100">
        //                     { props.tooltip }
        //                 </span>
        //             : null}
        //     </>
        // </button>
        <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn m-1">Hover</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
    );
}

