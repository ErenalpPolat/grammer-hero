/** Slugify a name into a URL-safe lowercase token for deterministic user ids. */
export function slugify(input: string): string {
  return input
    .trim()
    .toLocaleLowerCase("tr")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // strip combining marks
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 32);
}

/** Build the deterministic user id used by mock magic link auth. */
export function userIdFromName(name: string): string {
  const slug = slugify(name);
  if (!slug) throw new Error("Invalid name — empty slug");
  return `user_${slug}`;
}
