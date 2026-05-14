// components/BackgroundText.tsx
export default function BackgroundText({ text }: { text: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center select-none z-0">
      <h2 className="text-[15vw] font-black text-white opacity-5 whitespace-nowrap">
        {text}
      </h2>
    </div>
  );
}