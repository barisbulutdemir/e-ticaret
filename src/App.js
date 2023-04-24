import './styles.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from "./pages/home";
import Navbar from "./companents/navbar/navbar";
import Footer from "./companents/footer";
import PageContainer from "./container/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DetailProduct from "./pages/detail";
import Cart from "./pages/cart";

function App() {

  return (
      <PageContainer>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:id" element={<DetailProduct />} />
                <Route path="/cart" element={<Cart />} />

            </Routes>
            <Footer />
        </Router>
      </PageContainer>
  );
}

export default App;
