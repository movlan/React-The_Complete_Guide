// our-domain.com/news
import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>;
      <ul>
        <li>
          <Link href="/news/next-is-great-framework">
            NextJS is a great Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </>
  );
}

export default NewsPage;
