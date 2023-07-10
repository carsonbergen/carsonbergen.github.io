export default function CarouselImage(props: {id: string, src: string, prevId: string, nextId: string, alt: string, width: string, className: string}) {
    return (
        <>
            <div id={ props.id } className={ props.className } >
                {/* <Image src={ props.src } className="w-full" alt={ props.alt } width={ props.width }/> */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={ props.prevId } className="btn btn-circle">❮</a> 
                    <a href={ props.nextId } className="btn btn-circle">❯</a>
                </div>
            </div> 
        </>
    );
}

