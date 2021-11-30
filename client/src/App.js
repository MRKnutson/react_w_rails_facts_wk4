import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Counter from './components/Counter';
import FactForm from './components/FactForm';
import Facts from './components/Facts';
import FactShow from './components/FactShow';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element ={<Facts />} />
        <Route path="/facts/new" element ={<FactForm />} />
        <Route path="/facts/:id" element ={<FactShow />} />
        <Route path="/facts/:id/edit" element ={<FactForm />} />
        <Route path="/counter" element ={<Counter />} />
        <Route path="/about" element ={<About />} />
      </Routes>
    </>
  );
}


// react-router-dom v5
// function App() {
//   return (
//     <div className="App">
//       <Counter />
//      <Facts />
//     </div>
//     <> </> is a fragment - one element has to wrap everything(e.g., using div to wrap p elements)
//     this would have worked in version 5 but now it needs to be wrapped in routes component
//     <>
//       <Route path="/" component ={Facts} />
//       <Route path="/counter" component={Counter} />
//     </>
//     <Routes>
//       <Route path="/" element ={<Facts />} />
//       <Route path="/counter" element ={<Counter />} />
//     </Routes>
//   );
// }

export default App;
