import { Canvas } from '@react-three/fiber';
import { Stage, PresentationControls } from '@react-three/drei';

function ThreeDModelViewer(props : any) {
    return(
        <div className='threeDModelViewer'>
            <Canvas dpr={[1,2]} shadows camera={{ fov: 45 }}>
                <PresentationControls speed={.5} global zoom={2} > {/* polar={[-0.1, Math.PI / 4]} */}
                    <Stage environment="sunset">
                        { props.children }
                    </Stage>
                </PresentationControls>
            </Canvas>
        </div>
    );
}

export default ThreeDModelViewer;

