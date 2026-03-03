import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            institution: "Andhra Loyola Institute of Engineering & Technology",
            degree: "B.Tech, Computer Science",
            duration: "Jan 2020 - Jun 2024",
            grade: "8.46 CGPA"
        },
        {
            institution: "Narayana Junior College",
            degree: "Intermediate, MPC",
            duration: "2018 - 2020",
            grade: "9.54 CGPA"
        }
    ];

    return (
        <section id="education" className="py-24 relative overflow-hidden bg-background">
            {/* Background Decorators */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent inline-block">Education</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
                            className="group perspective-1000"
                        >
                            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-primary/40 transition-all duration-300 shadow-xl hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] relative overflow-hidden h-full flex flex-col justify-between">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-all duration-500"></div>

                                <div className="relative z-10">
                                    <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(14,165,233,0.1)]">
                                        <GraduationCap className="text-primary w-8 h-8" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{edu.institution}</h3>
                                    <h4 className="text-xl text-gray-300 font-medium mb-6">{edu.degree}</h4>
                                </div>

                                <div className="relative z-10 space-y-3 mt-4">
                                    <div className="flex items-center gap-3 text-gray-400 bg-black/20 p-3 rounded-xl border border-white/5">
                                        <Calendar size={18} className="text-primary/70" />
                                        <span className="font-medium text-sm">{edu.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-400 bg-black/20 p-3 rounded-xl border border-white/5">
                                        <Award size={18} className="text-accent/70" />
                                        <span className="font-medium text-sm">Grade: <span className="text-white">{edu.grade}</span></span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
