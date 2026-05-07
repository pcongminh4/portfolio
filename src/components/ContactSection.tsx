function ContactSection() {
  return (
    <section
      id="contact"
      className="mt-20 overflow-hidden rounded-[2.25rem] bg-ink px-6 py-10 text-paper shadow-[0_30px_120px_rgba(11,16,32,0.28)] lg:px-10 lg:py-12"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-paper/55">
            Liên hệ
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a className="rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5">
            pcongminh551@gmail.com
          </a>

          <a
            href="https://github.com/pcongminh4"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;