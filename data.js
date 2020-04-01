const DATA = {
    "employees":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"},
        {"firstName":"Doni", "lastName":"Wong"},
        {"firstName":"Slamet", "lastName":"Jordan"},
        {"firstName":"Carlo", "lastName":"wee"},
        {"firstName":"philips", "lastName":"moris"},
        {"firstName":"angga", "lastName":"dwi"},
        {"firstName":"vicky", "lastName":"sasongko"},
        {"firstName":"nadya", "lastName":"lembayung"},
    ],
"jobs": [
    {"department": "QC", "title": "QA"},
    {"department": "IT", "title": ['IT Support', 'Software engineer', 'UI/UX', 'DevOps', 'Tester']},
    {"department": "Human Resources Development", "title": "SPV"},
    {"department": "Finance and Accounting", "title": "Finance"},
    {"department": "Marketing and Custemer Service", "title":"marketing"},
    {"department": "Maintenance and facility", "title":"maintenance"},
],

"details": [
    {"age":[22, 23, 24, 29, 30, 32]},
    {"experience": ['2 Tahun', '3 Tahun', '4 Tahun',]}
]
}


// let name = DATA.employees[0].firstName + ' ' + DATA.employees[0].lastName
// let division = 'Department' + ':' + DATA.jobs[1].department + ' ' + 'title' + ':' + DATA.jobs[1].title[2]
// let years = 'age' + ':' + '' + DATA.details[0].age[1] + ' ' + 'experience' + ':' + ' ' + DATA.details[1].experience[0]
 
// console.log(`name: ${name}, division: ${division}, years: ${years} `);

let name = DATA.employees
let job = DATA.jobs;
let age = DATA.details;
let exp = DATA.details[1];

// name :jhon doe, jobs: department: IT, title: UI/UX, age: 23, experience: 2 Tahun
console.log (`
              Name: ${name[0].firstName} ${name[0].lastName}
              Department: ${job[1].department}, Title : ${job[1].title[2]}
              Age: ${age[0].age[1]}
              Experience : ${exp.experience[0]}
              `)
 //name :anna smith, jobs: department: Human Resources Development, title: SPV, age: 29, experience: 4 Tahun
console.log (`
              Name: ${name[1].firstName} ${name[1].lastName}
              Department: ${job[2].department}, Title : ${job[2].title}
              Age: ${age[0].age[3]}
              Experience : ${exp.experience[2]}
              `)
//name :Peter jhon, jobs: department: IT, title: DevOps, age: 24, experience: 3 Tahun
console.log (`
              Name: ${name[2].firstName} ${name[2].lastName}
              Department: ${job[1].department}, Title : ${job[1].title[3]}
              Age: ${age[0].age[2]}
              Experience : ${exp.experience[1]}
              `)
//name :doni wong, jobs: department: IT, title: Tester, age: 22, experience: 2 Tahun
console.log (`
              Name: ${name[3].firstName} ${name[3].lastName}
              Department: ${job[1].department}, Title : ${job[1].title[4]}
              Age: ${age[0].age[0]}
              Experience : ${exp.experience[0]}
              `)
//name :slamet jordan, jobs: department: IT, title: UI/UX, age: 23, experience: 2 Tahun
console.log (`
              Name: ${name[4].firstName} ${name[4].lastName}
              Department: ${job[1].department}, Title : ${job[1].title[2]}
              Age: ${age[0].age[1]}
              Experience : ${exp.experience[0]}
              `)
//name :carlo wee, jobs: department: Finance and Accounting, title: Finance, age: 32, experience: 4 Tahun
console.log (`
              Name: ${name[5].firstName} ${name[5].lastName}
              Department: ${job[3].department}, Title : ${job[3].title}
              Age: ${age[0].age[5]}
              Experience : ${exp.experience[2]}
              `)

//name :philips morris, jobs: department: Maintenance and Facility, title: maintenance, age: 29, experience: 2 Tahun
console.log (`
              Name: ${name[6].firstName} ${name[6].lastName}
              Department: ${job[5].department}, Title : ${job[5].title}
              Age: ${age[0].age[3]}
              Experience : ${exp.experience[0]}
              `)
//name :angga dwi, jobs: department: IT, title: IT Support, age: 23, experience: 2 Tahun
console.log (`
              Name: ${name[7].firstName} ${name[7].lastName}
              Department: ${job[1].department}, Title : ${job[1].title[0]}
              Age: ${age[0].age[1]}
              Experience : ${exp.experience[0]}
              `)
//name :vicky sasongko, jobs: department: QC, title: QA, age: 24, experience: 2 Tahun
console.log (`
              Name: ${name[8].firstName} ${name[8].lastName}
              Department: ${job[0].department}, Title : ${job[0].title}
              Age: ${age[0].age[2]}
              Experience : ${exp.experience[0]}
              `)
//name :nadya lembayung, jobs: department: IT, title: Software engineer, age: 23, experience: 2 Tahun
console.log (`
              Name: ${name[9].firstName} ${name[9].lastName}
              Department: ${job[1].department}, Title : ${job[1].title[1]}
              Age: ${age[0].age[1]}
              Experience : ${exp.experience[0]}
              `)