for(var i=0;i<10;i++)
{
    for(var j=0;j<10-i;j++)
    {
        process.stdout.write(' ');
    }
    for(var k=0;k<i;k++)
    {
process.stdout.write(`${i} `)
    }
console.log(' ');
}