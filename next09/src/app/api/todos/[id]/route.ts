import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

type Props = {
  params: {
    id: string;
  };
};

export async function GET(req: Request, { params: { id } }: Props) {
  // const id = req.url.slice(req.url.lastIndexOf("/") + 1);

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);

  const todos: Todo = await res.json();

  if (!todos.id) return NextResponse.json({ message: "Todo not found" });

  return NextResponse.json(todos);
}
