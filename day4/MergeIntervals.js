const intervals = [
  [15, 18],
  [2, 3],
  [1, 3],
  [2, 6],
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

  //   intervals.sort(function (a, b) {
  //     return a[1].localeCompare(b[1]);
  //   });

  return intervals;
};

const sortedMergeIntervals = (data) => {
  let mergedData = [];

  let current = data[0];

  let j = 1;
  while (j < data.length) {
    if (current[0][1] == data[j][1] && current[0][0] == data[j][0]) {
      j++;
    } else if (current[0][1] >= data[j][0] && current[0][1] <= data[j][1]) {
      let array = new Array();
      array.push(data[j][0], data[j][1]);
      current = array;
      j++;
    } else {
      mergedData.push(current);
      current = data[j];
      j++;
    }
  }

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
