import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Wordmark } from "@/components/ui/Wordmark";

export function Footer() {
  const { footer } = copy;

  return (
    <footer className="bg-carvao text-marfim">
      <div className="shell pb-8 pt-20 lg:pt-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-6">
          <div className="md:col-span-2 lg:col-span-4">
            <Wordmark />
            <p className="mt-6 max-w-[32ch] leading-[1.75] text-marfim/60">{site.description}</p>
          </div>

          <FooterColumn title={footer.contact} className="lg:col-span-3 lg:col-start-6">
            <FooterLink href={whatsappLink()} name="WhatsApp" detail={site.whatsapp.display} />
            {site.email && <FooterLink href={`mailto:${site.email}`} name="E-mail" detail={site.email} />}
            {site.address && <li className="text-marfim/70">{site.address}</li>}
          </FooterColumn>

          <FooterColumn title={footer.social} className="lg:col-span-2">
            <FooterLink href={site.instagram.url} name="Instagram" detail={site.instagram.handle} />
            <FooterLink href={site.linktree.url} name="Linktree" detail="Todos os links" />
          </FooterColumn>

          {site.hours.length > 0 && (
            <FooterColumn title={footer.hours} className="lg:col-span-2">
              {site.hours.map((line) => (
                <li key={line} className="text-marfim/70">
                  {line}
                </li>
              ))}
            </FooterColumn>
          )}
        </div>

        <div className="label mt-20 flex flex-col gap-3 border-t border-marfim/15 pt-6 text-marfim/50 md:flex-row md:justify-between">
          <p>
            © {site.copyrightYear} {site.name}. {footer.rights}
          </p>
          <p>{site.tagline} · Feitas à mão com cera vegetal</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  className = "",
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <h2 className="label font-sans text-marfim/50">{title}</h2>
      <ul className="mt-5 space-y-5 text-[0.95rem] leading-snug">{children}</ul>
    </div>
  );
}

function FooterLink({ href, name, detail }: { href: string; name: string; detail: string }) {
  const external = href.startsWith("http");
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group inline-flex flex-col gap-1"
      >
        <span className="link-line self-start">{name}</span>
        <span className="whitespace-nowrap text-marfim/55">{detail}</span>
        {external && <span className="sr-only">(abre em nova aba)</span>}
      </a>
    </li>
  );
}
