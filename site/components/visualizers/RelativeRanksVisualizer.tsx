"use client";

import { useMemo, useState, type JSX } from "react";

type Player = { username: string; score: number };

const DEFAULT_PLAYERS: Player[] = [
  { username: "nova_k", score: 92 },
  { username: "pixelFox", score: 78 },
  { username: "orbit", score: 95 },
  { username: "cache_me", score: 88 },
  { username: "lambda_lily", score: 71 }
];

function findRelativeRanks(score: number[]): string[] {
  const rankLabels: Record<number, string> = {
    0: "Gold Medal",
    1: "Silver Medal",
    2: "Bronze Medal"
  };

  const result: string[] = new Array(score.length);

  const rankedScores = score
    .map((value: number, index: number): [number, number] => [value, index])
    .sort((firstItem: [number, number], secondItem: [number, number]): number => secondItem[0] - firstItem[0]);

  for (let rankIndex = 0; rankIndex < rankedScores.length; rankIndex += 1) {
    const [, originalIndex] = rankedScores[rankIndex] as [number, number];

    const label = rankLabels[rankIndex];
    if (label !== undefined) {
      result[originalIndex] = label;
    } else {
      result[originalIndex] = String(rankIndex + 1);
    }
  }

  return result;
}

export function RelativeRanksVisualizer(): JSX.Element {
  const [showLeaderboard, setShowLeaderboard] = useState<boolean>(false);

  const sortedPlayers = useMemo((): Player[] => {
    return [...DEFAULT_PLAYERS].sort((a: Player, b: Player): number => b.score - a.score);
  }, []);

  const ranksForSorted = useMemo((): string[] => {
    const scores = sortedPlayers.map((p: Player): number => p.score);
    return findRelativeRanks(scores);
  }, [sortedPlayers]);

  return (
    <section className="section-card demo-card">
      <div className="demo-head">
        <h2>Visual Demo</h2>
        <span className="pill">Leaderboard ranks</span>
      </div>
      <p>
        Players start in arbitrary order. Press the button to sort by score and assign Gold, Silver, Bronze, and numeric
        ranks—the same labels <code>findRelativeRanks</code> returns for each score position.
      </p>

      <div className="demo-actions">
        <button
          type="button"
          className="tab-button"
          onClick={(): void => {
            setShowLeaderboard(true);
          }}
        >
          Show leaderboard
        </button>
        <button
          type="button"
          className="tab-button"
          onClick={(): void => {
            setShowLeaderboard(false);
          }}
        >
          Reset
        </button>
      </div>

      <p className="demo-note">{showLeaderboard ? "Sorted by score (highest first)." : "Registration order — ranks hidden."}</p>

      <div
        className={`relative-ranks-board${showLeaderboard ? "" : " relative-ranks-board--compact"}`}
        role="table"
        aria-label={showLeaderboard ? "Leaderboard" : "Players"}
      >
        <div className="relative-ranks-row relative-ranks-header" role="row">
          {showLeaderboard ? <span role="columnheader">Rank</span> : null}
          <span role="columnheader">Player</span>
          <span role="columnheader">Score</span>
        </div>
        {(showLeaderboard ? sortedPlayers : DEFAULT_PLAYERS).map((player: Player, index: number): JSX.Element => {
          const rankLabel = showLeaderboard ? ranksForSorted[index] : null;
          return (
            <div key={player.username} className="relative-ranks-row" role="row">
              {showLeaderboard ? (
                <span className="relative-ranks-rank" role="cell">
                  {rankLabel}
                </span>
              ) : null}
              <span role="cell">{player.username}</span>
              <span className="relative-ranks-score" role="cell">
                {player.score}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
