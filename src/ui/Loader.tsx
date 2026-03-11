export default function Loader({
  isLoading = false,
}: Readonly<{ isLoading: boolean }>) {
  return (
    <div className={`
      absolute top-3/7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12
      border-3 border-amber-300 border-t-transparent rounded-full animate-spin pointer-events-none
      transition-opacity duration-300 delay-300 ease-in
      ${isLoading ? "opacity-70" : "opacity-0"}
    `} />
  );
};
