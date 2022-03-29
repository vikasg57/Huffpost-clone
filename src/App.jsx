import './App.css';
import { NewsContainer } from './components/NewsContainer/NewsContainer';

import  {Navbar}  from './components/navbar/Navbar';
function App() {
  return (
    <div className="App">

      <Navbar/>

     
      <h1>Hello Huffpost  </h1>
      <h1>Hello World</h1>

      <NewsContainer />

      <h1>new branch created</h1>
      
    </div>
  );
}

export default App;
