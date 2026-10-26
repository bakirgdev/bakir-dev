interface Non200PagesProps {
  code: string;
  title: string;
  children: React.ReactNode;
}

export default function Non200Pages({
  code,
  title,
  children,
}: Non200PagesProps) {
  return (
    <section className="mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center gap-6 p-4 text-center">
      <p className="text-7xl font-black motion-preset-blur-down-lg">{code}</p>
      <h1 className="text-3xl font-bold tracking-tight motion-preset-blur-down-lg motion-delay-50">
        {title}
      </h1>
      <div className="motion-preset-blur-down-lg motion-delay-100">
        {children}
      </div>
    </section>
  );
}
