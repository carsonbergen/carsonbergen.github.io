
export default function ImageCarousel(props: { className: string, children: any}) {
    return( 
        <div className={ props.className }>
            { props.children }
        </div>
    );
}
