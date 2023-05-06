function Card(props: {title: string, children: any}) {
    return(
        <>
            <div className="card">
                <h1 className="card-title">
                    { props.title }
                </h1>
                <div className="card-body">
                    { props.children }
                </div>
            </div>
        </>
    );
}

export default Card;