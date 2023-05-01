import { HiBars3BottomRight } from 'react-icons/hi2';

export default function Dropdown(props: any) {
    return(
        <>
            <div className="page-dropdown">
                <label tabIndex={0} className="">
                    { <HiBars3BottomRight size={"24px"}/> }
                </label>
                <div></div>
            </div>
        </>
    );
}