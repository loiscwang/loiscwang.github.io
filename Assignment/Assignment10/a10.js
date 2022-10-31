
//Question 1//
var employeeInfo = [
    {
        "firstName": "Sam",
        "department": "Tech",
        "designation": "Manager", 
        "salary": "40000", 
        "raiseEligible": "true",
    },
    {
        "firstName": "Mary",
        "department": "Finance",
        "designation": "Trainee", 
        "salary": "18500", 
        "raiseEligible": "true",
    },
    {
        "firstName": "Bill",
        "department": "HR",
        "designation": "Exective", 
        "salary": "21200", 
        "raiseEligible": "false",
    }
] 

console.log (employeeInfo);




//Question 2//
var companyInfo = [
    {
        "companyName": "Tech Stars",
        "website": "www.techstars.site",
        "employee": [employeeInfo],
    }
]
console.log (companyInfo);



//Question 3//

var anna = {
    "firstName": "Anna",
    "department": "Tech",
    "designation": "Exective", 
    "salary": "25600", 
    "raiseEligible": "false",
    }

employeeInfo.push(anna);
console.log (employeeInfo);
console.log(companyInfo);




//Question 4//
var totalSalary = (
    string0 = (employeeInfo[0]['salary']),  
    string1 = (employeeInfo[1]['salary']),  
    string2 = (employeeInfo[2]['salary']), 
    string3 = (employeeInfo[3]['salary'])
)
console.log (totalSalary);




//Question 5//
if (employeeInfo["raiseEligible"] == true) {

}


