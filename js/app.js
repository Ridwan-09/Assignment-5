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

// for storage 
function storageCost(isCost){
    const unifiedStorage = document.getElementById('extra-storage-cost');
    if(isCost == true){
        unifiedStorage.innerText = 0;
    }
    if(isCost == true){
        unifiedStorage.innerText = 100; 
    }
    else if(isCost == false){
        unifiedStorage.innerText = 180;
    }
}

// memory events
document.getElementById('8GB-memory').addEventListener('click', function(){
    memoryCost(true);
});

document.getElementById('16GB-memory').addEventListener('click', function(){
    memoryCost(false);
});

// storage events
document.getElementById('256GB-storage').addEventListener('click', function(){
    storageCost(true);
});

document.getElementById('512GB-storage').addEventListener('click', function(){
    storageCost(false);
});

document.getElementById('1TB-storage').addEventListener('click', function(){
    storageCost(false);
});