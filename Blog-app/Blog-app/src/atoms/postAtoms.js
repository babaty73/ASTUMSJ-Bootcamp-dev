import { atomWithStorage } from "jotai/utils";

export const postsAtom = atomWithStorage("posts", []);