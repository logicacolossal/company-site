import { Separator } from "../components/ui/separator";
import { FirstSection } from "./fragments/first-section";
import { SecondSection } from "./fragments/second-section";

export function Home() {
  return (
    <div className="flex flex-col">
      <div className="min-h-[calc(100vh-5rem)] bg-linear-to-br from-background from-70% to-foreground/15">
        <div className="w-full flex flex-wrap items-center justify-center gap-4 p-8">
          <span className="text-5xl sm:text-6xl font-jet-brains-mono bg-linear-to-br from-purple-500 to-sky-500 bg-clip-text text-transparent text-extrabold text-center lg:text-9xl">
            LOGICA
          </span>
          <img
            alt="colossus"
            src={import.meta.env.BASE_URL + "/images/colossus-colored.svg"}
            width={50}
            height={140}
          />
          <span className="text-5xl sm:text-6xl font-jet-brains-mono bg-linear-to-br from-purple-500 to-sky-500 bg-clip-text text-transparent text-extrabold text-center lg:text-9xl">
            COLOSSAL
          </span>
        </div>
        <FirstSection />
      </div>
      <Separator orientation="horizontal" />
      <SecondSection />
    </div>
  );
}
