import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureStore} from './redux/configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
