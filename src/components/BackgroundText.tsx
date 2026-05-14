export default function BackgroundText({ text, darkText = false }: { text: string, darkText?: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center select-none z-0">
      <h2 className={`text-[15vw] font-black whitespace-nowrap opacity-5 ${darkText ? 'text-black' : 'text-white'}`}>
        {text}
      </h2>
    </div>
  );
}