import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
    <StrictMode><App /></StrictMode>
  </Provider>
);
