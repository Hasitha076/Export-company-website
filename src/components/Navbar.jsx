import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Box, Typography, Drawer, List, ListItem, ListItemText, useScrollTrigger } from '@mui/material';
import { Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <AppBar
                component="nav"
                elevation={0}
                sx={{
                    backgroundColor: scrolled ? 'rgba(30, 18, 10, 0.9)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    transition: 'all 0.3s ease',
                    borderBottom: scrolled ? '1px solid rgba(212, 196, 168, 0.1)' : 'none'
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between', padding: '1rem 2rem' }}>
                    {/* Logo Replacement */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h5" component="div" sx={{ fontFamily: 'Playfair Display', color: '#D4C4A8', letterSpacing: '2px' }}>
                            <span className="text-3xl border-2 border-[#D4C4A8] p-1 mr-2 rounded-tl-xl rounded-br-xl inline-block w-10 h-10 text-center leading-7">C</span>
                            eylon Cinnamon
                        </Typography>
                    </Box>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ color: '#D4C4A8', zIndex: 1300 }}
                    >
                        <AnimatePresence mode="wait">
                            {mobileOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <X size={32} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <MenuIcon size={32} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.5 }}
                        className="fixed inset-0 z-40 bg-[#1E120A] flex flex-col"
                        style={{ paddingTop: '80px' }}
                    >
                        {/* <Box sx={{ p: 4, display: 'flex', justifyContent: 'flex-end' }}>
                            <IconButton onClick={handleDrawerToggle} sx={{ color: '#D4C4A8' }}>
                                <X size={32} />
                            </IconButton>
                        </Box> */}

                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={handleDrawerToggle}
                                    className="text-4xl md:text-6xl font-serif text-[#D4C4A8] hover:text-white transition-colors duration-300 no-underline"
                                >
                                    {item.name}
                                </a>
                            ))}

                            <Box sx={{ mt: 8, display: 'flex', gap: 4 }}>
                                <Typography sx={{ color: '#8B4513' }}>Facebook</Typography>
                                <Typography sx={{ color: '#8B4513' }}>Instagram</Typography>
                            </Box>
                        </Box>

                        {/* Background elements from image 3 could be positioned absolutely here */}
                        <div className="absolute left-0 bottom-0 opacity-20 pointer-events-none">
                            {/* Placeholder for decoration */}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
