function myFirstPerceptron() {
  /** Should eat food?
   * Criteria                 Choice   Weight
   * Likes ice cream?       |   1   |   0.3
   * Likes brussel sprouts  |   0   |   0.4
   * Likes steak            |   1   |   0.6
   * Likes lettuce          |   0   |   0.1
   */
  const threshhold = 1.0;
  const inputDecisions = [1, 1, 1, 0];
  const weights = [0.3, 0.4, 0.6, 0.1];
  const weightedSum = inputDecisions.reduce(
    (previousValue, _currentValue, currentIndex) => {
      return (
        previousValue + inputDecisions[currentIndex] * weights[currentIndex]
      );
    },
    0
  );
  console.debug(`sum: ${weightedSum}`);

  return weightedSum > threshhold;
}
