import { motion } from "framer-motion";
import Logo from "../assets/images/e toll logo.svg";
import Background from "../assets/background/bgImage.png";

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#3B21A9] overflow-hidden"
    >
      <img src={Background} alt="Background" className="absolute bottom-0 left-0 w-auto h-45 object-cover" />
      <div className="relative z-10 flex flex-col items-center gap-8 px-4 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-160 h-160 flex items-center justify-center">
            <img src={Logo} alt="E Toll Logo" className="w-full h-full" />
          </div>
        </div>
        <div className="max-w-2xl text-white space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl font-light"
          >
            Selamat datang di E-TOLL.CO!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl sm:text-2xl font-light text-white/90"
          >
            Mari jelajahi dunia baru kemudahan dan kenyamanan bersama kami.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col w-full max-w-xs gap-4"
        >
          <button className="w-full h-12 text-lg bg-gray-100 hover:bg-gray-200 text-gray-900">Login</button>
          <button className="w-full h-12 text-lg text-white border border-white hover:bg-white/10">
            Daftar
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
