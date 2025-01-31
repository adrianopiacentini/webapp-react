import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalContextProvider } from './contexts/GlobalContext'
import './App.css'
import AppLayout from './components/AppLayout'
import HomePage from './components/HomePage'
import MovieList from './components/MovieList'
import SingleMoviePage from './components/SingleMoviePage'

function App() {

  return (
    <>
      <GlobalContextProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={AppLayout}>
              <Route index Component={HomePage} />
              <Route path='/movielist'>
                <Route index Component={MovieList} />
                <Route path=':id' Component={SingleMoviePage} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContextProvider>
    </>
  )
}

export default App
