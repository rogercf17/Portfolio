import imgRoger from '../../assets/Roger.jpeg'

export default function SobreMim() {
    return(
        <section id="sobre">
            <div className='mx-auto grid min-h-svh max-w-6xl grid-cols-1 items-cente
            gap-10 px-6 pb-16 pt-28 md:grid-cols-2 md:gap-12 md:pt-32'>
                <div className="flex h-full min-w-0 animate-hero-in flex-col items-start motion-reduce:animate-none">
                    <h2 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                        Sobre mim
                    </h2>
                    <p className="mt-3 text-lg font-medium text-accent-soft md:text-xl">
                        21 anos | Brasil - SP, São Paulo| Backend &amp; Café
                    </p>
                    <p className="mt-6 max-w-136 text-base leading-relaxed text-muted">
                        Sou o Roger, tenho 21 anos e sou do Brasil. Na programação, 
                        encontrei uma sensação que já conhecia do futebol e da academia: 
                        aquela mistura de foco, repetição e recompensa que vem quando, 
                        depois de várias tentativas, algo finalmente funciona.
                    </p>
                    <p className="mt-4 max-w-136 text-base leading-relaxed text-muted">
                        Fora do teclado, você provavelmente vai me encontrar com a minha 
                        namorada ou família ou amigos, jogando futebol, treinando na 
                        academia ou explorando alguma coisa nova que me faça pensar diferente. 
                        Dentro dele, gosto de transformar problemas em soluções, construindo 
                        APIs REST com Java e Spring Boot, aplicações com Python e Flask e 
                        trabalhando com bancos relacionais como PostgreSQL e Oracle.
                    </p>
                    <p className="mt-4 max-w-136 text-base leading-relaxed text-muted">
                        Sou curioso por natureza e gosto de aprender fazendo. Cada projeto é 
                        uma oportunidade de descobrir algo novo, entender como as coisas funcionam 
                        e, principalmente, enfrentar o próximo problema — seja um bug teimoso ou 
                        um exercício novo. Fique à vontade para conhecer meus projetos e, se quiser 
                        trocar uma ideia, entre em contato.
                    </p>
                </div>

                <aside className="h-full min-w-0 w-full max-w-md justify-self-center overflow-hidden rounded-xl border border-line bg-surface">
                    <div className="flex items-center justify-between gap-4 border-b border-line px-[1.1rem] py-3 font-mono text-[0.8rem] text-muted md:text-[0.9rem]">
                        <span>
                            <span className="font-bold text-accent">GET</span>{' '}
                            /api/roger/foto
                        </span>
                        <span className="font-bold text-ok">200 OK</span>
                    </div>
                    <img
                        src={imgRoger}
                        alt="Roger Cardoso Ferreira"
                        className="aspect-square w-full h-full object-cover"
                    />
                </aside>
            </div>
        </section>
    )
}