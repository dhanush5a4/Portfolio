import { motion } from 'framer-motion';
import { Briefcase, MapPin } from "lucide-react";

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden bg-background">
            {/* Background Decorators */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent inline-block">Experience</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mt-4 rounded-full"></div>
                </motion.div>

                <div className="relative lg:mx-auto max-w-4xl">
                    <div className="absolute left-[39px] lg:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform lg:-translate-x-1/2 z-0"></div>

                    <div className="space-y-24">
                        {/* Item 1 */}
                        <div className="relative z-10 group">
                            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className="w-full lg:w-5/12 pl-24 lg:pl-0 lg:text-right pr-0 lg:pr-12 mt-6 lg:mt-0 order-2 lg:order-1"
                                >
                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium mb-4 shadow-[0_0_15px_rgba(14,165,233,0.1)]">
                                        Jun 2025 - Present
                                    </span>
                                    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-primary/40 transition-all duration-300 shadow-xl hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors relative z-10">Power Platform Analyst</h3>
                                        <h4 className="text-xl text-gray-300 font-medium mb-4 relative z-10">Synapx</h4>
                                        <p className="text-gray-400 leading-relaxed mb-4 relative z-10">
                                            Driving innovation through Power Platform solutions, optimizing workflows, and delivering impactful enterprise applications.
                                        </p>
                                        <div className="flex items-center gap-2 text-gray-500 lg:justify-end relative z-10">
                                            <MapPin size={16} className="text-primary" /> Hybrid, Hyderabad
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 }}
                                    className="absolute left-6 lg:left-1/2 bg-background border-[3px] border-primary shadow-[0_0_20px_rgba(14,165,233,0.5)] w-10 h-10 rounded-full transform -translate-y-1/2 lg:-translate-x-1/2 flex items-center justify-center top-[30px] lg:top-1/2 z-20 transition-transform group-hover:scale-125 duration-300 order-1"
                                >
                                    <div className="w-3 h-3 rounded-full bg-primary animate-ping opacity-75"></div>
                                    <div className="w-2 h-2 rounded-full bg-primary absolute"></div>
                                </motion.div>

                                <div className="w-full lg:w-5/12 order-3"></div>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="relative z-10 group">
                            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                                <div className="w-full lg:w-5/12 hidden lg:block order-1"></div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 }}
                                    className="absolute left-6 lg:left-1/2 bg-background border-[3px] border-white/20 group-hover:border-secondary w-10 h-10 rounded-full transform -translate-y-1/2 lg:-translate-x-1/2 flex items-center justify-center top-[30px] lg:top-1/2 z-20 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] order-1"
                                >
                                    <Briefcase size={14} className="text-gray-400 group-hover:text-secondary transition-colors" />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className="w-full lg:w-5/12 pl-24 lg:pl-12 mt-6 lg:mt-0 order-2"
                                >
                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 font-medium mb-4 group-hover:border-secondary/30 group-hover:text-secondary group-hover:bg-secondary/10 transition-all">
                                        May 2024 - Jun 2025
                                    </span>
                                    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-secondary/40 transition-all duration-300 shadow-xl hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors relative z-10">Associate Technical Consultant</h3>
                                        <h4 className="text-xl text-gray-300 font-medium mb-4 relative z-10">AdyatanTech</h4>
                                        <p className="text-gray-400 leading-relaxed mb-4 relative z-10">
                                            Focused on Microsoft Power Platform and Power Apps. Architected custom solutions, unified data ecosystems, and accelerated business automations.
                                        </p>
                                        <div className="flex items-center gap-2 text-gray-500 relative z-10">
                                            <MapPin size={16} className="text-secondary" /> Hyderabad
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
