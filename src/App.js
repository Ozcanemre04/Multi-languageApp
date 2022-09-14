import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Header from './components/Header';
import {Suspense} from 'react'
function App() {
  return (
    
    <Suspense fallback={null}>
      <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
      
    </Suspense>
    
  );
}

export default App;
