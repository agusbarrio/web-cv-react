import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import { NavbarProvider } from './contexts/NavbarContext';

function App() {
  return (
    <NavbarProvider>
      <div data-component="App">
        <Header />
        <Main />
      </div>
    </NavbarProvider>
  );
}

export default App;
