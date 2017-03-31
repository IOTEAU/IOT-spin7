var stac = new Array();
var getArray = [2, 3, 23,2,34,3,4,45]


insertQueue(getArray)



function insertQueue(item) {
    for (var i = 0; i < item.length; i++) {
        inQueue(item[i])
    }

}

function inQueue(data) {


    stac.push(data)


}
// console.log(stac)
chackDataQueue(stac)


function chackDataQueue(dataQueue) {
    
    while (!isEmpty()) {



        if (dataQueue.length <= 4) {

            outQueue()

        } else {

            outQueueWiat()

        }

    }
}


function outQueue() {

    var sum = stac.shift()
    console.log(sum)

    
}


function outQueueWiat() {

    if (true) {}
    

    
}






function isEmpty() {
    return 0 == stac.length
}
