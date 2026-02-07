import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import about_us from '../assets/choose_us_section.jpg';

export default function AboutUs() {
    return (
        <Box
            sx={{
                py: 15,
                px: 2,
                backgroundColor: '#5D4037', // Richer brown/reddish tone to match image
                backgroundImage: 'linear-gradient(rgba(93, 64, 55, 0.8), rgba(93, 64, 55, 0.8)), url(https://www.transparenttextures.com/patterns/old-paper.png)',
                backgroundBlendMode: 'multiply',
                position: 'relative',
                overflow: 'hidden'
            }}
            id="about"
        >
            {/* Floral Decoration (Bottom Right) - Custom SVG Shape to mimic the reference */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: -20,
                    right: -20,
                    opacity: 0.2,
                    transform: 'rotate(-10deg)',
                    pointerEvents: 'none',
                    zIndex: 0,
                    width: '400px',
                    height: '400px'
                }}
            >
                <svg viewBox="0 0 200 200" fill="none" stroke="#E5DCC5" strokeWidth="1">
                    {/* Abstract floral lines */}
                    <path d="M180 200 Q 150 150 100 100 T 20 50" />
                    <path d="M100 100 Q 130 80 160 90" />
                    <circle cx="160" cy="90" r="10" stroke="#E5DCC5" />
                    <path d="M100 100 Q 70 120 60 150" />
                    <path d="M60 150 Q 40 160 50 180" />
                    <path d="M180 200 Q 200 150 180 100" />
                    <path d="M180 100 Q 160 50 200 20" />
                    {/* Leaves */}
                    <path d="M120 120 Q 140 120 150 140 Q 130 140 120 120" />
                    <path d="M80 80 Q 60 80 50 60 Q 70 60 80 80" />
                </svg>
            </Box>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
                    {/* Left: Image */}
                    <div className='w-full md:w-1/2 flex justify-center'>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.5)',
                                aspectRatio: '1/1',
                                width: '100%',
                                maxWidth: '100%',
                                margin: '0 auto'
                            }}
                        >
                            <Box
                                component="img"
                                src={about_us}
                                alt="Cinnamon Drink"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    filter: 'sepia(30%) contrast(110%)'
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Right: Text Content */}
                    <div className='w-full md:w-1/2 flex flex-col justify-center pl-0 md:pl-8 mt-8 md:mt-0'>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#D4C4A8',
                                    fontFamily: 'Playfair Display, serif',
                                    mb: 4,
                                    opacity: 0.9,
                                    fontSize: { xs: '1.5rem', md: '1.8rem' },
                                    textAlign: { xs: 'center', md: 'left' }
                                }}
                            >
                                Our Story
                            </Typography>

                            <Typography variant="body1" sx={{ color: '#E5DCC5', fontSize: '1.05rem', lineHeight: 2.2, fontFamily: 'Inter', mb: 3, fontWeight: 300, textAlign: { xs: 'center', md: 'left' } }}>
                                Welcome to
                                <span style={{
                                    fontFamily: '"Pinyon Script", cursive',
                                    fontSize: '3rem',
                                    color: '#D4C4A8',
                                    margin: '0 12px',
                                    verticalAlign: 'middle',
                                    lineHeight: 0
                                }}>
                                    Ceylon Cinnamon
                                </span>
                                your trusted partner for authentic Ceylon Cinnamon exports. Rooted in the lush landscapes of Sri Lanka, we take pride in offering the world's finest cinnamon, renowned for its unique aroma, delicate flavor, and unparalleled health benefits.
                            </Typography>

                            <Typography variant="body1" sx={{ color: '#E5DCC5', fontSize: '1.05rem', lineHeight: 2.2, fontFamily: 'Inter', fontWeight: 300, textAlign: { xs: 'center', md: 'left' } }}>
                                Our Story Our journey began with a passion for sharing the natural treasures of Sri Lanka with the world. With generations of experience in cultivating and processing Ceylon cinnamon, we are committed to preserving the authenticity and tradition that make our cinnamon truly exceptional.
                            </Typography>

                        </motion.div>
                    </div>
                </div>
            </Container>
        </Box>
    );
}
