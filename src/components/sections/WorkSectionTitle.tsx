type WorkSectionTitleProps = {
  children: React.ReactNode;
};

export default function WorkSectionTitle({
  children,
}: WorkSectionTitleProps) {
  return <h2 className="text-sectionTitle leading-sectionTitle tracking-sectionTitle font-bold pb-2">{children}</h2>;
}