type ButtonLinkProps = {
    secao: string;
    texto: string;
}

export const ButtonLink = ({ secao, texto }: ButtonLinkProps) => {
    return(
        <a
            href={secao}
            className="rounded-lg border border-transparent bg-accent px-6 py-3 text-[0.95rem] font-semibold text-white transition-colors hover:bg-accent-hover motion-reduce:transition-none"
        >
            {texto}
        </a>
    )
}