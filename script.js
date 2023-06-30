document.getElementById("tabuada").addEventListener('click', calc =>{
    let num = document.querySelector('input#numero');
    let tab = document.querySelector('select#seltab');
    if(num.value.length == 0){
        throw new Error(alert("É Necessário que um número sejá digitado"))
    } else{
        let n = Number(num.value);
        tab.innerHTML = ''
        for (c = 0; c <= 10; c++){
            let item = document.createElement('option');
            item.text = `${n} X ${c} = ${n * c}`;
            tab.appendChild(item)
        }
    }
});
