import { site } from '@/lib/site';
import { GiftIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from './Icons';

const actions = [
  { label: 'Call', href: site.phoneHref, Icon: PhoneIcon, external: false },
  { label: 'WhatsApp', href: site.whatsappChat, Icon: WhatsAppIcon, external: true },
  { label: 'Directions', href: site.mapDirections, Icon: MapPinIcon, external: true },
  { label: 'Give', href: '#give', Icon: GiftIcon, external: false },
];

/** Sticky quick-action bar for mobile: Call | WhatsApp | Directions | Give */
export default function MobileBottomBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-[75] grid grid-cols-4 border-t border-orange-400/20 bg-stone-950/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_rgba(32,1,56,0.35)] backdrop-blur md:hidden"
    >
      {actions.map(({ label, href, Icon, external }) => (
        <a
          key={label}
          href={href}
          {...(external
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] font-black uppercase tracking-wider text-orange-300 transition-colors active:bg-stone-900"
        >
          <Icon className="h-5 w-5" />
          {label}
        </a>
      ))}
    </nav>
  );
}
