function CarouselImage(props: {id: string, src: string, prevId: string, nextId: string}) {
    return (
        <div id={ props.id } className="gameDevCornerCarouselImage">
            <img src={ props.src } className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={ props.prevId } className="btn btn-circle">❮</a> 
                <a href={ props.nextId } className="btn btn-circle">❯</a>
            </div>
        </div> 
    );
}

export default CarouselImage;