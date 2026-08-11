import WhySatpuraNaturals from "./Components/Article/WhySatpuraNaturals";
import RootedInCommunity from "./Components/Comunity/RootedInCommunity";
import CallToAction from "./Components/Contact/CallToAction";
import Introduction from "./Components/Content/Introduction";
import HarvestedWithIntention from "./Components/Harvest/HarvestedWithIntention";
import ProductGallery from "./Components/ProductGallary/ProductGallery";
import GlobalRegions from "./Components/Regions/GlobalRegions";
import Standards from "./Components/Standard/Standards";

const App = () => {
  return (
    <>
    <Introduction />
      <ProductGallery />
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
