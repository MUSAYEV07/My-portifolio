// Loader.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 text-white z-50"
        >
          <div className="flex flex-col items-center justify-center">
            {/* Spinner */}
            <motion.div
              className="w-20 h-20 rounded-full border-8 border-t-8 border-transparent border-t-white mb-6 shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />

            {/* Animated Text */}
            <motion.h2
              className="text-2xl font-bold tracking-wider"
              animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              Yuklanmoqda...
            </motion.h2>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-purple-200 text-blue-800 font-sans"
        >
          <div className="text-center">
            <h1 className="text-5xl font-extrabold mb-4">Sayt ochildi 🚀</h1>
            <p className="text-lg">Xush kelibsiz! Saytga kirish tayyor.</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}