import { mkdirSync, writeFileSync } from "node:fs";

// An alien visitor gives Earth one star for the bureaucracy — the
// arrivals desk cannot find their home planet in its system after a
// forty-minute queue — but five stars for the food, because one sip of
// sweet, cardamom-spiced mango lassi feels like getting fully refunded.
// The joke lands on the contrast: a cosmic administrative failure
// cancelled out by a single perfect drink.
const LINE =
  "One star: I queued forty minutes at the arrivals desk just to be told my home planet doesn't exist in their system, though the sweet, cardamom-spiced mango lassi in my hand tasted like a full refund.";

if (!(1 <= LINE.length && LINE.length <= 200)) {
  throw new Error(`LINE must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
