function MoodStreak({ moods }) {

  const calculateStreak = () => {
    if (moods.length === 0) return 0;

    // Convert dates to unique set
    const dates = [...new Set(
      moods.map(m => new Date(m.date).toDateString())
    )];

    // Sort dates (latest first)
    const sortedDates = dates
      .map(d => new Date(d))
      .sort((a, b) => b - a);

    let streak = 1;

    for (let i = 1; i < sortedDates.length; i++) {
      const prev = sortedDates[i - 1];
      const curr = sortedDates[i];

      const diff =
        (prev - curr) / (1000 * 60 * 60 * 24);

      if (diff === 1) {
        streak++;
      } else {
        break;
      }
    }

    return streak;
  };

  return (
    <div className="card streak-card">
      <h3>🔥 Mood Streak</h3>
      <p className="streak-count">
        {calculateStreak()} Days
      </p>
    </div>
  );
}

export default MoodStreak;
