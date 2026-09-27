export type ImageRatio = "wide" | "landscape" | "tall" | "square";

const ASPECT: Record<ImageRatio, string> = {
  wide: "aspect-[16/9]",
  landscape: "aspect-[4/3]",
  tall: "aspect-[3/4]",
  square: "aspect-square",
};

/** Shows the image when `src` is set; otherwise a placeholder with the caption. */
export function ImagePlaceholder({
  caption,
  ratio = "wide",
  src,
}: {
  caption: string;
  ratio?: ImageRatio;
  src?: string | undefined;
}) {
  const aspect = ASPECT[ratio];
  if (src) {
    return (
      <img
        src={src}
        alt={caption}
        loading="lazy"
        className={`${aspect} w-full rounded-2xl border border-rule object-cover object-top`}
      />
    );
  }
  return (
    <figure
      className={`${aspect} flex items-center justify-center rounded-2xl border border-rule bg-secondary/60 p-6`}
    >
      <figcaption className="label text-center leading-relaxed">{caption}</figcaption>
    </figure>
  );
}
