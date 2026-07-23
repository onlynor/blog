# AGENTS.md

## Project Philosophy

This repository is a long-term personal developer website.

Primary goals:

- Clean
- Fast
- Minimal
- Accessible
- Maintainable

Avoid unnecessary animations or visual clutter.

---

## Tech Stack

- Astro
- TypeScript
- Tailwind CSS (if present)
- Fuwari Theme

Do not replace the framework.

---

## Design Principles

- Preserve the original Fuwari aesthetic.
- Improve UX without changing the visual identity.
- Prefer whitespace over clutter.
- Maintain consistent spacing.
- Prioritize readability.
- Desktop-first, but fully responsive.

---

## Code Standards

- Avoid duplicated CSS.
- Prefer reusable components.
- Keep components focused.
- Do not introduce unnecessary dependencies.
- Keep imports organized.
- Remove dead code.

---

## GitHub Pages

The final deployment target is:

username.github.io/blog

Never assume deployment at "/".

Always use Astro's configured base path.

Never hardcode asset URLs.

---

## Accessibility

- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Accessible buttons and links
- Meaningful aria labels where appropriate

---

## Performance

Prefer static rendering.

Avoid unnecessary JavaScript.

Minimize client-side hydration.

Optimize images where possible.

---

## Before Finishing

Always:

- Run a production build.
- Check for broken links.
- Check responsive layout.
- Remove unused files.
- Summarize all changes.