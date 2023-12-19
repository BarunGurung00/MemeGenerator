import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './Body'
import Head from './Header'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Head></Head>
    <Main></Main>
    </>
  </React.StrictMode>,
)
