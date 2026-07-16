export function generateStaticParams() {
  return [{ slug: "sample-wedding" }];
}

export default function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-20 text-center">
      <h1 className="font-display text-4xl italic text-ink">Case study: {params.slug}</h1>
      <p className="max-w-md font-body text-muted">
        This case study is being written up. Please check back soon.
      </p>
    </section>
  );
}
