import { Maximize2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Reveal } from "@/components/Reveal";

export type GalleryPage = { caption: string; src: string };

// Vertically centred on the thumbnails (the caption below them is ~2.75rem tall).
const ARROW =
  "top-[calc(50%-1.375rem)] h-11 w-11 border-2 border-[#2B301C] bg-transparent text-[#2B301C] hover:bg-[#2B301C] hover:text-[#F7F6EC] disabled:opacity-30";

/**
 * Full-page screenshots shown as thumbnails side by side. Hovering scrolls the page
 * inside the thumbnail; clicking opens the complete page.
 */
export function GalleryCarousel({ title, items }: { title: string; items: GalleryPage[] }) {
  return (
    <>
      <Reveal>
        <p className="font-mono text-sm font-semibold tracking-[0.08em] text-foreground uppercase md:text-base">
          {title}
        </p>
      </Reveal>

      <Carousel opts={{ align: "start" }} className="mt-10 px-12 md:px-16">
        <CarouselPrevious className={`${ARROW} left-0`} aria-label="Imagem anterior" />
        <CarouselNext className={`${ARROW} right-0`} aria-label="Próxima imagem" />
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.src} className="basis-[85%] sm:basis-1/2 lg:basis-1/3">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group block w-full cursor-zoom-in text-left"
                    aria-label={`Ampliar: ${item.caption}`}
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-rule bg-muted">
                      <img
                        src={item.src}
                        alt={item.caption}
                        loading="lazy"
                        className="aspect-[3/4] w-full object-cover object-top transition-[object-position] duration-[6000ms] ease-in-out group-hover:object-bottom"
                      />
                      <span className="absolute right-3 bottom-3 flex size-9 items-center justify-center rounded-full bg-[#2B301C] text-[#F7F6EC] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                        <Maximize2 className="size-4" aria-hidden="true" />
                      </span>
                    </div>
                    <p className="mt-4 font-serif text-lg">{item.caption}</p>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto p-0 sm:rounded-2xl">
                  <DialogTitle className="sr-only">{item.caption}</DialogTitle>
                  <img src={item.src} alt={item.caption} className="w-full" />
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
