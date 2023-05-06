let i,j;

for(i=2;i<=200;i++)
{
    let fact=0;
    for(j=1;j<=i;j++)
    {
        if(i%j==0)
        {
            fact++;
        }
    }
    if(fact==2)
{
    console.log(i);
}
}

