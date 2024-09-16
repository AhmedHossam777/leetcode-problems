const getMinutesSinceMidnight = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

const findMinDifference = (timePoints) => {
  const minutes = timePoints.map(getMinutesSinceMidnight);
  minutes.sort((a, b) => a - b);

  let minDiff = 1440 + minutes[0] - minutes[minutes.length - 1];
  for (let i = 1; i < minutes.length; i++) {
    minDiff = Math.min(minDiff, minutes[i] - minutes[i - 1]);
  }

  return minDiff;
};

