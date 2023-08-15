"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function Control() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  return (
    <ul>
      <li>
        <Link href="/create">생성</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={"/update/" + id}>수정</Link>
          </li>
          <li>
            <input
              type="button"
              value="삭제"
              onClick={() => {
                const options = { method: "DELETE" };
                fetch(process.env.NEXT_PUBLIC_API_URL + "topics/" + id, options)
                  .then((res) => res.json())
                  .then(() => {
                    router.push("/");
                    router.refresh();
                  });
              }}
            />
          </li>
        </>
      ) : null}
    </ul>
  );
}
