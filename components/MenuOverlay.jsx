"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function MenuOverlay({ show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-black text-white font-azonix overflow-hidden"
        >
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-4xl mb-8">Menú Proyectos 📱✨</h1>
            {/* Aquí tu grid de íconos */}
            <button
              onClick={onClose}
              className="mt-8 px-6 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Volver al inicio
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
