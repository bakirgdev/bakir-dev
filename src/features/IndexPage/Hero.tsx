import Image from "next/image";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="grid gap-6 md:grid-cols-5 md:items-center md:gap-10">
      <div className="flex justify-center motion-preset-blur-right md:col-span-2 md:justify-end">
        <Image
          src="/static/images/headshot.jpeg"
          alt={`Headshot of ${site.author}`}
          width={288}
          height={288}
          preload
          className="size-52 rounded-full object-cover shadow-xl md:size-64 lg:size-72"
        />
      </div>

      <div className="flex flex-col gap-5 text-center motion-preset-blur-left md:col-span-3 md:text-left">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          {site.author}
        </h1>
        <p className="text-2xl font-semibold text-muted-foreground sm:text-3xl">
          {site.headline}
        </p>
        <p className="mx-auto max-w-xl text-pretty text-muted-foreground md:mx-0 md:text-base/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
          {site.bio}
        </p>
      </div>
    </section>
  );
}
