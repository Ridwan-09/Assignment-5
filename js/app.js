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


// storage
function storageBtn(storage){
    const ssdStorage = document.getElementById('extra-storage-cost');
    const ssdStorageText = ssdStorage.innerText;
    if(storage == true){
        ssdStorage.innerText = 0;
    }
    else if(storage == true){
        ssdStorage.innerText = 100;
    }
    else{
        ssdStorage.innerText = 180;
    }
    return ssdStorageText;
}

// memory events
document.getElementById('8GB-memory').addEventListener('click', function(){
    memoryBtn(true);
});

document.getElementById('16GB-memory').addEventListener('click', function(){
    memoryBtn(false);
});

// storage events
document.getElementById('256GB-storage').addEventListener('click', function(){
    storageBtn(true);
});

document.getElementById('512GB-storage').addEventListener('click', function(){
    storageBtn(true);
});

document.getElementById('1TB-storage').addEventListener('click', function(){
    storageBtn(false);
});