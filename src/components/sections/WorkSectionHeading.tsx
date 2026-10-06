type WorkSectionHeadingProps = {
  children: React.ReactNode;
};

export default function WorkSectionHeading({
  children,
}: WorkSectionHeadingProps) {
  return (
    <h3 className="text-WorkSectionHeading tracking-sectionTitle font-bold pb-2">
      {children}
    </h3>
  );
}