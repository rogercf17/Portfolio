const Key = ({ children }: { children: string }) => (
    <span className="text-accent">"{children}"</span>
)
const Str = ({ children }: { children: string }) => (
    <span className="text-fg">"{children}"</span>
)

export const ProfileResponse = () => {
    return(
        <aside
            aria-hidden="true"
            className="overflow-hidden rounded-xl border border-line bg-surface font-mono text-[0.8rem] md:text-[0.9rem]"
        >
            <div className="flex items-center justify-between gap-4 border-b border-line px-[1.1rem] py-3 text-muted">
                <span>
                    <span className="font-bold text-accent">GET</span>{' '}
                    /api/roger
                </span>
                <span className="font-bold text-ok">200 OK</span>
            </div>
            <pre className="m-0 overflow-x-auto px-[1.1rem] pb-[1.4rem] pt-5 leading-[1.75] text-muted">
                <code>
                    {'{\n'}
                    {'  '}<Key>nome</Key>: <Str>Roger Cardoso Ferreira</Str>,{'\n'}
                    {'  '}<Key>cargo</Key>: <Str>Desenvolvedor Backend</Str>,{'\n'}
                    {'  '}<Key>stack</Key>: [<Str>Java</Str>, <Str>Spring Boot</Str>,{'\n'}
                    {'           '}<Str>Python</Str>, <Str>Flask</Str>],{'\n'}
                    {'  '}<Key>bancos</Key>: [<Str>PostgreSQL</Str>, <Str>Oracle</Str>],{'\n'}
                    {'  '}<Key>foco</Key>: [<Str>APIs REST</Str>, <Str>SQL</Str>],{'\n'}
                    {'  '}<Key>formacao</Key>: <Str>Engenharia de Software, FIAP</Str>{'\n'}
                    {'}'}
                </code>
            </pre>
        </aside>
    )
}