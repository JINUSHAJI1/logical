let str = "malayalam";

let rev = "";

    for(let i = str.length-1; i>=0; i--)

    {

       

       //console.log(str[i])

        rev += str[i];

       //console.log(rev)

    }

    console.log(rev)

    //return rev;

if( str == rev)

{console.log("palindrome")}

else

{ console.log("not palindrome")}