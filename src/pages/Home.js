import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footer";
import NavBar from "../features/common/Navbar";

function Home() {
  return (
    <div>
      <NavBar>
        <ProductList />
      </NavBar>
      <Footer></Footer>
    </div>
  );
}

export default Home;
