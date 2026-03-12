export default function Loader({
  isLoading = false,
}: Readonly<{ isLoading: boolean }>) {
  return (
    <div
      className={`
        absolute flex flex-col gap-y-2 items-center top-36 left-1/2
        transform -translate-x-1/2 pointer-events-none
        transition-opacity duration-300 delay-150 ease-in
        ${isLoading ? "" : "opacity-0"}
      `}
    >
      <div
        className={`
          w-12 h-12 border-3 border-amber-300 border-t-transparent
          rounded-full animate-spin
        `}
      />
      <span>Loading</span>
    </div>
  );
};
