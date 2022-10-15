// for memory 
function memoryCost(isAdd){
    const unifiedMemory = document.getElementById('extra-memory-cost');
    if(isAdd == true){
        unifiedMemory.innerText = 0;
    }
    else{
        unifiedMemory.innerText = 180;
    }
}

// memory events
document.getElementById('8GB-memory').addEventListener('click', function(){
    memoryCost(true);
});

document.getElementById('16GB-memory').addEventListener('click', function(){
    memoryCost(false);
});