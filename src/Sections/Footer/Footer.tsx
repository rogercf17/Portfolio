export default function Footer() {
    const ano = new Date().getFullYear()

    return(
        <footer 
            id="footer" 
            className="w-full border-t border-line 
            bg-canvas py-8 text-center text-sm text-muted"
        >
            <p>&copy; {ano} Roger Cardoso Ferreira. Todos os direitos reservados.</p>
        </footer>
    )
}