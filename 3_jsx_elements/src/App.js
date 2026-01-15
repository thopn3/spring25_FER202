import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    // Sử dụng HTML built-in làm syntax cho JSX
    <section>
      <Header>Header content</Header>

      <Main>
        <Main.Left/>
        <Main.Right/>
      </Main>

      <Footer>Footer content</Footer>
    </section>
  );
}

export default App;
