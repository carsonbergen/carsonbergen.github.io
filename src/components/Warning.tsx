
function Warning(props: { warning: string, type: number }) {
    return (
        <div className="justify-center flex mt-10">
            <div className="content-center ml-5 mr-5">
                <div 
                    className={`alert shadow-lg max-w-screen-sm + ${props.type === 1 ? 'bg-yellow text-secondary' : 'bg-green text-secondary'} border-[2px] border-dashed border-secondary rounded-none shadow-none`}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>{ props.warning }</span>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Warning;