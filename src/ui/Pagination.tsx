import ButtonLink from "@/ui/ButtonLink";
import { useTranslations } from "next-intl";
// import { useRouter } from 'next/navigation';

export default function Pagination({ url, page, pageCount }: Readonly<{
  url: string,
  page: number,
  pageCount: number,
}>) {
  const t = useTranslations("Pagination");
  // const router = useRouter();

  const prevUrl = `/${url}?page=${Math.max(1, page - 1)}`;
  const nextUrl = `/${url}?page=${Math.min(pageCount, page + 1)}`;

  const goToPage = (url: string) => (e: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent) => {
    e.preventDefault();
    // router.push(url);
    history.pushState({}, "", url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-between items-center">
      <span>Page {page} of {pageCount}</span>
      <nav aria-label="Pagination" className="flex justify-end gap-4">
        <ButtonLink
          href={prevUrl}
          onClick={goToPage(prevUrl)}
          disabled={page <= 1}
          aria-label="Previous Page"
          data-testid="previous-page-button"
        >
          {t("previous")}
        </ButtonLink>
        <ButtonLink
          href={nextUrl}
          onClick={goToPage(nextUrl)}
          disabled={page >= pageCount}
          aria-label="Next Page"
          data-testid="next-page-button"
        >
          {t("next")}
        </ButtonLink>
      </nav>
    </div>
  );
};
