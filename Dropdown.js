let eno = document.getElementsByName('cssProperty');

let div = document.getElementById('modify');

function change()
{
    
    for( let i = 0; i < eno.length; i++ )
    {
        let cssProperty = eno[ i ].getAttribute('id');
        
        let cssValue = eno[ i ].value;
        
        div.style[ cssProperty ] = cssValue;
    }
}

document.getElementById('change').addEventListener('click',change);
    
