type WorkSectionTitleProps = {
  children: React.ReactNode;
};

export default function WorkSectionTitle({
  children,
}: WorkSectionTitleProps) {
  return <h2 className="text-subSectionTitle leading-subSectionTitle tracking-subSectionTitle font-weight-bold pb-8">{children}</h2>;
}