import { IconsLink } from '../../components/IconsLink/IconsLink'
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { MdEmail } from "react-icons/md"

const contatos = [
    { 
        icon: MdEmail, 
        label: 'rogercf16@gmail.com', 
        link: 'mailto:rogercf16@gmail.com' 
    },
    { 
        icon: FaPhone, 
        label: '+55 11 99845-1244', 
        link: 'https://w.app/grpoev' 
    },
]
 
const redes = [
    { 
        icon: FaGithub, 
        link: 'https://github.com/rogercf17' 
    },
    { 
        icon: FaLinkedin, 
        link: 'https://www.linkedin.com/in/roger-cardoso-ferreira-030565212/' 
    },
]

export default function Contato() {
    return(
        <section id="contato" className="mx-auto max-w-6xl px-6 pb-24 pt-24 text-center">
            <div className="animate-hero-in motion-reduce:animate-none">
                <h2 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                    Contato
                </h2>
                <p className="mt-3 text-xl font-medium text-accent-soft md:text-lg">
                    Estou aberto a novas oportunidades e parcerias. Envie uma mensagem ou me
                    encontre nas redes abaixo.
                </p>
            </div>
 
            <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-4 rounded-xl border border-line bg-surface p-8">
                {contatos.map((item) => (
                    <a
                        key={item.label}
                        href={item.link}
                        className="flex items-center gap-3 font-medium text-fg transition-colors hover:text-accent"
                    >
                        <item.icon className="text-xl text-accent" />
                        {item.label}
                    </a>
                ))}
 
                <div className="mt-2 flex gap-5 text-2xl">
                    {redes.map((item) => (
                        <IconsLink key={item.link} icon={item.icon} link={item.link} />
                    ))}
                </div>
            </div>
        </section>
    )
}