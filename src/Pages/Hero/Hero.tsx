import { IconsLink } from '../../components/IconsLink/IconsLink'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { ProfileResponse } from '../../components/ProfileResponse/ProfileResponse'

const links = [
    {
        icon: FaGithub,
        link: 'https://github.com/rogercf17',
    },
    {
        icon: FaLinkedin,
        link: 'https://www.linkedin.com/in/roger-cardoso-ferreira-030565212/',
    },
]

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
                        <a
                            href="#projetos"
                            className="rounded-lg border border-transparent bg-accent px-6 py-3 text-[0.95rem] font-semibold text-white transition-colors hover:bg-accent-hover motion-reduce:transition-none"
                        >
                            Ver projetos
                        </a>
                        <a
                            href="/curriculo-roger-cardoso-ferreira.pdf"
                            download
                            className="rounded-lg border border-line px-6 py-3 text-[0.95rem] font-semibold text-fg transition-colors hover:border-accent motion-reduce:transition-none"
                        >
                            Baixar currículo
                        </a>
                    </div>

                    <div className="mt-8 flex gap-5 text-2xl">
                        {links.map(item => (
                            <IconsLink key={item.link} icon={item.icon} link={item.link} />
                        ))}
                    </div>
                </div>

                <ProfileResponse />
            </div>
        </section>
    )
}