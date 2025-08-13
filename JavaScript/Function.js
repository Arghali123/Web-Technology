a=10;
function Test()
{
    let b=10;
    a=a+b;
    console.log('Inside test',a);
}
Test()

function sum(a,b=12)
{
    if(typeof a!='number' || typeof b!='number')
    {
        return
    }
    return a+b;
}
console.log(sum(1));
console.log(sum(2,5));
console.log(sum('2','5'));//undefined

//arrow function
const multiply=(argA,argB)=>
{
    return argA*argB;
}
console.log(multiply(1))//NAN
console.log(multiply(2,12));
console.log(multiply('2','4'));//typecast gardinxa


function findWeekDayByNumber(num)
{
    switch(num)
    {
        case 1:
            document.writeln("Sunday");
            break;
        case 2:
            document.writeln("Monday");
            break;
        case 3:
            document.writeln("Tuesday");
            break;
        case 4:
            document.writeln("Wednesday");
            break;
        case 5:
            document.writeln("Thusday");
            break;
        case 6:
            document.writeln("Friday");
            break;
        case 7:
            document.writeln("Satarday");
            break;
        default :
        document.writeln("Invalid option!!")
        
    }
}
findWeekDayByNumber(2);
