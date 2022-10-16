// for memory 
function memoryCost(){
    const unifiedMemory = document.getElementById('extra-memory-cost');
    const unifiedMemoryText = unifiedMemory.innerText;
    return unifiedMemoryText;
}

// for storage 
// function storageCost(isCost){
    
// }

// // for delivery
// function deliveryCost(isDelivered){
    
// }

// calculation



// memory events
document.getElementById('8GB-memory').addEventListener('click', function(){
    memoryCost('unifiedMemoryText');
});

document.getElementById('16GB-memory').addEventListener('click', function(){
    memoryCost('unifiedMemoryText');
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