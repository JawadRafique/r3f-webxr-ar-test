import { useRef } from "react";

const Cube = ({ position }) => {
    const cubeRef = useRef();

    return (
        <>
            <mesh ref={cubeRef} position={position}>
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshStandardMaterial color={"mediumpurple"} />
            </mesh>
        </>
    );
};

export default Cube;
