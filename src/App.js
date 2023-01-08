
import './App.css';
import Header from './Common/Header/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { BrowserRouter as Router} from 'react-router-dom'
import { Pages } from './Pages/Pages';

function App() {
  return (
    <>
         {/* <Login/> <br/>  */}
         {/* <Signup/> */}
         <Router>
           <Header/>
            {/* <Switch> */}
                    {/* <Route path='/' exact> */}
                      <Pages/>
                    {/* </Route> */}
            {/* </Switch> */}
         </Router>
    </>
  );
}

export default App;
