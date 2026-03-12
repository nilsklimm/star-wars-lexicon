export default function Loader({
  isLoading = false,
}: Readonly<{ isLoading: boolean }>) {
  return (
    <div
      className={`
        absolute top-42 left-1/2 transform -translate-x-1/2 w-12 h-12
        border-3 border-amber-300 border-t-transparent rounded-full pointer-events-none
        transition-opacity duration-300 delay-100 ease-in animate-spin
        ${isLoading ? "opacity-80" : "opacity-0"}
        loader-vertical-position
      `}
    />
  );
};
