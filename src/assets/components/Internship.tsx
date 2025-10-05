
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {Building2, Calendar, MapPin, Users, Code2, Award} from 'lucide-react'

const Internship = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  const missions = [
    "Développement d'une application web de gestion des stocks",
    "Intégration d'APIs REST pour la synchronisation des données",
    "Optimisation des performances et de la sécurité",
    "Rédaction de documentation technique",
    "Participation aux réunions d'équipe et méthodologie Agile"
  ]

  const skills = [
    { name: "Travail en équipe", icon: <Users className="w-5 h-5" /> },
    { name: "Méthodologie Agile", icon: <Award className="w-5 h-5" /> },
    { name: "Développement PHP/Symfony", icon: <Code2 className="w-5 h-5" /> },
    { name: "Gestion de projet", icon: <Building2 className="w-5 h-5" /> }
  ]

  return (
    <section id="internship" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Expérience Professionnelle
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mon stage en entreprise et les compétences professionnelles acquises
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
                <div className="flex items-center mb-6">
                  <Building2 className="w-8 h-8 text-blue-400 mr-4" />
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Stage de Développement</h3>
                    <p className="text-blue-300">TechSolutions SARL</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-white font-medium">Durée</p>
                      <p className="text-gray-300 text-sm">8 semaines</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-white font-medium">Lieu</p>
                      <p className="text-gray-300 text-sm">Lyon, France</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">À propos de l'entreprise</h4>
                  <p className="text-gray-300 leading-relaxed">
                    TechSolutions est une PME spécialisée dans le développement de solutions logicielles 
                    pour les entreprises. L'équipe de 15 développeurs travaille principalement sur des 
                    applications web et mobiles pour divers secteurs d'activité.
                  </p>
                </div>
              </div>

              <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Code2 className="w-6 h-6 text-green-400 mr-3" />
                  Compétences Développées
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg"
                    >
                      <div className="text-green-400">{skill.icon}</div>
                      <span className="text-gray-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
                <h4 className="text-xl font-semibold text-white mb-6">Missions Principales</h4>
                <div className="space-y-4">
                  {missions.map((mission, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">{mission}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-green-500/20">
                <h4 className="text-xl font-semibold text-white mb-6">Technologies Utilisées</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['PHP', 'Symfony', 'MySQL', 'JavaScript', 'Bootstrap', 'Git', 'Docker', 'Postman', 'Jira'].map((tech) => (
                    <div key={tech} className="bg-slate-800/50 text-center py-2 px-3 rounded-lg">
                      <span className="text-gray-300 text-sm font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
                <h4 className="text-xl font-semibold text-white mb-4">Bilan du Stage</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Cette expérience m'a permis de mettre en pratique mes connaissances théoriques 
                  dans un environnement professionnel réel. J'ai pu découvrir les enjeux du 
                  développement en équipe et l'importance des bonnes pratiques.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Le stage a renforcé ma motivation pour poursuivre dans le développement web 
                  et m'a donné une vision claire de mes objectifs professionnels.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="text-center bg-slate-700/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">8</div>
              <div className="text-white font-medium">Semaines</div>
              <div className="text-gray-400 text-sm">D'expérience</div>
            </div>
            <div className="text-center bg-slate-700/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">3</div>
              <div className="text-white font-medium">Projets</div>
              <div className="text-gray-400 text-sm">Développés</div>
            </div>
            <div className="text-center bg-slate-700/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">15</div>
              <div className="text-white font-medium">Collaborateurs</div>
              <div className="text-gray-400 text-sm">Dans l'équipe</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Internship
