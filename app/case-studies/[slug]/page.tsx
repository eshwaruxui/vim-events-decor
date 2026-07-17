import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BRAND } from "@/lib/constants";
import { caseStudies, getCaseStudyBySlug } from "@/lib/data/case-studies";
import { CaseStudyDetail } from "@/components/case-studies/CaseStudyDetail";

export function generateStaticParams() {
  return caseStudies
    .filter((cs) => cs.published)
    .map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const caseStudy = getCaseStudyBySlug(params.slug);
  if (!caseStudy) {
    return { title: `${BRAND.name}` };
  }
  return {
    title: `${caseStudy.title} | ${BRAND.name}`,
    description: caseStudy.brief,
  };
}

export default function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyDetail caseStudy={caseStudy} />;
}
