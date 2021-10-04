"use strict";

const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2020-01-24",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-01-24",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore <= 60,
  };
  array.push(newSubmission);
};

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// deleteSubmissionByIndex(submissions, 1);

const deleteSubemissionByName = (array, name) => {
  let index = array.findIndex((item) => {
    item.name === name;
  });
  array.splice(index, 1);
};

// deleteSubemissionByName(submissions, "Jill");

const editSubmission = (array, index, score) => {
  //   array[index].score = score;
  //   array[index].passed = score >= 60;
  array.splice(index, 1, {
    ...array[index],
    score: score,
    passed: score >= 60,
  });
};

editSubmission(submissions, 2, 95);
console.log(submissions);

const findSubmissionByName = (array, name) => {
  return array.find((item) => {
    return item.name === name;
  });
};

// const findSubmissionByName = (array, name) =>
//   array.find((item) => item.name === name);
// console.log(findSubmissionByName(submissions, "Jack"));

// const findLowestScore = (array) => {
//   let currentLowest = array[0];
//   array.forEach((item) => {
//     if (item.score < currentLowest.score) {
//       currentLowest = item;
//     }
//   });
//   return current.Lowest;
// };

const findLowestScore = (array) => {
  return array.reduce((accumilator, currentValue) => {
    return currentValue < accumilator ? curentValue : accumilator;
  });
};

// const findAverageScore = (array) => {
//   return (
//     array.reduce((accumilator, currentValue) => {
//       return accumilator + currentValue;
//     }),
//     0 / array.length
//   );
// };

const findAverageScore = (array) => {
  let sum = 0;
  for (let element of array) {
    sum += element.score;
  }
  return sum / array.length;
};

const filterPassing = (array) => {
  return array.filter((submission) => {
    return submission.passed;
  });
};
console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
  return array.filter((item) => {
    return item.score >= 90;
  });
};

console.log(filter90AndAbove(submissions));

const filterByNameLength = (array, length) => {
  return array.filter((item) => {
    return item.name.length === length;
  });
};
console.log(filterByNameLength(submissions, 4));
