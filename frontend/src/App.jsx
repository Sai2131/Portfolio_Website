import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './global.css'

const Homepage = lazy(() => import('./homepage'));
const Compiler = lazy(() => import('./projects/compiler'));

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route index element={<Suspense fallback={<>Loading homepage...</>}> <Homepage/></Suspense>}/>
        <Route path="compiler" element={ <Suspense fallback={<>Loading project ...</>}> <Compiler/> </Suspense>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
