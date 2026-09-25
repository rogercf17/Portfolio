import { ProfileResponse } from '../../components/ProfileResponse/ProfileResponse'
import { ButtonLink } from '../../components/ButtonLink/ButtonLink'

export default function Hero() {
    return (
        <section id="inicio">
            <div className="mx-auto grid min-h-svh max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-28 md:grid-cols-2 md:gap-12 md:pt-32">
                <div className="flex animate-hero-in flex-col items-start motion-reduce:animate-none">
                    <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                        Roger Cardoso Ferreira
                    </h1>
                    <p className="mt-4 text-lg font-medium text-accent-soft md:text-xl">
                        Desenvolvedor Backend | Java &amp; Python
                    </p>
                    <p className="mt-6 max-w-136 text-lg leading-relaxed text-muted">
                        Estudante de Engenharia de Software na FIAP. Desenvolvo APIs,
                        aplicações web e soluções com Java, Spring Boot, Python e bancos
                        de dados relacionais.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3.5">
                        <ButtonLink secao='#projetos' texto='Ver Projetos' />
                        <a
                            href="../../../CV - Roger Cardoso Ferreira.pdf"
                            download
                            className="rounded-lg border border-line px-6 py-3 text-[0.95rem] font-semibold text-fg transition-colors hover:border-accent motion-reduce:transition-none"
                        >
                            Baixar currículo
                        </a>
                        <ButtonLink secao='#contato' texto='Fale Comigo' />
                    </div>
                </div>

                <ProfileResponse />
            </div>
        </section>
    )
}