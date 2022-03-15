import './App.css';
import Box from "./geometries"
import { Canvas } from '@react-three/fiber'
import { useState, useRef } from "react"
import { Html } from '@react-three/drei';



function App() {
  // Plane Width
  const [breadth, setBreadth] = useState('10000');
  let width = breadth / 1000;
  console.log(width);
  // Plane Height
  const [length, setLength] = useState('30000')
  let height = length / 1000;
  console.log(height);
  // Cube Input
  const [size, setSize] = useState("1000")
  let cubeSize = size / 1000;

  // On click State
  const [click, setClick] = useState(false)

  //console.log(click);

  const [PlaneClick, setPlaneClick] = useState(false)

  function cubeClicked() {
    return (
      <Html >
        <div className='input'>
          <input type="number" placeholder='Size (in mm)' onChange={event => setSize(event.target.value)} />
        </div>
      </Html>
    )
  }

  function planeClicked() {
    return (
      <Html >
        <div className='input'>
          <input type="number" placeholder='Width (in mm)' onChange={event => setBreadth(event.target.value)} /> <br /> <br />
          <input type="number" placeholder='Height (in mm)' onChange={event => setLength(event.target.value)} />
        </div>
      </Html>
    )
  }




  return (
    <div className="App">

      <Canvas>

        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <mesh
          onClick={(event) => setPlaneClick(!PlaneClick)}>
          {PlaneClick ? planeClicked() : console.log("false @plane")}
          <planeBufferGeometry attach="geometry" args={[width, height]} />
          <meshPhongMaterial attach="material" color="green" />
        </mesh>
        <mesh rotation={[0, 90, 0]}
          onClick={(event) => setClick(!click)}
        >
          {click ? cubeClicked() : console.log("false @ cube")}

          <boxGeometry args={[cubeSize, cubeSize, 1]} />
          <meshStandardMaterial color={'hotpink'} />

        </mesh>
      </Canvas>
      

    </div>
  );
}

export default App;
