type WorkSectionTitleProps = {
  children: React.ReactNode;
};

export default function WorkSectionTitle({
  children,
}: WorkSectionTitleProps) {
  return <h2 className="text-subSectionTitle leading-subSectionTitle tracking-subSectionTitle font-weight-extraBold pb-3">{children}</h2>;
}