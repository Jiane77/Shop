
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {Star, ShoppingCart, Eye} from 'lucide-react'
import toast from 'react-hot-toast'
import { Product, useCartStore } from '../store/cartStore'

interface ProductCardProps {
  product: Product
  viewMode?: 'grid' | 'list'
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  const { addToCart } = useCartStore()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart(product)
    toast.success(`${product.name} ajouté au panier !`)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ))
  }

  if (viewMode === 'list') {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
      >
        <div className="flex">
          <div className="w-48 h-48 relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.stock < 10 && (
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                Stock limité
              </span>
            )}
          </div>
          
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  {product.description}
                </p>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {product.category}
                </span>
              </div>
              
              <div className="text-right">
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  {product.price.toLocaleString()} €
                </div>
                <div className="flex items-center justify-end space-x-1 mb-4">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-600 ml-1">
                    ({product.rating})
                  </span>
                </div>
                
                <div className="flex space-x-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Voir
                  </Link>
                  <motion.button
                    onClick={handleAddToCart}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Ajouter
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 product-card"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {product.stock < 10 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            Stock limité
          </span>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
          <Link
            to={`/product/${product.id}`}
            className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Voir détails
          </Link>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
            {product.category}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center space-x-1 mb-4">
          {renderStars(product.rating)}
          <span className="text-sm text-gray-600 ml-1">
            ({product.rating})
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary-600">
            {product.price.toLocaleString()} €
          </div>
          
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Ajouter
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
