const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full bg-green-100 text-center p-4 shadow-lg">
            <p className="text-lg font-medium">© {new Date().getFullYear()} CheatMeal. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-2">
                <a href="/about" className="hover:text-green-600">About Us</a>
                <a href="/contact" className="hover:text-green-600">Contact</a>
                <a href="/grocery" className="hover:text-green-600">Grocery</a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">GitHub</a>
            </div>
        </footer>
    );
};

export default Footer;
