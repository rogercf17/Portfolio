import Contato from "../../Sections/Contato/Contato";
import Footer from "../../Sections/Footer/Footer";
import Hero from "../../Sections/Hero/Hero";
import Projetos from "../../Sections/Projetos/Projetos";
import SobreMim from "../../Sections/SobreMim/SobreMim";
import Stacks from "../../Sections/Stacks/Stacks";

export default function Home() {
    return(
        <div className="flex flex-col justify-between gap-10 items-center">
            <Hero />
            <SobreMim />
            <Stacks />
            <Projetos />
            <Contato />
            <Footer />
        </div>
    )
}