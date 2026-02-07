import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { Award, Sprout, Globe, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import choose_us from '../assets/choose_us_section.jpg';


const features = [
    {
        title: 'Premium Quality',
        description: 'We ensure that every stick, quill, and powder meets the highest quality standards.',
        icon: <Award size={40} className="text-[#D4C4A8]" />
    },
    {
        title: 'Ethical Practices',
        description: 'We work closely with local farmers, empowering communities and ensuring fair wages.',
        icon: <Sprout size={40} className="text-[#D4C4A8]" />
    },
    {
        title: 'Global Reach',
        description: 'Our products are trusted by wholesalers, retailers, and food manufacturers across the globe.',
        icon: <Globe size={40} className="text-[#D4C4A8]" />
    },
    {
        title: 'Customer Satisfaction',
        description: 'We go the extra mile to ensure your experience with us is seamless and fulfilling.',
        icon: <Star size={40} className="text-[#D4C4A8]" />
    }
];

export default function WhyChooseUs() {
    return (
        <Box sx={{ py: 12, px: 2, backgroundColor: '#4A3728', backgroundImage: 'url(https://www.transparenttextures.com/patterns/aged-paper.png)' }} id="features">
            <Container maxWidth="lg">
                <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16'>
                    <div className='w-full md:w-1/2 flex justify-center'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            style={{ height: '100%' }}
                        >
                            <Box
                                component="img"
                                src={choose_us}
                                sx={{ width: '100%', maxWidth: '520px', height: 'auto', objectFit: 'cover', borderRadius: '30px', margin: '0 auto', display: 'block' }}
                                alt="Cinnamon sticks in bowl"
                            />
                        </motion.div>
                    </div>
                    <div className='w-full md:w-1/2 mt-8 md:mt-0 pl-0 md:pl-8'>
                        <Typography variant="overline" sx={{ color: '#D4C4A8', fontSize: '1.2rem', textTransform: 'none', display: 'block', mb: 6, textAlign: { xs: 'center', md: 'left' } }}>
                            Why To Choose Us
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6 border-b border-[#D4C4A8]/20 pb-6 last:border-0"
                                >
                                    <Box sx={{ minWidth: 50 }}>
                                        {feature.icon}
                                    </Box>
                                    <Box>
                                        <Typography variant="h5" sx={{ color: '#D4C4A8', fontFamily: 'Playfair Display', mb: 1 }}>
                                            {feature.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: '#D4C4A8', fontFamily: 'Inter', fontWeight: 300, opacity: 0.8 }}>
                                            {feature.description}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            ))}
                        </Box>
                    </div>
                </div>
            </Container>
        </Box>
    );
}
