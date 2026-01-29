import Left from "./components/Left";
import Header from "./components/Header";
import Content from "./components/Content";
import data from './database.json';

function App() {
  const {product, category, brand} = data;

  return (
    // Sử dụng HTML built-in làm syntax cho JSX
    <section className="container">
      {/* <Header/> */}
      <hr/>
      <Left dataSource={brand}/> {/*Gọi component Left và truyền dữ liệu vào attribute: dataSource*/}
      <Content products={product} categories={category} brands={brand}/>
    </section>
  );
}

export default App;
