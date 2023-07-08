
function Footer(props: { className: string, children: any }) {
    return (
        <footer className={ props.className }>
            { props.children }
        </footer>
    );
}

export default Footer;