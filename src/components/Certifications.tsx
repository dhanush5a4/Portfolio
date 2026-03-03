import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cpu, Layers, Settings } from 'lucide-react';

const Certifications = () => {
    const certificationsList = [
        {
            title: "Microsoft Certified: Power Platform Developer Associate",
            icon: Cpu,
            color: "from-blue-500 to-cyan-500",
            shadow: "hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
        },
        {
            title: "Microsoft Certified: Power Platform Functional Consultant Associate",
            icon: ShieldCheck,
            color: "from-emerald-500 to-teal-500",
            shadow: "hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]"
        },
        {
            title: "Microsoft Power Up Program – Pathfinder (Power Platform)",
            icon: Award,
            color: "from-purple-500 to-pink-500",
            shadow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]"
        },
        {
            title: "Microsoft Applied Skills: Create and manage model-driven apps with Power Apps and Dataverse",
            icon: Layers,
            color: "from-orange-500 to-red-500",
            shadow: "hover:shadow-[0_0_25px_rgba(249,115,22,0.3)]"
        },
        {
            title: "Microsoft Applied Skills: Create and manage automated processes by using Power Automate",
            icon: Settings,
            color: "from-indigo-500 to-blue-500",
            shadow: "hover:shadow-[0_0_25px_rgba(99,102,241,0.3)]"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section id="certifications" className="py-24 relative overflow-hidden bg-background">
            {/* Background Decorators */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent inline-block">Certifications</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mt-4 rounded-full"></div>
                    <p className="mt-6 text-gray-400 max-w-2xl text-lg">
                        Recognized expertise and continuous learning in Microsoft Power Platform technologies.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {certificationsList.map((cert, index) => {
                        const Icon = cert.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className={`group bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 flex flex-col items-start ${cert.shadow} cursor-pointer relative overflow-hidden`}
                            >
                                {/* Subtle Hover Glow Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl pointer-events-none z-0"></div>

                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${cert.color} bg-opacity-10 shadow-lg relative z-10`}>
                                    <div className="absolute inset-0 bg-white/20 rounded-xl backdrop-blur-md mix-blend-overlay"></div>
                                    <Icon className="text-white w-7 h-7 relative z-10 drop-shadow-md" />
                                </div>

                                <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors leading-snug relative z-10">
                                    {cert.title}
                                </h3>

                                <div className="mt-auto pt-6 w-full relative z-10">
                                    <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className={`h-full w-0 group-hover:w-full bg-gradient-to-r ${cert.color} transition-all duration-500 ease-out`}></div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
