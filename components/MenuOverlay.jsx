// src/components/MenuOverlay.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { name: "HTML5", icon: "/logos/lhtml.png", color: "bg-orange-500" },
  { name: "CSS3", icon: "/logos/lcss.png", color: "bg-blue-500" },
  { name: "JavaScript", icon: "/logos/ljs.png", color: "bg-yellow-400" },
  { name: "React", icon: "/logos/lwor.png", color: "bg-cyan-400" },
  { name: "Next.js", icon: "/logos/lnext.png", color: "bg-gray-700" },
  { name: "Tailwind", icon: "/logos/ltailwind.png", color: "bg-teal-500" },
  // Agrega más proyectos aquí...
];

export default function MenuOverlay({ show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-black text-white font-azonix overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6">
            <h1 className="text-4xl">Proyectos</h1>
            <button
              onClick={onClose}
              className="text-xl font-bold px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition"
            >
              ✕
            </button>
          </div>

          {/* Grid de iconos */}
          <div className="flex-1 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 p-6">
            {projects.map((proj) => (
              <motion.div
                key={proj.name}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl ${proj.color}/20 backdrop-blur-sm shadow-lg cursor-pointer`}
              >
                <div className="p-3 bg-white rounded-full mb-2">
                  <img
                    src={proj.icon}
                    alt={proj.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="mt-2 text-sm">{proj.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Footer con botón Volver */}
          <div className="p-6 flex justify-center">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition"
            >
              Volver al inicio
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
