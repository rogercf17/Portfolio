import ChallengeFord from "../../assets/ChallengeFord.png"
import Jogoteca from "../../assets/Jogoteca.png"
import BelissimaStudio from "../../assets/BelissimaStudio.png"
import TaskManager from "../../assets/TaskManager.png"
import { useNavigate } from "react-router-dom"

const projetos = [
    {
        imagem: TaskManager,
        nome: "Task Mannager",
        descricao: "API para gerenciamento de tarefas, desenvolvida com Java e Spring Boot, com foco em organização, persistência de dados e arquitetura de aplicações backend.",
        tecnologias: [
            "Java",
            "Spring Boot",
            "Oracle",
            "Azure",
            "React",
            "TypeScript",
            "Styled Components"
        ],
        data: 2025,
        link: "#",
        repositorio: "https://github.com/rogercf17/TaskMannager",
        linkDetalhes: "#"
    },
    {
        imagem: Jogoteca,
        nome: "Jogoteca",
        descricao: "Aplicação web para gerenciamento de um catálogo de jogos, desenvolvida com Python e Flask, incluindo autenticação, cadastro e gerenciamento de jogos.",
        tecnologias: [
            "Python",
            "Flask",
            "HTML5",
            "CSS3",
            "PostgreSQL"
        ],
        data: 2025,
        link: "https://jogoteca-flask.onrender.com/",
        repositorio: "https://github.com/rogercf17/Jogoteca_Flask",
        linkDetalhes: "#"
    },
    {
        imagem: BelissimaStudio,
        nome: "Belissima Studio App",
        descricao: "Sistema para gerenciamento de um salão de beleza, com aplicação web integrada a uma API REST desenvolvida em Java e Spring Boot.",
        tecnologias: [
            "Java",
            "Spring Boot",
            "React",
            "TypeScript",
            "Tailwindcss",
            "PostgreSQL",
            "Docker",
            "Neon"
        ],
        data: 2026,
        link: "https://bellissima-studio.vercel.app",
        repositorio: "https://github.com/rogercf17/BellissimaStudio-Front",
        linkDetalhes: "#"
    },
    {
        imagem: ChallengeFord,
        nome: "Challenge Ford Fiap",
        descricao: "Projeto acadêmico desenvolvido para o Challenge da FIAP, explorando soluções tecnológicas para um problema proposto pela Ford em um contexto de desenvolvimento em equipe.",
        tecnologias: [
            "Java",
            "Spring Boot",
            "REST API",
            "Oracle",
            "Azure",
            "IA",
            "Docker"
        ],
        data: 2026,
        link: "#",
        repositorio: "https://github.com/rogercf17/Challenge-Ford-SOA",
        linkDetalhes: "#"
    }
]

export default function Projetos() {
    const navigate = useNavigate()

    const handleNavigate = (link:string) => {
        navigate(link)
    }

    return(
        <section id="projetos" className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:pb-24">
                <div className="mb-12 flex flex-col items-start animate-hero-in motion-reduce:animate-none">
                    <h2 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                        Projetos Destaques
                    </h2>
                    <p className="mt-3 text-lg font-medium text-accent-soft md:text-xl">
                        Aplicações e APIs que desenvolvi, do backend ao deploy
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {projetos.map((projeto) => (
                        <article 
                            key={projeto.nome}
                            className="group flex flex-col overflow-hidden rounded-xl 
                            border border-line bg-surface transition-colors 
                            hover:border-accent motion-reduce:transition-none p-2"
                        >
                            <div className="h-48 w-full overflow-hidden border-b border-line">
                                <img 
                                    src={projeto.imagem} 
                                    alt={`Capa do projeto ${projeto.nome}`} 
                                    className="h-full w-full object-cover 
                                    transition-transfrom duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-1 flex-col gap-4 p-6">
                                <div className="flex items-baseline justify-between gap-3 font-mono text-[0.8rem] text-muted">
                                    <span>
                                        <span className="font-bold text-accent">{"//"}</span>{" "}
                                        {projeto.nome}
                                    </span>
                                    <span className="font-bold text-ok">{projeto.data}</span>
                                </div>
    
                                <p className="text-sm leading-relaxed text-muted">
                                    {projeto.descricao}
                                </p>
    
                                <div className="flex flex-wrap gap-2">
                                    {projeto.tecnologias.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-line bg-canvas px-3 py-1 text-[0.7rem] font-semibold text-accent-soft"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
    
                                <div className="mt-1 flex flex-wrap gap-3">
                                    <a
                                        href={projeto.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-lg bg-accent px-5 py-2.5 text-[0.85rem] font-semibold text-fg transition-colors hover:bg-accent-hover motion-reduce:transition-none"
                                    >
                                        Acessar
                                    </a>
                                    <a
                                        href={projeto.repositorio}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-lg border border-line px-5 py-2.5 text-[0.85rem] font-semibold text-fg transition-colors hover:border-accent motion-reduce:transition-none"
                                    >
                                        Repositório
                                    </a>
                                </div>
    
                                <button
                                    onClick={() => handleNavigate(projeto.linkDetalhes)}
                                    className="self-start text-[0.85rem] font-medium text-accent-soft transition-colors hover:text-fg motion-reduce:transition-none"
                                >
                                    Ver detalhes
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="mt-5 text-center">
                    <a
                        href="https://github.com/rogercf17"
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent-soft transition-colors hover:text-accent-hover motion-reduce:transition-none"
                    >
                        Link do meu GitHub com + projetos
                    </a>
                </div>
        </section>
    )
}