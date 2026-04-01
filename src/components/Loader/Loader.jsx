// AdvancedLoader.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdvancedLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return old + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-10 tracking-widest"
          >
            MY APP
          </motion.div>

          {/* Spinner */}
          <motion.div
            className="w-14 h-14 border-4 border-white/20 border-t-white rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />

          {/* Progress Bar */}
          <div className="w-64 h-1 bg-white/20 mt-10 rounded overflow-hidden">
            <motion.div
              className="h-full bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Percentage */}
          <motion.p
            className="mt-4 text-sm text-white/70"
            key={progress}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {progress}%
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h1 className="text-5xl font-extrabold mb-4 text-blue-900">
              Sayt ochildi 🚀
            </h1>
            <p className="text-lg text-blue-700">
              Premium loading tajribasi tayyor!
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}