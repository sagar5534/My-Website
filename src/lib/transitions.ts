// Shared view-transition names, so the element on the source page and the one
// on the destination page are guaranteed to match.

/** Cover image of a post: the project card's image and the post's hero. */
export function coverTransitionName(postId: string): string {
  // view-transition-name must be a valid CSS identifier.
  return `cover-${postId.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
}
