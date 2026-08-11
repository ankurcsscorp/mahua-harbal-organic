import Header from './Components/Header/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Hero from './Components/Header/Hero';
import Introduction from './Components/Content/Introduction';
import ProductGallery from './Components/ProductGallary/ProductGallery';
import WhySatpuraNaturals from './Components/Article/WhySatpuraNaturals';
import Footer from './Components/Footer/Footer';
import CallToAction from './Components/Contact/CallToAction';
import Standards from './Components/Standard/Standards';
import RootedInCommunity from './Components/Comunity/RootedInCommunity';
import HarvestedWithIntention from './Components/Harvest/HarvestedWithIntention';
import GlobalRegions from './Components/Regions/GlobalRegions';
import ContactQuoteSection from './Components/Contact/ContactQuoteSection';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: `'Inter', sans-serif`,
  },
});

const RootLayout = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {/* <Hero /> */}
      {children}
      {/* <Introduction />
      <ProductGallery />
      <WhySatpuraNaturals />
      <RootedInCommunity />
      <HarvestedWithIntention />
      <GlobalRegions/>
      <Standards/>
      <CallToAction /> */}
      <Footer/>
    </ThemeProvider>
  );
};

export default RootLayout;