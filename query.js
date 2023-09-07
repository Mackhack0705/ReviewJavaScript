const data = {
  A: {
    Subjects: ["Math", "Science", "History"],
    Faculty: ["John Smith", "Jane Doe", "David Johnson"],
    "Start Date": "2023-09-01",
    "End Date": "2023-12-31",
    Branches: {
      "Branch A": {
        Faculty: "Alice Brown",
        total: {
          completed: 30,
          joinedNew: 15,
          ongoing: 25,
        },
      },
      "Branch B": {
        Faculty: "Bob Wilson",
        total: {
          completed: 28,
          joinedNew: 12,
          ongoing: 22,
        },
      },
    },
  },
  B: {
    Subjects: ["English", "Physics", "Chemistry"],
    Faculty: ["Mary Adams", "Michael Clark", "Sarah Evans","John Smith"],
    "Start Date": "2023-08-15",
    "End Date": "2023-12-31",
    Branches: {
      "Branch A": {
        Faculty: "Eve Green",
        total: {
          completed: 35,
          joinedNew: 20,
          ongoing: 30,
        },
      },
      "Branch B": {
        Faculty: "Frank White",
        total: {
          completed: 32,
          joinedNew: 14,
          ongoing: 28,
        },
      },
    },
  },
  C: {
    Subjects: ["Computer Science", "Economics", "Psychology"],
    Faculty: ["George Lee", "Helen Davis", "Ivy Martin","John Smith"],
    "Start Date": "2023-09-15",
    "End Date": "2023-12-31",
    Branches: {
      "Branch A": {
        Faculty: "Jack Brown",
        total: {
          completed: 40,
          joinedNew: 25,
          ongoing: 35,
        },
      },
      "Branch B": {
        Faculty: "Jill Smith",
        total: {
          completed: 38,
          joinedNew: 18,
          ongoing: 32,
        },
      },
    },
  },
};

// export default data;


// Question 1

// import data from "./companydata.js";

// const subjects = Object.keys(data).map((program) => {
//   console.log(program);
// });

// Question 2
// import data from "./companydata.js";

// const subjects = Object.keys(data).map((program) => {
//   const programs = data[program];
//   const value = Object.keys(programs).map((indices) => {
//     console.log(indices);
//   });
// });
// Question 3
// import data from "./companydata.js";

// const dates = Object.keys(data).map((program) => ({
//   Programs: program,
//   Startdate: data[program]['Start Date'],
//   "End date": data[program]['End Date'],
// }));

// console.log(dates);
// Question 4
// const progAData = data.A.Branches["Branch A"].total;
// console.log(progAData.completed);
// console.log(progAData.joinedNew);

// Question 5
// let commonFaculty = [];
// data.A.Faculty.forEach((facultyA) => {
//   const isCommonFaculty = data.B.Faculty.includes(facultyA) && data.C.Faculty.includes(facultyA);
//   if(isCommonFaculty) commonFaculty.push(facultyA);
// });

// if(commonFaculty.length == 0) {
//   console.log('no common faculty');
// } else {
//   console.log(commonFaculty);
// }

// Question 6

const branchData = Object.values(data).flatMap((program) => {
  return Object.values(program.Branches);
})

console.log(branchData)

const bdata = branchData.map((Branches) => {
  return (Branches.total);
});

console.log(bdata);
bdata.map((datas) => {
  console.log(datas.completed)
})