import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"> Search a Word</header>
      <main>
        <Dictionary defaultKeyword="dictionary" />
      </main>

      <footer className="App-footer">
        <small>
          Coded by{" "}
          <a
            href="https://github.com/lola1234/dictionary-project"
            target="blank"
          >
            Linora Imeri{" "}
          </a>
        </small>
      </footer>
    </div>
  );
}
