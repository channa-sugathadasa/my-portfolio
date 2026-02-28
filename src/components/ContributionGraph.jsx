import React, { useMemo } from 'react';

function generateContributions() {
  const weeks = 52;
  const days = 7;
  const data = [];
  for (let w = 0; w < weeks; w++) {
    const week = [];
    for (let d = 0; d < days; d++) {
      const rand = Math.random();
      let count = 0;
      if (rand > 0.55) count = Math.floor(Math.random() * 4) + 1;
      if (rand > 0.75) count = Math.floor(Math.random() * 8) + 4;
      if (rand > 0.92) count = Math.floor(Math.random() * 12) + 8;
      week.push(count);
    }
    data.push(week);
  }
  return data;
}

function getColor(count) {
  if (count === 0) return 'bg-gh-surface border-gh-border/30';
  if (count < 4) return 'bg-gh-green/20 border-gh-green/20';
  if (count < 8) return 'bg-gh-green/40 border-gh-green/30';
  if (count < 12) return 'bg-gh-green/70 border-gh-green/50';
  return 'bg-gh-green border-gh-green';
}

export default function ContributionGraph() {
  const data = useMemo(() => generateContributions(), []);
  const total = data.flat().reduce((a, b) => a + b, 0);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="game-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="font-mono text-xs text-gh-muted mb-1">CONTRIBUTION ACTIVITY</div>
              <div className="font-display font-bold text-gh-text">
                <span className="text-gh-green neon-text-subtle">{total.toLocaleString()}</span>
                <span className="text-gh-muted font-normal text-sm ml-2">contributions in 2026</span>
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
            <div className="flex gap-1 min-w-max">
              {data.map((week, wi) => (
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
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-6 pt-4 border-t border-gh-border/50">
            {[
              { label: 'Current Streak', value: '47 days', color: 'text-gh-orange' },
              { label: 'Longest Streak', value: '124 days', color: 'text-gh-cyan' },
              { label: 'Total Repos', value: '87', color: 'text-gh-blue' },
              { label: 'Pull Requests', value: '342', color: 'text-gh-purple' },
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
