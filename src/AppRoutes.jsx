import { Navigate, Route, Routes } from "react-router-dom";
import ContactQuoteSection from "./Components/Contact/ContactQuoteSection";
import RootLayout from "./RootLayout";
import App from "./App";
import ProductGallery from "./Components/ProductGallary/ProductGallery";
import products from "./Components/ProductGallary/ProductData";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RootLayout showHero>
            <App />
          </RootLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <RootLayout showHero>
            <ContactQuoteSection />
          </RootLayout>
        }
      />
      <Route
        path="/quote"
        element={
          <RootLayout showHero>
            <ContactQuoteSection />
          </RootLayout>
        }
      />
      <Route
        path="/products"
        element={
          <RootLayout showHero>
            <ProductGallery
              products={products}
              showViewAll={false}
            />
          </RootLayout>
        }
      />
      {/* <Route path="*" element={<Navigate to="/"/>}/> */}
      {/* <Route path="*" element={<RootLayout showHero><App/></RootLayout>}/> */}
    </Routes>
  );
};
export default AppRoutes;
