import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ShieldCheck,
  FileText,
  Database,
  Users,
  Copyright,
  ExternalLink,
  AlertTriangle,
  Accessibility,
  RefreshCw,
  Mail,
  CheckCircle2,
} from "lucide-react";

const sections = [
  {
    id: "acceptance",
    icon: CheckCircle2,
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p>
          By accessing or using the POLARIS portal, you acknowledge that you
          have read, understood, and agree to comply with these Terms of Use.
          If you do not agree with any part of these terms, please discontinue
          use of the portal.
        </p>
        <p className="mt-4">
          These terms apply to visitors, registered users, researchers,
          scientists, contributors, educators, and other users accessing
          services or information provided through this portal.
        </p>
      </>
    ),
  },
  {
    id: "portal",
    icon: FileText,
    title: "2. About the Portal",
    content: (
      <>
        <p>
          POLARIS is a digital platform designed to support the discovery,
          preservation, organization, and dissemination of polar science
          knowledge, expedition information, scientific resources, media, and
          educational material.
        </p>
        <p className="mt-4">
          The portal may contain information relating to polar expeditions,
          scientific research, publications, datasets, photographs, videos,
          institutional activities, educational resources, and related
          knowledge.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    icon: Users,
    title: "3. User Accounts & Responsibilities",
    content: (
      <>
        <p>
          Certain features may require users to create an account or sign in.
          Users are responsible for providing accurate information and keeping
          their account credentials secure.
        </p>

        <ul className="mt-4 space-y-3">
          {[
            "Provide accurate and current information when requested.",
            "Keep login credentials confidential.",
            "Use the portal only for lawful and legitimate purposes.",
            "Do not attempt to access another user's account.",
            "Notify the appropriate portal administrator if unauthorized access is suspected.",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "research",
    icon: Database,
    title: "4. Scientific & Research Content",
    content: (
      <>
        <p>
          Scientific information available through POLARIS may originate from
          researchers, scientists, institutions, expedition teams, public
          repositories, or other authorized sources.
        </p>

        <div className="mt-5 rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
          <p className="font-semibold text-cyan-950">
            Important
          </p>
          <p className="mt-2 text-sm leading-6 text-cyan-900">
            Scientific information should be interpreted according to its
            original context, source, methodology, publication, dataset, or
            accompanying documentation.
          </p>
        </div>

        <p className="mt-5">
          Users should refer to the original scientific source where additional
          context, methodology, citations, or technical interpretation is
          required.
        </p>
      </>
    ),
  },
  {
    id: "contributions",
    icon: Users,
    title: "5. Researcher & Contributor Submissions",
    content: (
      <>
        <p>
          Authorized researchers, scientists, or contributors may be permitted
          to submit expedition information, photographs, documents, datasets,
          publications, media, or other materials.
        </p>

        <p className="mt-4">
          By submitting content, contributors should ensure that they have the
          necessary rights, permissions, approvals, and authority to provide
          that material for publication or preservation through the portal.
        </p>

        <p className="mt-4">
          Submitted material may be reviewed, organized, moderated, archived,
          or displayed according to applicable portal policies and permissions.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    icon: Copyright,
    title: "6. Intellectual Property",
    content: (
      <>
        <p>
          Content available through the portal may be subject to copyright,
          database rights, trademarks, licenses, institutional policies, or
          other intellectual-property protections.
        </p>

        <p className="mt-4">
          Users should not reproduce, redistribute, modify, publish, or
          commercially exploit protected material unless they have the
          appropriate permission or applicable legal right to do so.
        </p>

        <p className="mt-4">
          Where a resource includes specific licensing or attribution
          requirements, users should follow those requirements when using the
          resource.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    icon: ExternalLink,
    title: "7. Third-Party Links & Services",
    content: (
      <>
        <p>
          The portal may provide links to external websites, repositories,
          publications, datasets, maps, services, or other third-party
          resources for informational or functional purposes.
        </p>

        <p className="mt-4">
          External websites operate independently and may have their own terms,
          privacy policies, licenses, and practices. Users should review the
          applicable policies of those services before using them.
        </p>
      </>
    ),
  },
  {
    id: "accuracy",
    icon: AlertTriangle,
    title: "8. Accuracy & Availability",
    content: (
      <>
        <p>
          Every effort may be made to maintain useful, accurate, and
          up-to-date information on the portal. However, scientific datasets,
          expedition information, external resources, or other content may
          change over time.
        </p>

        <p className="mt-4">
          Portal content should not automatically be treated as a substitute
          for original scientific publications, official datasets, professional
          advice, or authoritative institutional documentation.
        </p>

        <p className="mt-4">
          Portal features and services may also be modified, temporarily
          unavailable, or discontinued for maintenance, upgrades, security, or
          other operational reasons.
        </p>
      </>
    ),
  },
  {
    id: "prohibited",
    icon: ShieldCheck,
    title: "9. Prohibited Activities",
    content: (
      <>
        <p>
          Users must not misuse the portal or attempt to interfere with its
          security, availability, integrity, or normal operation.
        </p>

        <ul className="mt-4 space-y-3">
          {[
            "Attempting unauthorized access to systems, accounts, or restricted resources.",
            "Uploading malicious software, harmful code, or intentionally deceptive content.",
            "Interfering with the operation or security of the portal.",
            "Using automated methods in a manner that adversely affects portal services.",
            "Submitting content that violates applicable laws or third-party rights.",
            "Misrepresenting identity, affiliation, research, or institutional authorization.",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "accessibility",
    icon: Accessibility,
    title: "10. Accessibility",
    content: (
      <>
        <p>
          POLARIS aims to provide an accessible and inclusive digital
          experience for users with different abilities and assistive
          technologies.
        </p>

        <p className="mt-4">
          Accessibility features may include keyboard navigation, semantic
          structure, readable typography, alternative text, accessible
          controls, and other usability improvements.
        </p>

        <p className="mt-4">
          If you encounter an accessibility barrier, users are encouraged to
          report the issue through the appropriate contact channel so that it
          can be reviewed.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    icon: ShieldCheck,
    title: "11. Privacy & Data Protection",
    content: (
      <>
        <p>
          Information collected through account registration, authentication,
          submissions, or portal interactions may be handled according to the
          applicable privacy and data-protection practices of the portal.
        </p>

        <p className="mt-4">
          Users should avoid submitting unnecessary personal, confidential, or
          sensitive information through public-facing content fields.
        </p>

        <p className="mt-4">
          For more information about how information is handled, please refer
          to the portal's Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "12. Changes to These Terms",
    content: (
      <>
        <p>
          These Terms of Use may be updated when necessary to reflect changes
          in portal functionality, operational practices, legal requirements,
          security measures, or other relevant circumstances.
        </p>

        <p className="mt-4">
          Updated terms will be published on this page along with the relevant
          revision date.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    icon: Mail,
    title: "13. Contact & Support",
    content: (
      <>
        <p>
          Questions, accessibility concerns, content-related issues, or other
          portal feedback may be directed through the official contact
          channels provided by the portal.
        </p>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-semibold text-slate-900">
            POLARIS — Polar Science Knowledge & Outreach Portal
          </p>
          <p className="mt-1 text-sm text-slate-600">
            National Centre for Polar and Ocean Research (NCPOR)
          </p>
          <p className="text-sm text-slate-600">
            Ministry of Earth Sciences, Government of India
          </p>
        </div>
      </>
    ),
  },
];

export default function Terms() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <Link
            to="/"
            className="group mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white"
          >
            <ArrowLeft
              size={17}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to POLARIS
          </Link>

          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              <FileText size={15} />
              Legal & Guidelines
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Terms of
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Use
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Guidelines for accessing, using, contributing to, and interacting
              with the POLARIS Polar Science Knowledge & Outreach Portal.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 backdrop-blur">
                Last updated: October 2026
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 backdrop-blur">
                POLARIS · NCPOR · MoES
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-10 lg:py-14">
          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="px-3 pb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                On this page
              </p>

              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-700"
                  >
                    {section.title.replace(/^\d+\.\s*/, "")}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* MAIN DOCUMENT */}
          <div className="min-w-0">
            {/* Intro card */}
            <div className="mb-8 rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-6 shadow-sm sm:p-8">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-600 text-white shadow-lg shadow-cyan-600/20">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-950">
                    Please read these terms carefully
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    These terms describe the general rules and responsibilities
                    associated with using the POLARIS portal. Specific services,
                    datasets, publications, or resources may have additional
                    terms or licenses.
                  </p>
                </div>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-6">
              {sections.map((section) => {
                const Icon = section.icon;

                return (
                  <article
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-200 hover:shadow-md sm:p-8"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-cyan-700">
                        <Icon size={21} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                          {section.title}
                        </h2>

                        <div className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px]">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Bottom acknowledgement */}
            <div className="mt-8 rounded-3xl bg-slate-900 p-6 text-white shadow-xl sm:p-8">
              <div className="flex gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-cyan-300" />

                <div>
                  <h2 className="text-xl font-bold">
                    Thank you for using POLARIS
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    By using this portal, you help support the discovery,
                    sharing, and wider understanding of polar science,
                    exploration, research, and education.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                   

                    <Link
                      to="/contact"
                      className="rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 pb-6 text-center text-xs text-slate-400">
              POLARIS · National Centre for Polar and Ocean Research · Ministry
              of Earth Sciences · Government of India
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}