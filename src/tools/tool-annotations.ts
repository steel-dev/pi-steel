// ABOUTME: Shared tool annotation presets that tell Pi what each Steel tool can change.
// ABOUTME: Permission extensions read these hints to decide which tool calls need user approval.
import type { ToolAnnotations } from "@earendil-works/pi-coding-agent";

/** Reads the page. Saved artifact files are output only and do not change the website. */
export const READ_ONLY_ANNOTATIONS: ToolAnnotations = { readOnlyHint: true, openWorldHint: true };

/** Changes the browser view, but does not submit input to the website. */
export const PAGE_ACTION_ANNOTATIONS: ToolAnnotations = {
  readOnlyHint: false,
  destructiveHint: false,
  openWorldHint: true,
};

/** Sends input to the website, which can submit forms or delete data. */
export const SITE_ACTION_ANNOTATIONS: ToolAnnotations = {
  readOnlyHint: false,
  destructiveHint: true,
  openWorldHint: true,
};
