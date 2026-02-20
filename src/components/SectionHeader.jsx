const SectionHeader = ({ eyebrow, title, description }) => (
  <div className="mx-auto mb-12 max-w-3xl text-center">
    {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">{eyebrow}</p>}
    <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-base text-slate-600 sm:text-lg">{description}</p>}
  </div>
);

export default SectionHeader;
