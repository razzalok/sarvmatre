import {BrowserRouter as Router,Route,Routes} from 'react-router-dom' 
import Hero from './components/Hero';
import About from './components/About';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
          <Hero/>
          <About/>
          </>

        }/>

      
      
      </Routes>
    </Router>
    
  );
}

export default App;
