interface LogoProps {
  size?: "sm" | "md" | "lg";
  name?: string;
}

const sizes = {
  sm: { icon: 22, text: "text-base" },
  md: { icon: 28, text: "text-lg" },
  lg: { icon: 40, text: "text-2xl" },
};

export default function Logo({ size = "md", name = "Nexivo" }: LogoProps) {
  const { icon } = sizes[size];
  const textClass = sizes[size].text;

  // Split name: first part normal, last 2 chars accented
  const main = name.slice(0, -2);
  const accent = name.slice(-2);

  return (
    <span className="inline-flex items-center gap-2.5">
      {/* Icône N géométrique */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        {/* Barre gauche */}
        <rect x="3" y="5" width="5.5" height="22" rx="2" fill="currentColor" />
        {/* Barre droite */}
        <rect x="23.5" y="5" width="5.5" height="22" rx="2" fill="currentColor" />
        {/* Diagonale cyan — signature de la marque */}
        <path
          d="M8.5 6.5 L23.5 25.5"
          stroke="var(--accent)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Point cyan en haut à droite — détail premium */}
        <circle cx="26.5" cy="6.5" r="2.5" fill="var(--accent)" />
      </svg>

      {/* Wordmark */}
      <span className={`${textClass} font-bold tracking-tight text-[var(--fg)] leading-none`}>
        {main}
        <span className="text-[var(--accent)]">{accent}</span>
      </span>
    </span>
  );
}
