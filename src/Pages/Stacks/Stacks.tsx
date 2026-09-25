const stacks = [
    {
        id: "linguagens",
        categoria: "Linguagens",
        itens: ["Python", "Java", "Javascript", "Typescript", "C#"]
    },
    {
        id: "backend",
        categoria: "Back-end",
        itens: ["Spring-Boot", "Flask", "Node.js"]
    },
    {
        id: "frontend",
        categoria: "Front-end",
        itens: ["HTML e CSS",  "React", "React Native", "Bootstrap", "Tailwindcss"]
    },
    {
        id: "databases",
        categoria: "Dados e Serviços",
        itens: ["Oracle", "PostgreSQL", "MySQL", "Firebase"]
    },
    {
        id: "ia",
        categoria: "IA",
        itens: ["Machine Learning","LLMs", "LLM APIs"]
    },
    {
        id: "cloud",
        categoria: "Cloud",
        itens: ["Azure", "AWS"]
    },
    {
        id: "sistemas",
        categoria: "Sistemas Operacionais",
        itens: ["Windows", "Linux"]
    },
    {
        id: "tools",
        categoria: "Ferramentas",
        itens: ["Git", "GitHub", "Docker", "Postman", "Insomnia"]
    }
]

export default function Stacks() {
    return (
        <section id="stacks" className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:pb-24">
             <div className="mb-12 flex flex-col items-start animate-hero-in motion-reduce:animate-none">
                <h2 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                    Minhas Stacks
                </h2>
                <p className="mt-3 text-lg font-medium text-accent-soft md:text-xl">
                    Tecnologias, ferramentas e ecossistemas que utilizo no dia a dia
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {stacks.map((stack) => (
                    <div key={stack.id} className="p-4 border border-surface rounded-lg shadow-sm h-58">
                        <h2 className="text-xl font-bold text-accent mb-3">
                            {stack.categoria}
                        </h2>
                        <ul className="list-disc pl-5 space-y-1">
                            {stack.itens.map((item, index) => (
                                <li key={index} className="text-muted">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            
        </section>
    )
}
