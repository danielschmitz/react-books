import '@picocss/pico'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import ListBooks from './books/list'
import ListCategories from './categories/list'
import ListFriends from './friends/list'

export default function App() {

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [])

  const setTheme = (theme) => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }

  return (
    <div className='container'>
      <nav>
        <ul>
          <li><strong>My Books</strong></li>
        </ul>
        <ul>
          <li><a href="/categories">Categories</a></li>
          <li><a href="/friends">Friends</a></li>
          <li><a href="#" role="button">New Book</a></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route exact path="/" element={<ListBooks />} />
          <Route exact path="/categories" element={<ListCategories />} />
          <Route exact path="/friends" element={<ListFriends />} />
        </Routes>
      </main>

      <div style={{ textAlign: 'center' }}>
        <a href="#" onClick={() => { setTheme('dark') }}>Dark</a>
        &nbsp;&nbsp;
        <a href="#" onClick={() => { setTheme('light') }}>Light</a>
      </div>

    </div>
  )
}

