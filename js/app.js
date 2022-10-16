// memory
function memoryBtn(memory){
    const unifiedMemory = document.getElementById('extra-memory-cost');
    const unifiedMemoryText = unifiedMemory.innerText;
    if(memory == true){
        unifiedMemory.innerText = 0;
    }
    else {
        unifiedMemory.innerText = 180;
    }
    return unifiedMemoryText;
}

// memory events
document.getElementById('8GB-memory').addEventListener('click', function(){
    memoryBtn(true);
});

document.getElementById('16GB-memory').addEventListener('click', function(){
    memoryBtn(false);
});