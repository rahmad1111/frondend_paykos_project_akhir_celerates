import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navigate from './routes/Navigate'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store()}>
        <BrowserRouter>
          <Navigate />
        </BrowserRouter>
      </Provider>
  </StrictMode>,
)
