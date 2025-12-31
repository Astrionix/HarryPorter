export default function Footer() {
    return (
        <footer className="py-8 bg-midnight border-t border-gold/20 text-center">
            <p className="text-parchment/60 font-serif">
                &copy; {new Date().getFullYear()} Padala L M Ramachandra Reddy. Mischief Managed.
            </p>
        </footer>
    );
}
