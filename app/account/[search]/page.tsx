export default function Page({
  params,
  searchParams
}: {
  params: { slug: string };
  searchParams: { q: 'page' };
}) {
  console.log(params.slug);

  return (
    <>
      <p>{params.slug}</p>
      <p>{searchParams.q} hi</p>
    </>
  );
}
