let eno = document.getElementsByName('cssProperty');

let div = document.getElementById('change');

function set()
{
    
    for( let i = 0; i < eno.length; i++ )
    {
        let cssProperty = eno[ i ].getAttribute('id');
        
        let cssValue = eno[ i ].value;
        
        div.style[ cssProperty ] = cssValue;
    }
}

document.getElementById('set').addEventListener('click',set);
    
