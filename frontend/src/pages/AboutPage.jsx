function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 md:px-12 md:py-20">
      <div className="rounded-3xl border border-[#d9eaf7] bg-white p-8 shadow-[0_12px_30px_rgba(29,155,240,0.08)] md:p-12">
        <h1 className="text-3xl font-extrabold tracking-tighter text-slate-900 md:text-5xl">About Azmounex</h1>
        <p className="mt-5 max-w-3xl text-slate-600 md:text-lg">
          Azmounex is a technology startup focused on helping ambitious organizations build
          modern digital platforms. We blend product strategy, engineering, and design to
          launch solutions that are fast, secure, and future-ready.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-[#d9eaf7] bg-[#f5faff] p-5 shadow-sm">
            <h2 className="text-lg font-semibold tracking-tighter text-slate-900">Mission</h2>
            <p className="mt-2 text-sm text-slate-600">
              Deliver practical innovation that improves customer experiences and business velocity.
            </p>
          </article>

          <article className="rounded-2xl border border-[#d9eaf7] bg-[#f5faff] p-5 shadow-sm">
            <h2 className="text-lg font-semibold tracking-tighter text-slate-900">Vision</h2>
            <p className="mt-2 text-sm text-slate-600">
              Become a trusted global partner for transformative enterprise technology.
            </p>
          </article>

          <article className="rounded-2xl border border-[#d9eaf7] bg-[#f5faff] p-5 shadow-sm">
            <h2 className="text-lg font-semibold tracking-tighter text-slate-900">Approach</h2>
            <p className="mt-2 text-sm text-slate-600">
              Product-first, data-informed, and continuously optimized for scale.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
