import NavBar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";
import ProductDetail from "../features/product/components/ProductDetail";

function ProductDetailPage() {
  return (
    <div>
      <NavBar>
        <ProductDetail />
      </NavBar>
      <Footer></Footer>
    </div>
  );
}

export default ProductDetailPage;
