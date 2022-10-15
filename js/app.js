function memoryButton(memoryId, chooseMemory){
    const buyMemory = document.getElementById('extra-memory-cost');
    const buyMemoryInput = buyMemory.innerText;
    if (chooseMemory == true){
        newPrice = $0;
    }
    else if(chooseMemory == false){
        newPrice = $180;
    }
    return buyMemoryInput;
}


document.getElementById('8GB-memory').addEventListener('click', function(){
    memoryButton('8GB', true);
});

document.getElementById('16GB-memory').addEventListener('click', function(){
    memoryButton('16GB', false);
});