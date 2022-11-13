
// for(let i=1;i<5;i++)
// {
//     console.log('*');
// }
// console.log('* * * *');


for(let i=1;i<10;i++)
{
    process.stdout.write('* ');
}
process.stdout.write('\n');
for(let j=1;j<10;j++)
{
    if((j==1)||(j==9)){
        process.stdout.write('* ');
     }
     else{
        process.stdout.write('  ');
     }  
}
process.stdout.write('\n');
for(let k=1;k<10;k++)
{
    process.stdout.write('* ');
}

