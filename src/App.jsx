import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import styled from "styled-components"
import "./App.css"
import { Earth } from "./components/earth"
import { TopSection } from "./components/topSection"

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <CanvasContainer>
      <TopSection />
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  )
}

export default App
