
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {Code, Database, Globe, Settings} from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Bootstrap", level: 85 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      title: "Backend",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "PHP", level: 85 },
        { name: "Symfony", level: 75 },
        { name: "Twig", level: 80 },
        { name: "Node.js", level: 70 },
        { name: "Python", level: 65 },
        { name: "Java", level: 60 }
      ]
    },
    {
      title: "Bases de données",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "SQL Server", level: 65 }
      ]
    },
    {
      title: "Outils & Méthodologies",
      icon: <Settings className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Agile/Scrum", level: 80 },
        { name: "UML", level: 75 },
        { name: "VS Code", level: 90 },
        { name: "PhpStorm", level: 80 }
      ]
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
    <section id="skills" className="py-20">
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
            Mes Compétences
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Technologies et outils que je maîtrise dans le cadre de ma formation BTS SIO SLAM
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: (index * 0.2) + (skillIndex * 0.1),
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Certifications en cours</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Certification CNIL</h4>
                <p className="text-gray-300 text-sm">Protection des données personnelles</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Symfony Certification</h4>
                <p className="text-gray-300 text-sm">Développement web avancé</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">AWS Cloud Practitioner</h4>
                <p className="text-gray-300 text-sm">Services cloud Amazon</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
