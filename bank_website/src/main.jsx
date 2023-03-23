import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove',(e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div className='cursor'></div>
  </React.StrictMode>,
)
