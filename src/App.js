import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import { NavbarProvider } from './contexts/NavbarContext';
import { ScreenSizeProvider } from './contexts/ScreenSizeContext';

function App() {
  return (
    <NavbarProvider>
      <ScreenSizeProvider>
        <div data-component="App">
          <Header />
          <Main />
        </div>
      </ScreenSizeProvider>
    </NavbarProvider>
  );
}

export default App;
