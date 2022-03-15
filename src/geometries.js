// import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX


  function main(){
return(
  <Html>
    <h1>hello</h1>
  </Html>
)
}

  return (
    
    <mesh 
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />  
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      
            {/* {!active ? console.log("fals") : main() } */}
    </mesh>
  )
}

export default Box;