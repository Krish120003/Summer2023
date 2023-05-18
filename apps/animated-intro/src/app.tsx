import { useEffect, useState, useRef } from "preact/hooks";
import { clsx } from "clsx";
export function App() {
  const [loadedCount, setLoadedCount] = useState(0);
  const cover = useRef<HTMLDivElement>(null);
  const indicateLoaded = () => {
    setLoadedCount(loadedCount + 1);
  };

  const images = [...Array(28)].map(
    (_, i) => `https://picsum.photos/4000/1400//?random?${i}`
  );

  useEffect(() => {
    console.log("running effect");

    if (loadedCount === 28) {
      cover.current?.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 250,
        fill: "forwards",
      });

      const easing = "cubic-bezier(.47,.1,.14,1.03)";

      const container = document.querySelector(
        ".img-container"
      ) as HTMLImageElement;

      container.animate(
        [{ scale: 1 }, { scale: 7.5, transform: "translateY(-2.5vh)" }],
        {
          delay: 1400,
          duration: 3000,
          fill: "forwards",
          easing: "cubic-bezier(.79,.01,.4,.99)",
        }
      );

      // const mainPhoto = document.querySelector(
      //   ".main-photo"
      // ) as HTMLImageElement;

      // mainPhoto.animate([{ padding: 0 }, { padding: "4em" }], {
      //   delay: 1200,
      //   duration: 2200,
      //   fill: "forwards",
      //   easing: "cubic-bezier(.66,.02,.35,1)",
      // });

      const toAnimate = Array.from(
        document.getElementsByClassName("animate-on-load")
      );

      if (toAnimate.length) {
        const duration = 1800;

        toAnimate.forEach((elem, i) => {
          const reversed =
            elem.parentElement?.classList.contains("reversed-pane");

          const isMain = elem.parentElement?.classList.contains("main-pane");

          const extraDelay = isMain ? 0 : 800;

          if (reversed) {
            i = 4 - i;
            elem.animate(
              [
                {
                  transform: `translateY(-120vh)`,
                },
                {
                  transform: "translateY(0)",
                },
              ],
              {
                delay: 200 * (i % 4) + extraDelay,
                duration: duration,
                easing: easing,
                fill: "forwards",
              }
            );
            return;
          } else {
            elem.animate(
              [
                {
                  transform: `translateY(100vh)`,
                },
                {
                  transform: isMain ? "translateY(-15vh)" : "translateY(0)",
                },
              ],
              {
                delay: 200 * (i % 4) + extraDelay,
                duration: duration,
                easing: easing,
                fill: "forwards",
              }
            );
          }
        });
      }
    }
  }, [loadedCount]);

  return (
    <div className="bg-neutral-900 h-screen w-screen overflow-hidden relative">
      <div
        className="absolute top-0 left-0 bg-neutral-900 z-10 w-screen h-screen flex justify-center items-center text-white"
        ref={cover}
      >
        {Math.round((loadedCount * 100) / images.length)}%
      </div>
      <div className="flex flex-row gap-4 justify-between h-full img-container">
        <div className="w-1/5 reversed-pane">
          {images.splice(0, 4).map((image) => (
            <img
              src={image}
              className="mb-4 h-1/4 w-full object-cover object-center translate-y-[-120vh] animate-on-load rounded-md"
              onLoad={indicateLoaded}
            />
          ))}
        </div>
        <div className="w-1/5 h-full">
          {images.splice(0, 4).map((image) => (
            <img
              src={image}
              className="mb-4 h-1/4 w-full object-cover object-center translate-y-[100vh] animate-on-load rounded-md"
              onLoad={indicateLoaded}
            />
          ))}
        </div>
        <div className="w-1/5 reversed-pane">
          {images.splice(0, 4).map((image) => (
            <img
              src={image}
              className="mb-4 h-1/4 w-full object-cover object-center translate-y-[-120vh] animate-on-load rounded-md"
              onLoad={indicateLoaded}
            />
          ))}
        </div>
        <div className="w-1/5 main-pane">
          {/* main pane */}
          {images.splice(0, 4).map((image, i) => (
            <>
              <img
                src={image}
                className={clsx([
                  "mb-4 h-1/4 w-full object-cover object-center translate-y-[100vh] rounded-md animate-on-load",
                  i === 2 && "main-photo",
                ])}
                onLoad={indicateLoaded}
              />
            </>
          ))}
        </div>
        <div className="w-1/5 reversed-pane">
          {images.splice(0, 4).map((image) => (
            <img
              src={image}
              className="mb-4 h-1/4 w-full object-cover object-center translate-y-[-120vh] animate-on-load rounded-md"
              onLoad={indicateLoaded}
            />
          ))}
        </div>
        <div className="w-1/5">
          {images.splice(0, 4).map((image) => (
            <img
              src={image}
              className="mb-4 h-1/4 w-full object-cover object-center translate-y-[100vh] animate-on-load rounded-md"
              onLoad={indicateLoaded}
            />
          ))}
        </div>
        <div className="w-1/5 reversed-pane">
          {images.splice(0, 4).map((image) => (
            <img
              src={image}
              className="mb-4 h-1/4 w-full object-cover object-center translate-y-[-120vh] animate-on-load rounded-md"
              onLoad={indicateLoaded}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
