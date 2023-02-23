import '@picocss/pico'

export default function App() {

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
          <li><a href="#">Categories</a></li>
          <li><a href="#">Friends</a></li>
          <li><a href="#" role="button">New Book</a></li>
        </ul>
      </nav>
      <main>
        <article>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Pages</th>
                <th>Description</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Catcher in the Rye</td>
                <td>J.D. Salinger</td>
                <td>375</td>
                <td>A novel by J.D. Salinger</td>
                <td>Fiction</td>
              </tr>
              <tr>
                <td>The Catcher in the Rye</td>
                <td>J.D. Salinger</td>
                <td>375</td>
                <td>A novel by J.D. Salinger</td>
                <td>Fiction</td>
              </tr>
              <tr>
                <td>The Catcher in the Rye</td>
                <td>J.D. Salinger</td>
                <td>375</td>
                <td>A novel by J.D. Salinger</td>
                <td>Fiction</td>
              </tr>
            </tbody>
          </table>
        </article>
      </main>

      <div style={{ textAlign: 'center' }}>
          <a href="#" onClick={() => { setTheme('dark') }}>Dark</a>
          &nbsp;&nbsp;
          <a href="#" onClick={() => { setTheme('light') }}>Light</a>
      </div>
      
    </div>
  )
}

