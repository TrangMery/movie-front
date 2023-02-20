
import './App.css';
import Films from './components/FilmsContainer';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import About from './components/About';
import News from './components/News';
import FilmDetail from './components/FilmDetail';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from './components/ThemeContext'
import { useContext } from 'react'
function App() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className="App">
    <Navigation />
    <Routes>
      <Route path='/' element={<Films/>}></Route>   
        <Route Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<FilmDetail/>}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
    </Routes>

    </div>
  );
}

export default App;
