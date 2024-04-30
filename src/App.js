import logo from './logo.svg';
import './App.css';
import NavBar from './componets/NavBar';
import { ThemeProvider, createTheme } from '@mui/material';
import { lime, purple } from '@mui/material/colors';
import Hero from './componets/Hero';
import BandSection from './componets/BandSection';
import TourDates from './componets/TourDates';
import Contact from './componets/Contact';
import MiddelImage from './componets/MiddelImage';
import Footer from './componets/Footer';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000"
      }
    }
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Hero />
        <BandSection />
        <TourDates />
        <Contact />
        <MiddelImage />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
