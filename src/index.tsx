import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './styles/normalize.css'
import './styles/nullStyle.scss'
import './styles/fonts.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
