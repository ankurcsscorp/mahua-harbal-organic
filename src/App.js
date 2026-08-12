import { useEffect } from "react";
import WhySatpuraNaturals from "./Components/Article/WhySatpuraNaturals";
import RootedInCommunity from "./Components/Comunity/RootedInCommunity";
import CallToAction from "./Components/Contact/CallToAction";
import Introduction from "./Components/Content/Introduction";
import HarvestedWithIntention from "./Components/Harvest/HarvestedWithIntention";
import ProductGallery from "./Components/ProductGallary/ProductGallery";
import GlobalRegions from "./Components/Regions/GlobalRegions";
import Standards from "./Components/Standard/Standards";
import { useLocation } from "react-router-dom";
import Hero from "./Components/Header/Hero";
import products from "./Components/ProductGallary/ProductData";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (!sectionId) return;

    const timer = setTimeout(() => {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.state]);
  return (
    <>
      <Hero/>
      <Introduction />
      <ProductGallery
      products={products.slice(0, 3)}
      showViewAll={true}
      />
      <WhySatpuraNaturals />
      <RootedInCommunity />
      <HarvestedWithIntention />
      <GlobalRegions/>
      <Standards/>
      <CallToAction /> 
      </>
  )
};

export default App;
