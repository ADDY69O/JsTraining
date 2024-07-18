const data = {
  company: {
    departments: [
      {
        name: "Engineering",
        employees: [
          { id: 1, name: "Alice", role: "Engineer" },
          { id: 2, name: "Bob", role: "Senior Engineer" },
        ],
      },
      {
        name: "HR",
        employees: [{ id: 3, name: "Carol", role: "HR Manager" }],
      },
    ],
  },
};

const returnDataByKey = (data, key, value) => {
  const resultData = data.filter((obj) => obj[key] == value);

  return resultData;
};

const manageCompany = (data, operation, departmentName, employee) => {
  switch (operation) {
    case "add":
      if (!employee.id) {
        console.log("Required Id for creating the employee");
        return;
      }

      // step 1: check whether the departement is present or not
      const departmentData = returnDataByKey(
        data.company.departments,
        "name",
        departmentName
      );

      if (departmentData.length > 0) {
        const employeeData = returnDataByKey(
          departmentData[0].employees,
          "id",
          employee.id
        );
        if (employeeData.length == 0) {
          departmentData[0].employees.push(employee);
        } else {
          console.log("Employee already present in the department");
          return;
        }
      }
      // step 2: If the department is not present create the new department
      else {
        const newDepartment = new Object();
        newDepartment.name = departmentName;
        newDepartment.employees = new Array();

        newDepartment.employees.push(employee);
        data.company.departments.push(newDepartment);
      }

      break;
    case "remove":
      if (!employee.id) {
        console.log("Required Id for creating the employee");
        return;
      }
      const departmentWiseData = returnDataByKey(
        data.company.departments,
        "name",
        departmentName
      );
      if (departmentWiseData.length == 0) {
        console.log("Department not found");
        return;
      } else {
        const employeeData = returnDataByKey(
          departmentWiseData[0].employees,
          "id",
          employee.id
        );
        if (employeeData.length == 0) {
          console.log("Employee not found in the department");
          return;
        } else {
          for (let department of data.company.departments) {
            if ((department.name = departmentName)) {
              department.employees = department.employees.filter(
                (employee) => employee.id != employee.id
              );
              return;
            }
          }
        }
      }
      break;
    case "update":
      if (!employee.id) {
        console.log("Required Id for updating the employee");
      } else {
        const departmentWiseData = returnDataByKey(
          data.company.departments,
          "name",
          departmentName
        );
        if (departmentWiseData.length == 0) {
          console.log("Department not found");
          return;
        } else {
          const employeeData = returnDataByKey(
            departmentWiseData[0].employees,
            "id",
            employee.id
          );
          if (employeeData.length == 0) {
            console.log("Employee not found in the department");
            return;
          } else {
            // find mrthod
            for (let department of data.company.departments) {
              if ((department.name = departmentName)) {
                for (let employe of department.employees) {
                  if (employe.id == employee.id) {
                    for (let empData in employee) {
                      if (empData != "id") {
                        employe[empData] = employee[empData];
                      }
                    }
                    return;
                  }
                }
              }
            }
          }
        }
      }
      break;
    case "find":
      const result = returnDataByKey(
        data.company.departments,
        "name",
        departmentName
      );

      for (let element in result[0]) {
        if (typeof result[0][element] == "object") {
          console.log(element + " : [ ");

          for (let singleObj of result[0][element]) {
            console.log("{");
            for (let singleObjKey in singleObj) {
              console.log(singleObjKey + " : " + singleObj[singleObjKey]);
            }
            console.log("}");
          }

          console.log("]");
        } else {
          console.log(element + " : " + result[0][element]);
        }
      }

      break;
    default:
      console.log("not a valid case");
      break;
  }
};

// console.log("******Engineering data before addition*****");
// manageCompany(data, "find", "Engineering");

// manageCompany(data, "add", "Engineering", {
//   id: 4,
//   name: "Dave",
//   role: "Intern",
// });

// console.log("******Engineering data After addition*****");
// manageCompany(data, "find", "Engineering");

// console.log("******HR data before addition*****");
// manageCompany(data, "find", "HR");

// manageCompany(data, "remove", "HR", { id: 3 });

// console.log("******HR data before addition*****");
// manageCompany(data, "find", "HR");

console.log("******Engineering data before updation*****");
manageCompany(data, "find", "Engineering");

manageCompany(data, "update", "Engineering", {
  id: 2,
  name: "Robert",
  role: "Lead Engineer",
});

console.log("******Engineering data after updation*****");
manageCompany(data, "find", "Engineering");

// manageCompany(jsonObject, "find", "Engineering");
