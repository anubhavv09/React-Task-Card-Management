import logo from './logo.svg';
import './App.css';
import FrontPage from './FrontPage';
import NoteState from './context/NoteState';

function App() {
  return (
      <>

      <NoteState>
      <FrontPage/>
      </NoteState>
     
      
      
      
      </>
  );
}

export default App;
