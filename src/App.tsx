import Stacks from "./Pages/Stacks/Stacks";
import Hero from "./Pages/Hero/Hero";
import SobreMim  from "./Pages/SobreMim/SobreMim";

export default function App() {
  return (
    <div className="flex flex-col justify-between gap-10 items-center">
      <Hero />
      <SobreMim />
      <Stacks />
    </div>
  )
}
