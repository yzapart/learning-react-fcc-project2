import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";
import data from "./data";

function App() {
  const articles = data.map((item) => {
    return <Article key={item.key} item={item} />;
  });

  return (
    <div className="App">
      <Header />
      {articles}
    </div>
  );
}

export default App;
