import React, { useState } from 'react';

const ProductPage = () => {
    // Hard-coded product data
    const product = {
        id: '1',
        name: 'Luxe Perfume',
        description: 'A luxurious fragrance that captivates the senses.',
        price: 49.99,
        images: [
            'https://example.com/image1.jpg', // Replace with actual image URLs
            'https://example.com/image2.jpg',
            'https://example.com/image3.jpg'
        ],
        sizes: ['50ml', '100ml', '150ml']
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to go to the next image
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    };

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex - 1 + product.images.length) % product.images.length
        );
    };

    return (
        <div className="container mx-auto p-4" style={{ 
            background: 'linear-gradient(135deg, #f3e5ab, #f7c0a1, #e6b7d4)', 
            minHeight: '100vh' 
        }}>
            <div className="flex flex-col md:flex-row">
                {/* Image section */}
                <div className="relative md:w-1/2">
                    <img 
                        src={product.images[currentImageIndex]} 
                        alt={product.name}
                        className="h-96 w-full object-cover rounded-md"
                    />
                    <button 
                        onClick={prevImage} 
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-pink-600 bg-opacity-50 text-white p-2 rounded-l">
                        &#10094; {/* Left arrow */}
                    </button>
                    <button 
                        onClick={nextImage} 
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-pink-600 bg-opacity-50 text-white p-2 rounded-r">
                        &#10095; {/* Right arrow */}
                    </button>
                </div>
                
                {/* Product details section */}
                <div className="md:w-1/2 md:ml-4">
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <p className="mt-2 text-gray-600">{product.description}</p>
                    <p className="mt-4 font-semibold text-lg">${product.price}</p>
                    <h3 className="mt-4 text-xl font-semibold">Available Sizes</h3>
                    <ul className="list-disc list-inside">
                        {product.sizes.map((size, index) => (
                            <li key={index}>{size}</li>
                        ))}
                    </ul>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Share</button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;