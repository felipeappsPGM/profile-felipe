
import './Home.css';

function App() {
  const handleContact = () => {
    console.log('felipe');
  }
  return (
    <>
    <section>
      <nav>
        <div>
          <p>logo</p>
        </div>
        <div>
          {/* <a href="#">about</a>
          <a href="#">portfolio</a>
          <a href="#">contact</a> */}
        </div>
        <div>
          <input type="search" />
        </div>
      </nav>
    </section>
    <main>
      <section>
        <h1>I am <span>Felipe Chagas</span></h1>
        <h2>Python and Reac Developer</h2>
      </section>
      <section>
        <img src="#" alt="felipe chagas profile" />
      </section>
    </main>
    <section>
      <button onClick={handleContact}>contact</button>
    </section>
    <footer>
      <ul>
        <li>Linkedin</li>
        <li>Instagram</li>
        <li>Gmail</li>
      </ul>
    </footer>
    </>
  );
}

export default App;
