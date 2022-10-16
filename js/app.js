// for memory 
function memoryCost(){
    const unifiedMemory = document.getElementById('extra-memory-cost');
    const unifiedMemoryText = unifiedMemory.innerText;
    return unifiedMemoryText;
}

// for storage 
function storageCost(){
    const ssdStorage = document.getElementById('extra-storage-cost');
    const ssdStorageText = ssdStorage.innerText;
    return ssdStorageText;
}

// // for delivery
function deliveryCost(){
    const deliverCharge = document.getElementById('delivery-charge');
    const deliverChargeText = deliverCharge.innerText;
    return deliverChargeText;
}

// calculation



// memory events
document.getElementById('8GB-memory').addEventListener('click', function(){
    
});

document.getElementById('16GB-memory').addEventListener('click', function(){
    
});

// // storage events
// document.getElementById('256GB-storage').addEventListener('click', function(){
//     storageCost(true);
// });

// document.getElementById('512GB-storage').addEventListener('click', function(){
//     storageCost(false);
// });

// document.getElementById('1TB-storage').addEventListener('click', function(){
//     storageCost(false);
// });


// // delivery option events
// document.getElementById('free-delivery').addEventListener('click', function(){
//     deliveryCost(true);
// });

// document.getElementById('pay-delivery').addEventListener('click', function(){
//     deliveryCost(false);
// });