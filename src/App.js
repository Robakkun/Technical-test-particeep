import './App.css';

import { Provider } from 'react-redux';
import store from './store'

import MoviesList from './views/movies-list';
import Card from './components/card/card.component';

import logo from './media/logo.png';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header data-testid='header'>
          <div className='App-header'>
            <img src={logo} height={100} width={100}></img>
            <h2>Particeep Technical Test</h2>
          </div>
        </header>
        <div data-testid='movies-list'>
          <MoviesList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
