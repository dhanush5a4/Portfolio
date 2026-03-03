import { motion } from 'framer-motion';
import { Cpu, GraduationCap } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-background">
            {/* Background Decorators */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent inline-block">About Me</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6 text-lg text-gray-300 leading-relaxed bg-white/[0.03] backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
                    >
                        <p>
                            I am a passionate <strong className="text-white font-semibold">Power Platform Developer</strong> with a strong drive to build scalable, intelligent, and highly automated solutions. My focus is on transforming complex business requirements into seamless, user-friendly applications.
                        </p>
                        <p>
                            Beyond traditional web development, I leverage the robust ecosystem of the Microsoft Power Platform to accelerate digital transformation, integrating data, automation, and AI deeply into core operations.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="group p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] flex gap-4"
                        >
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all shrink-0">
                                <GraduationCap size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">Education</h3>
                                <p className="text-primary font-medium">B.Tech</p>
                                <p className="text-gray-400 text-sm mt-1">Andhra Loyola Institute</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="group p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] flex gap-4"
                        >
                            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary/20 transition-all shrink-0">
                                <Cpu size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">Core Expertise</h3>
                                <p className="text-secondary font-medium mt-1">Microsoft Power Platform, Power Apps</p>
                                <p className="text-gray-400 text-sm mt-1">Automation, Data Integrations, React & 3D Web.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
