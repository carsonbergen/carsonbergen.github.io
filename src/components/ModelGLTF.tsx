import { useGLTF } from '@react-three/drei';

function Model(props : {src : string, scale : number}) {
    const { scene } = useGLTF(props.src);
    return <primitive object={ scene } scale={ props.scale } />
}

export default Model;