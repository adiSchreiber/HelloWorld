function func1 (a)
{
    Object.keys(a).forEach(key=>{
        if(!isNaN(a[key]))

        {
            a[key] = a[key]*2
        }
    })
    
}
function func2 (a)
{
    Object.keys(a).forEach(key=>{
        let k = key;
        let v = a[key];
        key = v;
        a[key] = k;
    })
}


function makeCounter() {
    var count = 0;
  
    return function() {
      return count++;
    };
  }

  

  