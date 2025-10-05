
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {GraduationCap, MapPin, Calendar, Target} from 'lucide-react'

const About = () => {
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

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              À Propos de Moi
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez mon parcours, ma formation et mes aspirations professionnelles
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
                <h3 className="text-2xl font-semibold text-white mb-6">Mon Parcours</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Étudiant passionné en BTS SIO option SLAM (Solutions Logicielles et Applications Métiers), 
                  je me spécialise dans le développement d'applications web modernes et la programmation orientée objet.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Mon intérêt pour l'informatique a commencé dès le lycée, et aujourd'hui je développe 
                  mes compétences en PHP, JavaScript, et dans les frameworks comme Symfony et React.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Je suis particulièrement attiré par les défis techniques et l'innovation dans le domaine 
                  du développement web, avec un focus sur l'expérience utilisateur et les bonnes pratiques.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-semibold text-white mb-6">Formation Actuelle</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <GraduationCap className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">BTS SIO SLAM</h4>
                      <p className="text-gray-300 text-sm">Services Informatiques aux Organisations</p>
                      <p className="text-gray-300 text-sm">Spécialité : Solutions Logicielles et Applications Métiers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Lycée Technique</h4>
                      <p className="text-gray-300 text-sm">Lyon, France</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Calendar className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">2023 - 2025</h4>
                      <p className="text-gray-300 text-sm">Formation en cours (2ème année)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
                <h3 className="text-2xl font-semibold text-white mb-6">Objectifs Professionnels</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Target className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Court terme</h4>
                      <p className="text-gray-300 text-sm">
                        Réussir mon BTS et obtenir une alternance en développement web
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Target className="w-6 h-6 text-blue-400 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Moyen terme</h4>
                      <p className="text-gray-300 text-sm">
                        Poursuivre en licence professionnelle ou école d'ingénieur
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Target className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Long terme</h4>
                      <p className="text-gray-300 text-sm">
                        Devenir développeur full-stack senior ou lead developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="text-center bg-slate-700/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">2</div>
              <div className="text-white font-medium">Années d'études</div>
              <div className="text-gray-400 text-sm">En informatique</div>
            </div>
            <div className="text-center bg-slate-700/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">8</div>
              <div className="text-white font-medium">Semaines de stage</div>
              <div className="text-gray-400 text-sm">En entreprise</div>
            </div>
            <div className="text-center bg-slate-700/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-white font-medium">Technologies</div>
              <div className="text-gray-400 text-sm">Maîtrisées</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
