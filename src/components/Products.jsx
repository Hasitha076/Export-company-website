import React, { useState } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import cinnamonSticks from '../assets/cinnamon_sticks.jpg';
import cinnamonPowder from '../assets/cinnamon_powder.jpg';
import cinnamonOil from '../assets/cinnamon_oil.jpg';
import cinnamonTea from '../assets/cinnamon_tea.jpg';

const products = [
    {
        id: 1,
        title: 'Cinnamon Stick SM',
        size: '100 ml',
        price: '$14.99',
        description: 'Perfectly rolled and sun-dried, our premium-grade cinnamon sticks are a hallmark of Sri Lankan heritage.',
        image: cinnamonSticks,
    },
    {
        id: 2,
        title: 'Cinnamon Oil',
        size: '100 ml',
        price: '$24.99',
        description: 'Extracted using traditional methods, our pure cinnamon oil is a powerhouse of flavor and health benefits.',
        image: cinnamonOil,
    },
    {
        id: 3,
        title: 'Cinnamon Sticks',
        size: '250g',
        price: '$19.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: cinnamonSticks,
    },
    {
        id: 4,
        title: 'Cinnamon Powder',
        size: '100 ml',
        price: '$12.99',
        description: 'Finely ground to preserve its natural aroma and flavor, our cinnamon powder is a versatile kitchen essential.',
        image: cinnamonPowder,
    },
    {
        id: 5,
        title: 'Cinnamon Tea',
        size: '100 ml', // Placeholder size
        price: '$9.99',
        description: 'A soothing blend of premium Ceylon cinnamon and tea leaves for a refreshing experience.',
        image: cinnamonTea, // Placeholder
    }
];

// Custom Arrow Components - Enhanced Styling
// Custom Arrow Components - Enhanced Styling with Responsive Adjustments
function NextArrow(props) {
    const { onClick, className } = props;
    return (
        <Box
            onClick={onClick}
            className={className} // Keep class for slick-slider to recognize it, but override generic slick styles
            sx={{
                display: "flex !important", // Override slick's display: block
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "white",
                borderRadius: "50%",
                width: { xs: "40px", md: "56px" }, // Smaller on mobile
                height: { xs: "40px", md: "56px" },
                zIndex: 2,
                cursor: "pointer",
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: { xs: "10px", md: "-60px" }, // Inside on mobile, outside on desktop
                border: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                '&:hover': {
                    transform: 'translateY(-50%) scale(1.1)',
                    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                    bgcolor: "white" // Ensure bg stays white on hover
                },
                '&:before': { display: 'none' } // Remove default slick arrow character
            }}
        >
            <ChevronRight color="#3E2723" size={24} strokeWidth={2.5} />
        </Box>
    );
}

function PrevArrow(props) {
    const { onClick, className } = props;
    return (
        <Box
            onClick={onClick}
            className={className}
            sx={{
                display: "flex !important",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "white",
                borderRadius: "50%",
                width: { xs: "40px", md: "56px" },
                height: { xs: "40px", md: "56px" },
                zIndex: 2,
                cursor: "pointer",
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                left: { xs: "10px", md: "-60px" }, // Inside on mobile, outside on desktop
                border: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                '&:hover': {
                    transform: 'translateY(-50%) scale(1.1)',
                    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                    bgcolor: "white"
                },
                '&:before': { display: 'none' }
            }}
        >
            <ChevronLeft color="#3E2723" size={24} strokeWidth={2.5} />
        </Box>
    );
}

