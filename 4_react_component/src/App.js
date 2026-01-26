import Left from "./components/Left";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    // Sử dụng HTML built-in làm syntax cho JSX
    <section className="container">
      {/* <Header/> */}
      <hr/>
      <Left/>
      <Content/>
    </section>
  );
}

export default App;
