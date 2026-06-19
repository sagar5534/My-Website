// Single source of truth for site navigation links.
// Nav uses navLinks; Footer appends its own extras (e.g. Blog).
export interface NavLink {
  label: string;
  href: string;
}

// Anchors are rooted at the homepage (`/#…`) so they navigate correctly from
// sub-pages like /blog. On the homepage these still resolve to in-page jumps,
// and the scroll-spy matcher (href.includes(id)) is unaffected.
export const navLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Works", href: "/#works" },
  { label: "Connect", href: "/#contact" },
];

export const footerLinks: NavLink[] = [
  ...navLinks,
  { label: "Blog", href: "/blog" },
];
