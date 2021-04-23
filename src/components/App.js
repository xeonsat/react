import '../css/App.css';

function Header() {
  return (
    <header> 
      <h1>Welcome to our website!</h1>
    </header>
  );
}

function Main() {
  return (
    <section> 
      <p>Everything strarts here. Hooray! Keep on rollin! </p>    
    </section>
  );
}

function Footer(props) {
  return (
    <footer> 
      <p>Copyright {props.year} | Isla Formosa</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;