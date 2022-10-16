// memory
function memoryBtn(price){
    const unifiedMemory = document.getElementById('extra-memory-cost');
    const unifiedMemoryText = unifiedMemory.innerText = price;
    return unifiedMemoryText;
}


// storage
function storageBtn(storage){
    const ssdStorage = document.getElementById('extra-storage-cost');
    const ssdStorageText = ssdStorage.innerText = storage;
    return ssdStorageText;
}


// delivery option
function deliveryBtn(delivery){
    const deliveryPrice = document.getElementById('delivery-charge');
    const deliveryPriceText = deliveryPrice.innerText = delivery;
    return deliveryPriceText;
}


function calculateTotal(){
    const bestPrice = 1219;
    const extraMemoryCost = memoryBtn(price);
    const extraStorageCost = storageBtn(storage);
    const deliveryCharge = deliveryBtn(delivery);
    const totalPrice = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;
    
    document.getElementById('best-price').innerText = bestPrice;
    document.getElementById('extra-memory-cost').innerText = extraMemoryCost;
    document.getElementById('extra-storage-cost').innerText = extraStorageCost;
    document.getElementById('delivery-charge').innerText = deliveryCharge;
    document.getElementById('total-price').innerText = totalPrice;

}


// memory events
document.getElementById('8GB-memory').addEventListener('click', function(){
    memoryBtn('0');
});

document.getElementById('16GB-memory').addEventListener('click', function(){
    memoryBtn('180');
});

// storage events
document.getElementById('256GB-storage').addEventListener('click', function(){
    storageBtn('0');
});

document.getElementById('512GB-storage').addEventListener('click', function(){
    storageBtn('100');
});

document.getElementById('1TB-storage').addEventListener('click', function(){
    storageBtn('180');
});

// delivery events
document.getElementById('free-delivery').addEventListener('click', function(){
    deliveryBtn('0');
});
document.getElementById('pay-delivery').addEventListener('click', function(){
    deliveryBtn('20');
});