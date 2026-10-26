export function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="mx-auto flex max-w-prose flex-col gap-4 text-pretty text-lg text-muted-foreground intersect:motion-preset-blur-up intersect-once"
    >
      <h2
        id="about-heading"
        className="mb-6 text-center text-4xl font-bold tracking-tight text-foreground"
      >
        About
      </h2>
      <p>
        I&apos;m Bakir, and I do software engineering and everything around it.
        Over seven years of self-learning, some formal education, freelancing,
        corporate roles and running my own business got me to where I am now.
      </p>
      <p>
        I care about the complete software lifecycle, in most cases from idea to
        revenue. My goal is to build products that close the gap between
        software and business, and to help people along the way.
      </p>
      <p>
        I speak Bosnian and English, plus some German and Arabic. I&apos;m open
        to any kind of engagement with fellow professionals, so feel free to
        reach out.
      </p>
    </section>
  );
}
