import { useState } from 'react';
import './App.css';
import Banner from './components/banner/banner';
import Experience from './components/experience/experience';
import Header from './components/head/header';
import Rodape from './components/rodape/rodape';

function App() {

  const [themaBlack, setThemaBlack] = useState(false)

  const changeThema = () =>{
    setThemaBlack(!themaBlack)
  }

  return (
    <div className="App">
      <Header changeThema={changeThema} themaBlack={themaBlack}/>
      <Banner themaBlack={themaBlack}/>
      <Experience themaBlack={themaBlack}/>
      <Rodape themaBlack={themaBlack}/>
    </div>
  );
}

export default App;
