let student={
    "name":"Daenish",
    "rollno":10,
    isRegular:function()
    {
        return true;
    },
    sayHello:function()
    {
        return `${this.name} says hello`;
    }
}
console.log(student.name);
console.log(student['name']);

student.gender="male";
student.adddress="bewora";

console.log(student.sayHello);
for(const key in student)
{
    console.log(key,student[key]);
}


console.log(Object.keys(student));
console.log(Object.values(student));