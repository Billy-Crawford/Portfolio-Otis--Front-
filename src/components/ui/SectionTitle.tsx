// src/components/ui/SectionTitle.tsx

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h3
      className="
            text-xl
            font-bold
            uppercase
            tracking-wide
            text-white
         "
    >
      {title}
    </h3>
  );
}
