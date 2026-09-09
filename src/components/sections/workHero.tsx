type WorkHeroProps = {
  title: string;
  subtitle: string;
  description: string;
};

export default function WorkHero({
  title,
  subtitle,
  description,
}: WorkHeroProps) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{description}</p>
    </section>
  );
}