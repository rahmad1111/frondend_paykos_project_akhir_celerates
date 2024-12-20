import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Navigate from './routes/Navigate'
import { Provider } from 'react-redux';
import store from './store';
import './styles/admin.css';
import './styles/css.css';
import './styles/dashboard.css';
import './styles/editdata.css';
import './styles/index.css';
import './styles/login.css';
import './styles/tampildata.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store()}>
        <BrowserRouter>
          <Navigate />
        </BrowserRouter>
      </Provider>
  </StrictMode>,
)
