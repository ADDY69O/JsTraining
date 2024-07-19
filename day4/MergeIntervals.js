const intervals = [
  [15, 18],

  [1, 3],

  [8, 10],
  [2, 6],
];

const sortedData = (intervals) => {
  //   for (let index = 1; index < intervals.length; index++) {
  //     if (intervals[index - 1][0] > intervals[index][0]) {
  //       [intervals[index - 1][0], intervals[index][0]] = [
  //         intervals[index][0],
  //         intervals[index - 1][0],
  //       ];

  //       [intervals[index - 1][1], intervals[index][1]] = [
  //         intervals[index][1],
  //         intervals[index - 1][1],
  //       ];
  //     }
  //   }
  intervals.sort((a, b) => a[0] - b[0]);

  // intervals.sort(function (a, b) {
  //   return a[1].localeCompare(b[1]);
  // });

  return intervals;
};

const sortedMergeIntervals = (data) => {
  let mergedData = [];

  let current = data[0];

  for (let index = 1; index < data.length; index++) {
    if (current[1] < data[index][0]) {
      current = [current[0], Math.max(current[1], data[index][1])];
    } else {
      mergedData.push(current);
      current = [data[index][0], data[index][1]];
    }
  }

  mergedData.push(current);

  return mergedData;
};

const mergeIntervals = (intervals) => {
  // Step 1 : Sort the intervals

  const data = sortedData(intervals);

  console.log("sorted interval");
  console.log(data);

  // Step 2 : Merge the intervals
  return sortedMergeIntervals(data);
};

console.log(mergeIntervals(intervals));
