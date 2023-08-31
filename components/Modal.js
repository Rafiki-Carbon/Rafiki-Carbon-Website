import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex justify-center items-center z-50"
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="bg-white rounded-lg p-6 z-10"
          >
            {children}
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-gray-400 text-white rounded-lg"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
