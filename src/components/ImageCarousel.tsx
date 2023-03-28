function ImageCarousel(props: any) {
    return( 
        <div className="carousel">
            { props.children }
        </div>
    );
}

export default ImageCarousel;