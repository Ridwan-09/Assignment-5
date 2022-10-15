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
    else if(isCost == false){
        unifiedStorage.innerText = 100;
    }
    else if(isCost == false){
        unifiedStorage.innerText = 180;
    }
}

// for delivery
function deliveryCost(isDelivered){
    const deliverOption = document.getElementById('delivery-charge');
    if(isDelivered == true){
        deliverOption.innerText = 0;
    }
    else{
        deliverOption.innerText = 20;
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


// delivery option events
document.getElementById('free-delivery').addEventListener('click', function(){
    deliveryCost(true);
});

document.getElementById('pay-delivery').addEventListener('click', function(){
    deliveryCost(false);
});