export default function Products() {
    // State to track the *active* slide index
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        centerPadding: "0px", // Reduced padding for tighter focus
        slidesToShow: 3,
        speed: 600, // Slightly slower for elegance
        focusOnSelect: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        // Update state when slide changes
        beforeChange: (current, next) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "20px",
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "40px",
                }
            }
        ]
    };

    return (
        <Box id="products" sx={{
            backgroundColor: 'rgb(160 118 88)', // Very subtle off-white for depth
            py: 10,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            <Container maxWidth="xl" sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h3" sx={{
                    fontFamily: 'Playfair Display, serif', // Changed to Serif for header
                    fontWeight: 700,
                    color: '#fff',
                    textAlign: 'center',
                    letterSpacing: '-0.5px',
                    fontSize: { xs: '2.5rem', md: '3rem' }
                }}>
                    Our Products
                </Typography>

                <Box sx={{
                    width: '100%',
                    maxWidth: '1200px',
                    // Styles for Slick Slider Slides
                    '.slick-slide': {
                        transition: 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)', // Custom bezier for premium feel
                        opacity: 0.7,
                        transform: 'scale(0.85)',
                        padding: '5px'
                    },
                    '.slick-center': {
                        opacity: 1,
                        transform: 'scale(1.05)',
                        zIndex: 10,
                        position: 'relative',
                    },
                    // Hide default arrows pseudo-elements
                    '.slick-prev:before, .slick-next:before': {
                        display: 'none'
                    },
                    // Ensure the slider track has height
                    '.slick-list': {
                        paddingTop: '60px !important',
                        paddingBottom: '15px !important',
                        overflow: 'visible' // Allow shadows to not be clipped
                    }
                }}>
                    <Slider {...settings}>
                        {products.map((product, index) => (
                            <Box key={product.id} className="slide-item" sx={{ outline: 'none' }}>
                                <Box sx={{
                                    bgcolor: 'white',
                                    borderRadius: '24px',
                                    boxShadow: activeSlide === index
                                        ? '0 20px 50px rgba(62, 39, 35, 0.15)' // Deeper brown shadow for active
                                        : '0 10px 30px rgba(0,0,0,0.05)',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '500px', // Taller cards
                                    maxWidth: '500px',
                                    mx: 'auto',
                                    transition: 'box-shadow 0.3s ease'
                                }}>
                                    {/* Image Area */}
                                    <Box sx={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        {/* Subtle overlay gradient */}
                                        <Box sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '30%',
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)'
                                        }} />
                                    </Box>

                                    {/* Content Area */}
                                    <Box sx={{ p: 4, textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant="caption" sx={{
                                            color: '#8D6E63',
                                            fontSize: '0.75rem',
                                            mb: 1,
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}>
                                            {product.size}
                                        </Typography>

                                        <Typography variant="h5" sx={{
                                            fontFamily: 'Playfair Display, serif', // Serif for titles too
                                            fontWeight: 700,
                                            fontSize: '1.4rem',
                                            mb: 1,
                                            color: '#3E2723'
                                        }}>
                                            {product.title}
                                        </Typography>

                                        {/* Price - Centered vertically in remaining space */}
                                        <Box sx={{ mt: 'auto', mb: 3 }}>
                                            <Typography variant="h5" sx={{
                                                fontWeight: 800,
                                                color: '#2A1B12',
                                                fontFamily: 'Inter'
                                            }}>
                                                {product.price}
                                            </Typography>
                                        </Box>

                                        {/* Button - Only visible on active slide */}
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            sx={{
                                                bgcolor: '#3E2723', // Darker brown
                                                color: 'white',
                                                textTransform: 'none',
                                                py: 1.8,
                                                fontSize: '1rem',
                                                fontWeight: 500,
                                                borderRadius: '12px',
                                                boxShadow: '0 4px 15px rgba(62, 39, 35, 0.3)',
                                                '&:hover': {
                                                    bgcolor: '#2A1B12',
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: '0 6px 20px rgba(62, 39, 35, 0.4)'
                                                },
                                                opacity: activeSlide === index ? 1 : 0,
                                                transform: activeSlide === index ? 'translateY(0)' : 'translateY(10px)',
                                                pointerEvents: activeSlide === index ? 'auto' : 'none',
                                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Springy pop-up
                                            }}
                                        >
                                            View Product
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Box>

                <Button
                    variant="outlined"
                    endIcon={<ArrowRight size={20} />}
                    sx={{
                        mt: 8,
                        borderRadius: '30px',
                        borderColor: '#fff',
                        color: '#fff',
                        textTransform: 'none',
                        fontSize: '1rem',
                        px: 4,
                        py: 1.5,
                        fontFamily: 'Inter',
                        fontWeight: 600,
                        '&:hover': { borderColor: '#5D4037', bgcolor: 'rgba(93, 64, 55, 0.05)' }
                    }}
                >
                    View All Products
                </Button>
            </Container>
        </Box>
    );
}
