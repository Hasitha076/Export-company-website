import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="bg-[#1E120A] min-h-screen text-[#F5EFEB] font-sans">
        <Navbar />
        <Hero />
        <AboutUs />
        <Products />
        <WhyChooseUs />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
