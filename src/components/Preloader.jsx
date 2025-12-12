import React from 'react';
import { motion } from 'framer-motion';
import { appData } from '../data/appData';
import logoImg from '../assets/logo.png';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
            <div className="relative">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                >
                    <img src={logoImg} alt="Logo" className="w-24 h-auto md:w-32" />
                </motion.div>

                {/* Pulse Effect */}
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-col items-center gap-2"
            >
                <span className="text-xl font-heading font-bold text-text-main tracking-tighter">
                    {appData.general.nickname}
                    <span className="text-primary">.</span>
                </span>

                <div className="w-48 h-1 bg-surface-highlight rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="h-full bg-primary"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Preloader;
