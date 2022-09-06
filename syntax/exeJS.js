function func1(number)
{
    if(number%2==0)
    {
        return number%10;
    }
    else
    {
        return String(number)[0]; 
    }
}
function func2(number)
{
    return String(number).length
}
function func3(string)
{
    const len = string.length
    for(let i=0;i<len;i++)
    {
        if(string[i]!== string[len-1-i])
        {
            return false
        }
    }
    return true
}
function func4(base, power)
{
    if(power!=0)
        return func4(base, power-1)*base
    else
        return 1;
}
function func5(numbers)
{
    let sum=0;
    for(let i=0;i<numbers.length;i++)
    {
        sum=sum+numbers[i];
    }
    return sum/numbers.length;
}
function func6(numbers)
{
    return numbers.sort();
}
