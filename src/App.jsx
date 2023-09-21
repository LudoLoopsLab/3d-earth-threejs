import "./App.css"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import styled from "styled-components"
import { Earth } from "./components/earth"

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  )
}

export default App
