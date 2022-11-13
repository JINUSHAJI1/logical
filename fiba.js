let v1=0;
let v2=1;
let v3;
let n=100;
let i=1;
console.log("Fib0nacci series");
process.stdout.write("0 ");
process.stdout.write("1 ");

while(v3!=55)
{
    v3=v1+v2;
    v1=v2;
    v2=v3;
    
    process.stdout.write(`${v3} `)
}