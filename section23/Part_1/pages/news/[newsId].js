// our-domain.com/important

import { useRouter } from "next/router";

function ImportantNewsPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  return <h1>The {newsId} Detail Page</h1>;
}

export default ImportantNewsPage;
