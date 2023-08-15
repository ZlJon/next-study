import Link from "next/link";
import "./globals.css";
import Control from "./components/Control";

export const metadata = {
  title: "Next App CRUD",
  description: "This is a CRUD",
};

export default async function RootLayout({ children }) {
  const res = await fetch(process.env.API_URL + "topics", {
    cache: "no-store",
  });
  const topics = await res.json();

  return (
    <html lang="ko">
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          {topics.map((topic) => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            );
          })}
        </ol>
        <hr />
        {children}
        <hr />
        <Control />
      </body>
    </html>
  );
}
