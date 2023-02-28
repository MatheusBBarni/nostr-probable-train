import type { PlasmoCSConfig } from "plasmo"

import { Nostr } from "~lib/nostr.gen"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true,
  world: "MAIN",
  run_at: "document_start"
}

window['nostr'] = Nostr
