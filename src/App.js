import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Emoji from './Emoji/Emoji';
import Home from './Home';
import Layout from './Layout';
import ToDoList from './todolist/ToDoList';
import Tictactoe from './TicTacToe/TicTacToe';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/emoji" element={<Emoji />} />
        <Route exact path="/todo" element={<ToDoList />} />
        <Route exact path="/tictactoe" element={<Tictactoe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
