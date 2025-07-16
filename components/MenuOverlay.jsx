"use client"

import { motion, AnimatePresence } from "framer-motion"

const projects = [
  { name: "HTML5", icon: "/logos/lhtml.png", color: "bg-orange-500" },
  { name: "CSS3", icon: "/logos/lcss.png", color: "bg-blue-500" },
  { name: "JavaScript", icon: "/logos/ljs.png", color: "bg-yellow-400" },
  { name: "React", icon: "/logos/lwor.png", color: "bg-cyan-400" },
  { name: "Next.js", icon: "/logos/lnext.png", color: "bg-gray-700" },
  { name: "Tailwind", icon: "/logos/ltailwind.png", color: "bg-teal-500" },
]

export default function MenuOverlay({ show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-black via-gray-900 to-black text-white font-azonix overflow-hidden flex flex-col"
        >
          {/* Header mejorado */}
          <div className="flex items-center justify-between p-6 border-b border-cyan-400/20 bg-black/50 backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-cyan-400">Proyectos</h1>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-10 h-10 bg-cyan-500 text-black rounded-full font-bold hover:bg-cyan-400 transition-all duration-300 hover:scale-110"
            >
              ✕
            </button>
          </div>

          {/* Grid de iconos mejorado */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6 overflow-y-auto">
            {projects.map((proj, index) => (
              <motion.div
                key={proj.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl bg-black/30 backdrop-blur-sm border border-cyan-400/20 shadow-lg cursor-pointer hover:border-cyan-400/50 transition-all duration-300`}
              >
                <div className="p-4 bg-white rounded-full mb-3 shadow-lg">
                  <img src={proj.icon || "/placeholder.svg"} alt={proj.name} className="w-12 h-12 object-contain" />
                </div>
                <span className="text-sm font-semibold text-center">{proj.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Footer mejorado */}
          <div className="p-6 border-t border-cyan-400/20 bg-black/50 backdrop-blur-sm">
            <div className="flex justify-center">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <span>←</span> Volver al inicio
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
