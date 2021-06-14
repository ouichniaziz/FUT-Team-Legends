import './App.css';
import CardList from './CardList';
import AddCard from './AddCard';
import EditCard from './EditCard';
import {BrowserRouter, Route} from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <h1 style={{backgroundColor: 'red,blue', color:'white' , padding:'10px', fontFamily:'Oswald'}}>FUT Team Legends</h1>
     <BrowserRouter>

  <Route path='/' component={CardList} exact />
  <Route path='/addcard' component={AddCard} exact />
  <Route path='/editcard/:cardid' component={EditCard} />
    

     </BrowserRouter>
    </div>
  );
}

export default App;
