import React, { useMemo, useState, useEffect } from 'react';

const GITHUB_USERNAME = 'channa-sugathadasa'; 

function getColor(count) {
  if (count === 0) return 'bg-gh-surface border-gh-border/30';
  if (count < 4) return 'bg-gh-green/20 border-gh-green/20';
  if (count < 8) return 'bg-gh-green/40 border-gh-green/30';
  if (count < 12) return 'bg-gh-green/70 border-gh-green/50';
  return 'bg-gh-green border-gh-green';
}

export default function ContributionGraph() {
  const [weeks, setWeeks] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
        );
        if (!res.ok) throw new Error('Failed to fetch');
        const json = await res.json();

        // API returns { contributions: [ { date, count, level }, ... ] }
        // Group the flat array into weeks (chunks of 7)
        const flat = json.contributions; // sorted oldest → newest
        const grouped = [];
        for (let i = 0; i < flat.length; i += 7) {
          grouped.push(flat.slice(i, i + 7).map(d => d.count));
        }

        setWeeks(grouped);
        setTotal(flat.reduce((sum, d) => sum + d.count, 0));
      } catch (err) {
        setError('Could not load contributions.');
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="game-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="font-mono text-xs text-gh-muted mb-1">CONTRIBUTION ACTIVITY</div>
              <div className="font-display font-bold text-gh-text">
                {loading ? (
                  <span className="text-gh-muted text-sm">Loading...</span>
                ) : error ? (
                  <span className="text-red-400 text-sm">{error}</span>
                ) : (
                  <>
                    <span className="text-gh-green neon-text-subtle">{total.toLocaleString()}</span>
                    <span className="text-gh-muted font-normal text-sm ml-2">contributions in the last year</span>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-gh-muted">
              <span>Less</span>
              {['bg-gh-surface', 'bg-gh-green/20', 'bg-gh-green/40', 'bg-gh-green/70', 'bg-gh-green'].map((c, i) => (
                <div key={i} className={`w-3 h-3 rounded-sm border border-gh-border/30 ${c}`} />
              ))}
              <span>More</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            {loading ? (
              <div className="h-24 flex items-center justify-center text-gh-muted text-sm font-mono">
                Fetching from GitHub...
              </div>
            ) : !error && (
              <div className="flex gap-1 min-w-max">
                {weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-1">
                    {week.map((count, di) => (
                      <div
                        key={di}
                        title={`${count} contributions`}
                        className={`w-3 h-3 rounded-sm border cursor-pointer transition-transform hover:scale-125 ${getColor(count)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Your stats row stays the same */}
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-4 border-t border-gh-border/50">
            {[
              { label: 'Current Streak', value: '47 days', color: 'text-gh-orange' },
              { label: 'Total Repos', value: '14', color: 'text-gh-blue' },
              { label: 'Pull Requests', value: '12', color: 'text-gh-purple' },
            ].map(({ label, value, color }) => (
              <div key={label}>
                <div className="font-mono text-xs text-gh-muted">{label}</div>
                <div className={`font-display font-bold ${color}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}