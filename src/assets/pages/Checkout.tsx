
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Truck, CheckCircle, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useCartStore } from '../store/cartStore'

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCartStore()
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping')
  const [orderNumber, setOrderNumber] = useState('')

  const [shippingForm, setShippingForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'France'
  })

  const [paymentForm, setPaymentForm] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  })

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('payment')
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate payment processing
    const orderNum = 'CMD' + Math.random().toString(36).substr(2, 9).toUpperCase()
    setOrderNumber(orderNum)
    setStep('confirmation')
    clearCart()
    toast.success('Commande confirmée !')
  }

  const totalPrice = getTotalPrice()
  const shippingCost = totalPrice >= 50 ? 0 : 4.99
  const tax = totalPrice * 0.2
  const finalTotal = totalPrice + tax + shippingCost

  if (items.length === 0 && step !== 'confirmation') {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Panier vide</h2>
          <p className="text-gray-600 mb-6">Ajoutez des produits à votre panier avant de passer commande.</p>
          <Link to="/products" className="btn-primary">
            Voir les produits
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/cart"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au panier
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">
            Finaliser ma commande
          </h1>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center space-x-8">
            <div className={`flex items-center space-x-2 ${step === 'shipping' ? 'text-primary-600' : step === 'payment' || step === 'confirmation' ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'shipping' ? 'bg-primary-600 text-white' : step === 'payment' || step === 'confirmation' ? 'bg-green-600 text-white' : 'bg-gray-300'}`}>
                {step === 'payment' || step === 'confirmation' ? <CheckCircle className="w-5 h-5" /> : '1'}
              </div>
              <span className="font-medium">Livraison</span>
            </div>
            
            <div className={`w-16 h-0.5 ${step === 'payment' || step === 'confirmation' ? 'bg-green-600' : 'bg-gray-300'}`}></div>
            
            <div className={`flex items-center space-x-2 ${step === 'payment' ? 'text-primary-600' : step === 'confirmation' ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'payment' ? 'bg-primary-600 text-white' : step === 'confirmation' ? 'bg-green-600 text-white' : 'bg-gray-300'}`}>
                {step === 'confirmation' ? <CheckCircle className="w-5 h-5" /> : '2'}
              </div>
              <span className="font-medium">Paiement</span>
            </div>
            
            <div className={`w-16 h-0.5 ${step === 'confirmation' ? 'bg-green-600' : 'bg-gray-300'}`}></div>
            
            <div className={`flex items-center space-x-2 ${step === 'confirmation' ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'confirmation' ? 'bg-green-600 text-white' : 'bg-gray-300'}`}>
                {step === 'confirmation' ? <CheckCircle className="w-5 h-5" /> : '3'}
              </div>
              <span className="font-medium">Confirmation</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 'shipping' && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Truck className="w-6 h-6 text-primary-600" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    Informations de livraison
                  </h2>
                </div>

                <form onSubmit={handleShippingSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingForm.firstName}
                        onChange={(e) => setShippingForm({...shippingForm, firstName: e.target.value})}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingForm.lastName}
                        onChange={(e) => setShippingForm({...shippingForm, lastName: e.target.value})}
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={shippingForm.email}
                        onChange={(e) => setShippingForm({...shippingForm, email: e.target.value})}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={shippingForm.phone}
                        onChange={(e) => setShippingForm({...shippingForm, phone: e.target.value})}
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingForm.address}
                      onChange={(e) => setShippingForm({...shippingForm, address: e.target.value})}
                      className="input-field"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ville *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingForm.city}
                        onChange={(e) => setShippingForm({...shippingForm, city: e.target.value})}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Code postal *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingForm.postalCode}
                        onChange={(e) => setShippingForm({...shippingForm, postalCode: e.target.value})}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pays *
                      </label>
                      <select
                        required
                        value={shippingForm.country}
                        onChange={(e) => setShippingForm({...shippingForm, country: e.target.value})}
                        className="input-field"
                      >
                        <option value="France">France</option>
                        <option value="Belgique">Belgique</option>
                        <option value="Suisse">Suisse</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="w-full btn-primary">
                    Continuer vers le paiement
                  </button>
                </form>
              </motion.div>
            )}

            {step === 'payment' && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <CreditCard className="w-6 h-6 text-primary-600" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    Informations de paiement
                  </h2>
                </div>

                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Numéro de carte *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="1234 5678 9012 3456"
                      value={paymentForm.cardNumber}
                      onChange={(e) => setPaymentForm({...paymentForm, cardNumber: e.target.value})}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom sur la carte *
                    </label>
                    <input
                      type="text"
                      required
                      value={paymentForm.cardName}
                      onChange={(e) => setPaymentForm({...paymentForm, cardName: e.target.value})}
                      className="input-field"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date d'expiration *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="MM/AA"
                        value={paymentForm.expiryDate}
                        onChange={(e) => setPaymentForm({...paymentForm, expiryDate: e.target.value})}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        value={paymentForm.cvv}
                        onChange={(e) => setPaymentForm({...paymentForm, cvv: e.target.value})}
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setStep('shipping')}
                      className="flex-1 btn-secondary"
                    >
                      Retour
                    </button>
                    <button type="submit" className="flex-1 btn-primary">
                      Confirmer la commande
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 'confirmation' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center"
              >
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Commande confirmée !
                </h2>
                <p className="text-gray-600 mb-6">
                  Votre commande #{orderNumber} a été traitée avec succès.
                  Vous recevrez un email de confirmation sous peu.
                </p>
                <div className="space-y-4">
                  <Link
                    to="/products"
                    className="btn-primary"
                  >
                    Continuer mes achats
                  </Link>
                  <p className="text-sm text-gray-500">
                    Livraison estimée : 2-3 jours ouvrés
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Order Summary */}
          {step !== 'confirmation' && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-fit sticky top-8"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Récapitulatif
              </h3>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-gray-500 text-xs">Qté: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-medium">
                      {(item.price * item.quantity).toLocaleString()} €
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6 border-t border-gray-200 pt-4">
                <div className="flex justify-between text-sm">
                  <span>Sous-total</span>
                  <span>{totalPrice.toLocaleString()} €</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Livraison</span>
                  <span>{shippingCost === 0 ? 'Gratuite' : `${shippingCost} €`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>TVA</span>
                  <span>{tax.toLocaleString()} €</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t border-gray-200 pt-2">
                  <span>Total</span>
                  <span className="text-primary-600">{finalTotal.toLocaleString()} €</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Checkout
