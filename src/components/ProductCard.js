import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="transform hover:scale-105 transition duration-300">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-transparent hover:border-pink-400">
                <div className="overflow-hidden">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="h-48 w-full object-cover transition-transform duration-300 transform hover:scale-110" 
                    />
                </div>
                <div 
                    className="p-4 transition duration-300"
                    style={{ 
                        background: 'linear-gradient(135deg, #f8c9d3, #fdf7b5, #d8c6a1)' 
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(135deg, #a8e6cf, #dcedc1, #ffd3b6)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(135deg, #f8c9d3, #fdf7b5, #d8c6a1)'}
                >
                    <h2 className="text-lg font-bold">{product.name}</h2>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="mt-2 font-semibold">${product.price}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;