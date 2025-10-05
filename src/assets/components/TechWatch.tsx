
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {Rss, ExternalLink, Calendar, TrendingUp, BookOpen, Globe} from 'lucide-react'

const TechWatch = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const articles = [
    {
      title: "L'évolution de JavaScript en 2024",
      description: "Les nouvelles fonctionnalités ES2024 et leur impact sur le développement web moderne.",
      source: "MDN Web Docs",
      date: "15 Mars 2024",
      category: "Frontend",
      image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg",
      link: "#"
    },
    {
      title: "Sécurité des APIs REST",
      description: "Meilleures pratiques pour sécuriser les APIs et protéger les données utilisateurs.",
      source: "OWASP",
      date: "10 Mars 2024",
      category: "Sécurité",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
      link: "#"
    },
    {
      title: "Docker et DevOps",
      description: "Comment Docker révolutionne le déploiement et la gestion des applications.",
      source: "Docker Blog",
      date: "5 Mars 2024",
      category: "DevOps",
      image: "https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg",
      link: "#"
    },
    {
      title: "Intelligence Artificielle en développement",
      description: "L'impact de l'IA sur les pratiques de développement et les outils émergents.",
      source: "GitHub Blog",
      date: "1 Mars 2024",
      category: "IA",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg",
      link: "#"
    }
  ]

  const sources = [
    {
      name: "Stack Overflow",
      description: "Communauté de développeurs",
      icon: <Globe className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "GitHub",
      description: "Projets open source",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "MDN Web Docs",
      description: "Documentation web",
      icon: <Rss className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Dev.to",
      description: "Articles techniques",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section id="techwatch" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Veille Technologique
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ma veille sur les dernières tendances et innovations du développement web
            </p>
          </motion.div>

          {/* Articles récents */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <Rss className="w-6 h-6 text-purple-400 mr-3" />
              Articles Récents
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <motion.div
                  key={article.title}
                  variants={itemVariants}
                  className="bg-slate-700/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-3">{article.title}</h4>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{article.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <span>{article.source}</span>
                    </div>

                    <motion.a
                      href={article.link}
                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Lire l'article</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sources de veille */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <BookOpen className="w-6 h-6 text-blue-400 mr-3" />
              Sources de Veille
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sources.map((source, index) => (
                <motion.div
                  key={source.name}
                  variants={itemVariants}
                  className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 text-center"
                >
                  <div className={`bg-gradient-to-r ${source.color} p-4 rounded-lg mx-auto w-fit mb-4`}>
                    {source.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{source.name}</h4>
                  <p className="text-gray-300 text-sm">{source.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Méthode de veille */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 text-purple-400 mr-3" />
                Ma Méthode de Veille
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-medium mb-4">Outils utilisés :</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Feedly pour l'agrégation RSS</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Twitter pour les actualités tech</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>GitHub Trending</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Newsletters spécialisées</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-4">Fréquence :</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Quotidienne : actualités tech</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Hebdomadaire : articles approfondis</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span>Mensuelle : synthèse et archivage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid md:grid-cols-4 gap-6"
          >
            <div className="text-center bg-slate-700/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-white font-medium">Articles lus</div>
              <div className="text-gray-400 text-sm">Ce mois-ci</div>
            </div>
            <div className="text-center bg-slate-700/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">15</div>
              <div className="text-white font-medium">Sources suivies</div>
              <div className="text-gray-400 text-sm">Régulièrement</div>
            </div>
            <div className="text-center bg-slate-700/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">5</div>
              <div className="text-white font-medium">Technologies testées</div>
              <div className="text-gray-400 text-sm">Cette année</div>
            </div>
            <div className="text-center bg-slate-700/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24h</div>
              <div className="text-white font-medium">Temps/semaine</div>
              <div className="text-gray-400 text-sm">Consacré à la veille</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechWatch
