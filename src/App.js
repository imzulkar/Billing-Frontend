import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Signin from './components/authentication/login';
import Profile from './components/profile';

function App() {
  const token = localStorage.getItem('accessToken');
  const path = window.location.pathname
  if(!token) {
    return <Signin />
  }
  if(token && path ==='/'){
    // console.log(window.history);
    return window.location.href = '/profile'
    // window.history.back()
  }
  const Test1 = () => {
    return <>
    <p>Test 1 </p>
    </>
  }
  const Test2 = () => {
    return <>
    <p>Test 2 </p>
    </>
  }
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/t1' element={<Test1/>}/>
          <Route path='/t2' element={<Test2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
