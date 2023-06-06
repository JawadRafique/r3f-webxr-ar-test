import { useRef } from "react";

const Cube = ({ position }) => {
    const cubeRef = useRef();

    return (
        <>
            <mesh ref={cubeRef} position={position}>
                <boxGeometry args={[0.2, 0.2, 0.2]} />
                <meshStandardMaterial color={"mediumpurple"} />
            </mesh>
        </>
    );
};

export default Cube;
