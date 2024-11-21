import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const backgroundImages = [
    '/per1.jpg', 
    '/per2.jpg',
    '/per3.jpg',
    '/per4.jpg',
    '/per8.jpg',
    '/per9.jpg',
    '/per10.jpg',
    '/per12.jpg',
    '/per13.jpg'
];

const HomePage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Hard-coded product data
    const products = [
        {
            id: '1',
            name: 'Luxe Perfume',
            description: 'A luxurious fragrance that captivates the senses.',
            price: 49.99,
            image: '/per1.jpg' // Replace with actual image URL
        },
        {
            id: '2',
            name: 'Eau de Toilette',
            description: 'A fresh and vibrant scent for everyday wear.',
            price: 39.99,
            image: 'per2.jpg' // Replace with actual image URL
        },
        {
            id: '3',
            name: 'Floral Essence',
            description: 'A delicate blend of floral notes.',
            price: 29.99,
            image: 'per3.jpg' // Replace with actual image URL
        },
        {
            id: '4',
            name: 'Ocean Breeze',
            description: 'A refreshing scent inspired .',
            price: 34.99,
            image: 'per8.jpg' // Replace with actual image URL
        },
        
    ];

    // Image change effect every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 5000); 
        return () => clearInterval(interval);
    }, []); 
    
    return (
        <div className="homepage">
            <Navbar />
         
            <div
                id="home"
                className="relative h-screen bg-cover bg-center flex items-center justify-center transition-all duration-1000"
                style={{
                    backgroundImage: `url('${backgroundImages[currentImageIndex]}')`
                }}
            >
                {/* You can add any content here if needed */}
            </div>

            <section id="products" className="py-12">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8">Our Best-Selling Perfumes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;