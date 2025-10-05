
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";



const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-4">
        <div className=" order-2 lg:order-1 ">
       
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-tighter">
            Customized Shadcn UI Blocks & Components
          </h1>
          <p className="mt-6 max-w-[60ch] sm:text-lg">
            Explore a collection of Shadcn UI blocks and components, ready to
            preview and copy. Streamline your development workflow with
            easy-to-implement examples.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base">
              Get Started <ArrowUpRight className="h-5! w-5!" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              <CirclePlay className="h-5! w-5!" /> Watch Demo
            </Button>
          </div>
        </div>
        <div className="w-full aspect-video bg-accent rounded-xl order-1   lg:order-2" />
        
      </div>
    </div>
  );
};

export default Hero;
