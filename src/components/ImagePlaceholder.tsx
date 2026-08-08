export function ImagePlaceholder({
  caption,
  ratio = "wide",
}: {
  caption: string;
  ratio?: "wide" | "tall" | "square";
}) {
  const aspect =
    ratio === "wide" ? "aspect-[16/9]" : ratio === "tall" ? "aspect-[3/4]" : "aspect-square";
  return (
    <figure
      className={`${aspect} flex items-center justify-center border border-rule bg-secondary/60 p-6`}
    >
      <figcaption className="label text-center leading-relaxed">{caption}</figcaption>
    </figure>
  );
}
