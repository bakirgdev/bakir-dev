import Image from "next/image";
import Headshot from "#/static/images/headshot.jpeg";

export function Hero() {
  return (
    <section className="grid gap-6 md:gap-10 md:grid-cols-5 md:items-center">
      <div className="md:col-span-2 flex justify-center md:justify-end order-1">
        <div className="relative w-52 h-52 md:h-64 md:w-64 lg:w-72 lg:h-72 overflow-hidden rounded-full shadow-xl motion-preset-blur-right">
          <Image
            src={Headshot}
            alt="Headshot of Bakir"
            fill
            sizes="100%"
            className="object-cover rounded-full"
            priority
          />
        </div>
      </div>

      <div className="md:col-span-3 flex flex-col space-y-5 text-center md:text-left order-2 motion-preset-blur-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
          Bakir
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground">
          Web Solutions Architect
        </h2>
        <p className="text-pretty max-w-xl mx-auto md:mx-0 text-muted-foreground md:text-md/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
          Building digital experiences with modern technologies. Clean code,
          user-centric design, and scalable architecture.
        </p>
      </div>
    </section>
  );
}
