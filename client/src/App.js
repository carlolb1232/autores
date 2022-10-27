import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import AuthorForm from './Components/AuthorForm';
import CreateAuthor from './Views/CreateAuthor';
import UpdateAuthor from './Views/UpdateAuthor';
import AuthorsList from './Views/AuthorsList';
import Header from './Components/Header';

function App() {
  return (
    <div className='main-container'>
      <Header />
      <Routes>
        <Route path='/' element={<AuthorsList />}/>
        <Route path='/create/author' element={<CreateAuthor />}/>
        <Route path='/update/author/:id' element={<UpdateAuthor />}/>
        {/* <CreateAuthor />
        <UpdateAuthor /> */}
      </Routes>
    </div>
  );
}

export default App;
