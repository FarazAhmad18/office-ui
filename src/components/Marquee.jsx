export default function Marquee({ dark = false }) {
  const items = [
    'Premium Workspace', 'Meeting Rooms', 'Private Offices',
    'Coworking', '24/7 Access', 'Community Events',
    'High Speed Wifi', 'Coffee Bar', 'Flexible Leasing',
  ];

  const content = items.map((t, i) => (
    <span key={i} className="flex items-center gap-6 mx-6 whitespace-nowrap">
      <span className={`text-[13px] font-medium tracking-[0.15em] uppercase ${dark ? 'text-white/40' : 'text-dark/30'}`}>
        {t}
      </span>
      <span className={`w-1.5 h-1.5 rounded-full ${dark ? 'bg-gradient-to-br from-gold to-gold-dark' : 'bg-gradient-to-br from-gold to-gold-light'}`} />
    </span>
  ));

  return (
    <div className={`relative py-5 overflow-hidden section-divider-top section-divider-bottom ${
      dark
        ? 'bg-gradient-to-r from-dark via-darker to-dark'
        : 'bg-gradient-to-r from-light via-white to-light'
    }`}>
      <div className="marquee-fade">
        <div className="marquee-track">
          {content}
          {content}
        </div>
      </div>
    </div>
  );
}
