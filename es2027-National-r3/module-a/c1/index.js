function getTopCourses(enrollments, topN) {
  const res = []
  enrollments.forEach(enrollment => {
    const includes = res.filter((e) => e.course == enrollment.course)

    if (includes.length == 0) res.push({course: enrollment.course, count: 1})
    else res[res.indexOf(includes[0])].count += 1
  });

  res.sort((a, b) => b.count - a.count)

  return res.slice(0, topN)
}

// Example usage:
const enrollments = [
  { course: "JavaScript Basics", student: "Alice" },
  { course: "JavaScript Basics", student: "Bob" },
  { course: "Advanced CSS", student: "Charlie" },
  { course: "Advanced CSS", student: "Eve" },
  { course: "React for Beginners", student: "Frank" },
  { course: "Advanced CSS", student: "Dave" },
  { course: "Laravel for Beginners", student: "Grace" },
];

console.log(getTopCourses(enrollments, 3));
// Output: [{ course: 'Advanced CSS', count: 3 }, { course: 'JavaScript Basics', count: 2 }, { course: 'React for Beginners', count: 1 }]

const enrollments2 = [
  { course: "Python 101", student: "Ivy" },
  { course: "Python 101", student: "Jack" },
  { course: "Python 101", student: "Kim" },
  { course: "Python 101", student: "Leo" },
  { course: "Data Structures", student: "Mia" },
  { course: "Data Structures", student: "Noah" },
  { course: "Web Security", student: "Olivia" },
];

console.log(getTopCourses(enrollments2, 2));
// Output: [{ course: 'Python 101', count: 4 }, { course: 'Data Structures', count: 2 }]
