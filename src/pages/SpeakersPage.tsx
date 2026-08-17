import { useState } from "react";
import { useSpeakers } from "../hooks/useSpeakers";

export const SpeakersPage = () => {
  // Dev toggle: flip this to force the query into its error path. Because
  // `forceError` is part of the query key in useSpeakers, changing it re-runs
  // the query (you'll see Loading → Error / Success).
  const [forceError, setForceError] = useState(false);

  // Data now comes from a local TanStack Query hook (see src/hooks/useSpeakers.ts),
  // which fetches public/speakers.json with a simulated delay. The hook exposes
  // `data`, `isLoading`, and `isError` — handling those states is your job.
  const { data, isLoading, isError } = useSpeakers(forceError);

  return (
    <main className="page">
      <header className="page__header">
        <h1>Conference Speakers</h1>
        <label className="page__subtitle">
          <input
            type="checkbox"
            checked={forceError}
            onChange={(event) => setForceError(event.target.checked)}
          />{" "}
          Simulate error
        </label>
      </header>

      {/*
        TODO (candidate): replace the placeholder below.
        - Branch on `isLoading` (skeleton / Loading), `isError` (Error / missing data),
          and the empty case (no speakers).
        - When you have data, map it to <SpeakerCard speaker={...} /> in a grid.
        See TASK.md for the full brief.
      */}
      <p className="page__subtitle">
        <div>isLoading: {String(isLoading)}</div>
        <div>isError: {String(isError)}</div>
        <div>count: {data?.length ?? 0}</div>
        <ul>{data?.length && data.map((a) => <li key={a.id}>{a.name}</li>)}</ul>
      </p>
    </main>
  );
};
