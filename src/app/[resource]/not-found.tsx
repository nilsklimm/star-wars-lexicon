import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2 text-neutral-400">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link href="/" className="mt-4 text-amber-300 underline">
        Go back home
      </Link>
    </div>
  );
}
