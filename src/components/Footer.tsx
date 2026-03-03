const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-8 border-t border-white/10 bg-black/50 backdrop-blur-md relative z-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
                <p className="text-gray-400 text-sm md:text-base text-center font-medium">
                    Built by <span className="text-white">Pamarthi Dhanush</span> | Power Platform Developer
                </p>
                <p className="text-gray-500 text-xs mt-2">
                    &copy; {currentYear} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
