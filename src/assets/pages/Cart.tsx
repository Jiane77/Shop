
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {Trash2, Plus, Minus, ShoppingBag, ArrowRight} from 'lucide-react'
import toast from 'react-hot-toast'
import { useCartStore } from '../store/cartStore'

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCartStore()

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    updateQuantity(productId, newQuantity)
    if (newQuantity === 0) {
      toast.success('Produit supprimé du panier')
    }
  }

  const handleRemoveItem = (productId: number, productName: string) => {
    removeFromCart(productId)
    toast.success(`${productName} supprimé du panier`)
  }

  const handleClearCart = () => {
    clearCart()
    toast.success('Panier vidé')
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto" />
            <h2 className="text-3xl font-bold text-gray-800">
              Votre panier est vide
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez nos produits et ajoutez-les à votre panier
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Voir les produits
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Mon Panier
          </h1>
          <p className="text-gray-600">
            {items.length} article{items.length > 1 ? 's' : ''} dans votre panier
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-2">
                    <Link
                      to={`/product/${item.id}`}
                      className="text-lg font-semibold text-gray-800 hover:text-primary-600 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {item.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      Catégorie: {item.category}
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        className="quantity-btn"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= item.stock}
                        className="quantity-btn disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-bold text-primary-600">
                        {(item.price * item.quantity).toLocaleString()} €
                      </div>
                      <div className="text-sm text-gray-500">
                        {item.price.toLocaleString()} € / unité
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveItem(item.id, item.name)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-between items-center pt-4"
            >
              <button
                onClick={handleClearCart}
                className="text-red-500 hover:text-red-700 font-medium transition-colors duration-200"
              >
                Vider le panier
              </button>
              
              <Link
                to="/products"
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
              >
                Continuer mes achats
              </Link>
            </motion.div>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-fit sticky top-8"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Résumé de la commande
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Sous-total</span>
                <span className="font-medium">
                  {getTotalPrice().toLocaleString()} €
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Livraison</span>
                <span className="font-medium text-green-600">
                  {getTotalPrice() >= 50 ? 'Gratuite' : '4,99 €'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">TVA (20%)</span>
                <span className="font-medium">
                  {(getTotalPrice() * 0.2).toLocaleString()} €
                </span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-800">Total</span>
                  <span className="text-xl font-bold text-primary-600">
                    {(getTotalPrice() * 1.2 + (getTotalPrice() < 50 ? 4.99 : 0)).toLocaleString()} €
                  </span>
                </div>
              </div>
            </div>

            {getTotalPrice() < 50 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800">
                  Ajoutez {(50 - getTotalPrice()).toLocaleString()} € pour bénéficier de la livraison gratuite !
                </p>
              </div>
            )}

            <Link
              to="/checkout"
              className="w-full btn-primary flex items-center justify-center"
            >
              Procéder au paiement
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Paiement sécurisé • Livraison rapide • Satisfaction garantie
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Cart
