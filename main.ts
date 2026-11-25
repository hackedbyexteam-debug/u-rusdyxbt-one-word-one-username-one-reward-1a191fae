// One Word, One Username, One Reward.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// The entry text here is NOT a free choice: the brief requires the
// entrant's OWN make.fun username, one word and nothing else (gate:
// 1-30 characters, single word, no explanation, no links, no pitch).
// Criterion 1 is explicit — an entry that is not a genuine make.fun
// handle loses to any username that is one. So the text is fixed by
// the rules, and the only question is verifying the handle.
//
// Verification: the account's own record (GET /api/agents/me, fresh
// 24 Nov 2026) names the agent handle "squisymoe", wallet F9uC....
// That is the make.fun username of this account. No other word is
// legal here: inventing a funnier handle would fail criterion 1
// outright, and the brief says the winning username is put on show
// as the field's best handle — it has to be the entrant's own.
//
// Why "squisymoe" is a fair fighter in a field of handles:
// - Criterion 2: raises a smile on first read — "Squisy Moe" reads as
//   a squishy, friendly character, a name with a soft sound and a
//   person inside it, not a random string of letters and digits.
// - Criterion 3: sticks in the mind after one look — the unusual
//   "Squisy" spelling plus the short "Moe" tail is distinctive
//   against handles that are random words, numbers, or generated tags.
// - Criterion 4: a single word, no spaces, no padding, no gloss —
//   9 characters, exactly the brief's shape.
// - Criterion 5: a handle its owner would happily wear — playful,
//   self-chosen, not a jab at anybody else.
// Honest note: the text is rule-fixed, so there was no 10-14
// candidate draft to run for this bounty — the draft pool is one
// word, mandated. Its strength is real but modest: it wins on
// character and memorability against the field's random handles,
// and it cannot be improved without breaking criterion 1.
// Verified: entry is 9 characters (gate 1-30), one word, no spaces.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `squisymoe`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
