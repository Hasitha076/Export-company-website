import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import hero_image from '../assets/hero_bg.jpg';

export default function Hero() {
    return (
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                background: `linear-gradient(rgba(30, 18, 10, 0.7), rgba(30, 18, 10, 0.5)), url(${hero_image})`, // Cinnamon sticks/powder image
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                overflow: 'hidden',
                backgroundAttachment: 'fixed',

            }}
            id="home"
        >
            {/* Animated Dust Particles (CSS or Canvas could be better, simplified here) */}

            <Box sx={{ position: 'relative', zIndex: 10, px: 2, maxWidth: '900px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <Typography variant="h5" sx={{
                        color: '#E5DCC5',
                        fontFamily: 'Inter',
                        fontWeight: 300,
                        mb: 2,
                        letterSpacing: '1px'
                    }}>
                        Spice Up Your Life with
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <Typography variant="h1" sx={{
                        fontSize: { xs: '3rem', md: '100px' },
                        color: '#D4C4A8',
                        fontFamily: 'Playfair Display',
                        fontStyle: 'italic',
                        mb: 2,
                        textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                    }}>
                        Ceylon Cinnamon.
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <Typography variant="h4" sx={{
                        color: '#F5EFEB',
                        fontFamily: 'Playfair Display',
                        fontWeight: 400,
                        letterSpacing: '1px',
                        mt: 4
                    }}>
                        Where Quality Meets Authenticity.
                    </Typography>
                </motion.div>
            </Box>
        </Box>
    );
}
