console.log("Exception handling");
try{
    const a=10;
    if(a==5)
    {
        throw new Error("Hello this is my personal error");
    }
    console.log(a);
}catch(error)
{
 console.log(error);
}finally
{
    console.log("finally block");
}