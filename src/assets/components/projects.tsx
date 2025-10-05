
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {ExternalLink, Github, Code, Database, Globe} from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: "Système de Gestion Scolaire",
      description: "Application web complète pour la gestion d'établissements scolaires avec authentification, gestion des élèves, professeurs, et planning des cours.",
      image: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg",
      technologies: ["PHP", "Symfony", "MySQL", "Twig", "Bootstrap"],
      features: [
        "Authentification multi-rôles",
        "Gestion des utilisateurs",
        "Planning interactif",
        "Génération de rapports PDF"
      ],
      github: "#",
      demo: "#",
      category: "Full Stack"
    },
    {
      title: "API REST E-commerce",
      description: "API REST sécurisée pour une plateforme e-commerce avec gestion des produits, commandes, et système de paiement intégré.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Stripe"],
      features: [
        "Authentification JWT",
        "CRUD complet",
        "Paiement sécurisé",
        "Documentation Swagger"
      ],
      github: "#",
      demo: "#",
      category: "Backend"
    },
    {
      title: "Dashboard Analytics",
      description: "Interface de visualisation de données avec graphiques interactifs et tableaux de bord personnalisables pour le suivi des KPIs.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      technologies: ["React", "TypeScript", "Chart.js", "Tailwind", "Firebase"],
      features: [
        "Graphiques interactifs",
        "Filtres avancés",
        "Export de données",
        "Interface responsive"
      ],
      github: "#",
      demo: "#",
      category: "Frontend"
    },
    {
      title: "Application Mobile de Suivi",
      description: "Application mobile pour le suivi d'activités personnelles avec synchronisation cloud et notifications push.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      features: [
        "Synchronisation cloud",
        "Notifications push",
        "Mode hors ligne",
        "Géolocalisation"
      ],
      github: "#",
      demo: "#",
      category: "Mobile"
    },
    {
      title: "Plateforme de Blog",
      description: "CMS personnalisé avec éditeur WYSIWYG, système de commentaires, et optimisation SEO pour la création de contenu.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      technologies: ["PHP", "Laravel", "Vue.js", "MySQL", "Redis"],
      features: [
        "Éditeur WYSIWYG",
        "Système de commentaires",
        "Optimisation SEO",
        "Cache intelligent"
      ],
      github: "#",
      demo: "#",
      category: "Full Stack"
    },
    {
      title: "Outil de Monitoring",
      description: "Système de surveillance d'infrastructure avec alertes en temps réel et tableaux de bord pour DevOps.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      technologies: ["Python", "Django", "PostgreSQL", "Docker", "Grafana"],
      features: [
        "Monitoring temps réel",
        "Alertes automatiques",
        "Métriques personnalisées",
        "Intégration Slack"
      ],
      github: "#",
      demo: "#",
      category: "DevOps"
    }
  ]

  const categories = ["Tous", "Full Stack", "Frontend", "Backend", "Mobile", "DevOps"]
  const [selectedCategory, setSelectedCategory] = React.useState("Tous")

  const filteredProjects = selectedCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend": return <Globe className="w-4 h-4" />
      case "Backend": return <Database className="w-4 h-4" />
      case "Full Stack": return <Code className="w-4 h-4" />
      default: return <Code className="w-4 h-4" />
    }
  }

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Mes Projets
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Découvrez les projets que j'ai réalisés durant ma formation et mes projets personnels
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-slate-700/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-500/90 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-white font-medium text-sm mb-2">Fonctionnalités :</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-gray-300 text-xs flex items-center">
                        <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-slate-800/50 text-gray-300 px-2 py-1 rounded text-xs border border-slate-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    className="flex items-center space-x-2 bg-slate-800/50 text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-slate-700/50 hover:text-white transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg text-sm hover:bg-purple-500/30 hover:text-purple-200 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Démo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Stats */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          <div className="text-center bg-slate-700/30 rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">{projects.length}</div>
            <div className="text-white font-medium">Projets Réalisés</div>
            <div className="text-gray-400 text-sm">En formation</div>
          </div>
          <div className="text-center bg-slate-700/30 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
            <div className="text-white font-medium">Technologies</div>
            <div className="text-gray-400 text-sm">Utilisées</div>
          </div>
          <div className="text-center bg-slate-700/30 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
            <div className="text-white font-medium">Commits</div>
            <div className="text-gray-400 text-sm">Sur GitHub</div>
          </div>
          <div className="text-center bg-slate-700/30 rounded-xl p-6">
            <div className="text-3xl font-bold text-orange-400 mb-2">3</div>
            <div className="text-white font-medium">Catégories</div>
            <div className="text-gray-400 text-sm">De projets</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
