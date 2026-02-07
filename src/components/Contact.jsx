import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';

export default function Contact() {
    return (
        <Box sx={{ pt: 12, pb: 4, px: 2, backgroundColor: '#140C06', borderTop: '1px solid rgba(139, 69, 19, 0.2)' }} id="contact">
            <Container maxWidth="lg">
                <Grid container spacing={8} justifyContent="space-between">
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                            <Typography variant="h4" sx={{ fontFamily: 'Playfair Display', color: '#E5DCC5' }}>
                                <span className="border border-[#D4C4A8] px-2 py-0 rounded-tl-lg rounded-br-lg mr-1 inline-block">C</span>
                                eylon Cinnamon
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: '#fff', maxWidth: 300 }}>
                            Premium Ceylon Cinnamon directly from the heritage of Sri Lanka to your doorstep.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ color: '#D4C4A8', mb: 3 }}>
                            Links
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {['Home', 'Our Story', 'Our Products', 'Why To Choose Us', 'Contact Us'].map((text) => (
                                <Link
                                    key={text}
                                    href={`#${text === 'Home' ? 'home' : text === 'Our Story' ? 'about' : text === 'Our Products' ? 'products' : text === 'Why To Choose Us' ? 'choose' : 'contact'}`}
                                    underline="none"
                                    sx={{
                                        color: '#A67B5B',
                                        fontSize: '1.2rem',
                                        fontFamily: 'Playfair Display',
                                        '&:hover': { color: '#E5DCC5', transition: 'all 0.3s ease' }
                                    }}
                                >
                                    {text}
                                </Link>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ color: '#D4C4A8', mb: 3 }}>
                            Contact Info:
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#A67B5B', mb: 1, '&:hover': { color: '#E5DCC5', transition: 'all 0.3s ease' } }}>
                            <a title='Click to mail' href="mailto:info@ceycennam.com">info@ceycennam.com</a>
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#A67B5B', '&:hover': { color: '#E5DCC5', transition: 'all 0.3s ease' } }}>
                            <a title='Click to call' href="tel:+94771234567">+94 77 123 4567</a>
                        </Typography>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid rgba(139, 69, 19, 0.1)', textAlign: 'center' }}>
                    <Typography variant="caption" sx={{ color: '#fff' }}>
                        © {new Date().getFullYear()} Ceylon Cinnamon. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
