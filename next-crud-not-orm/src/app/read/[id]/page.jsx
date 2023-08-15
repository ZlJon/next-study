export default async function Read(props) {
  const res = await fetch(process.env.API_URL + `topics/${props.params.id}`, {
    cache: "no-store",
  });
  const topic = await res.json();
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}

/* params.id 라고 하면 라우터 [id] 값을 읽어올 수 있다 */
