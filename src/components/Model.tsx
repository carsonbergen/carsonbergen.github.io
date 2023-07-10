import { useGLTF } from '@react-three/drei';


export default function Model(props : {src : string, scale : number}) {
    const { scene } = useGLTF(props.src);
    return <primitive object={ scene } scale={ props.scale } />
}
