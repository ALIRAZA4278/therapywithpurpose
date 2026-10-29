"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Server snapshot is null so Cache Components prerendering stays deterministic;
// the real year fills in on the client.
export default function Year() {
  return useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
}
