import { useState } from "preact/hooks";

export function App() {
  const images = [...Array(20)].map(
    (_, i) => `https://picsum.photos/600/400//?random?${i}`
  );

  console.log(images);

  return (
    <div className="bg-red-500 h-screen w-screen overflow-hidden">
      <div className="flex flex-row gap-4 justify-between h-full scale-110">
        <div className="bg-yellow-400 p-4 w-1/3 h-full">
          {images.splice(0, 5).map((image) => (
            <img src={image} className="mb-4 h-1/3" />
          ))}
        </div>
        <div className="bg-yellow-400 p-4 w-1/3">pane</div>
        <div className="bg-yellow-400 p-4 w-1/3">pane</div>
        <div className="bg-yellow-400 p-4 w-1/3">pane</div>
        <div className="bg-yellow-400 p-4 w-1/3">pane</div>
      </div>
    </div>
  );
}
