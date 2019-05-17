const repl = require('repl');

class Heap  {
    constructor(data) {
	this.data= null;
	this.sorted = [];
    }

    createArray (len, max) {
	function getRandInt (max) {
	    return Math.floor(Math.random() * Math.floor(max));
	}
	let arr = [];
	for(let i = 1; i <= len; i++) {
	    let nonRepeatRandInt = getRandInt(max);
	    if(arr.indexOf(nonRepeatRandInt) === -1) {
		arr.push(nonRepeatRandInt);
	    } else {
		i--;
	    }
	}
	return arr;
    };

    floydHeapify (arr, parent) {
	let iParent = arr.indexOf(parent);
	let leftChildIndex = (2*iParent)+1;
	let rightChildIndex = (2*iParent)+2;
	let largestIndex;
	
	if(iParent === -1) {
	    return arr;
	};
	
	if (arr[leftChildIndex] === undefined && arr[rightChildIndex] === undefined) {
	    return this.floydHeapify(arr, arr[iParent-1]);
	}

	if(arr[rightChildIndex] === undefined) {
	    largestIndex = leftChildIndex;
	} else {
	    largestIndex = arr[leftChildIndex] > arr[rightChildIndex] ? leftChildIndex : rightChildIndex;
	}

	
	if((arr[leftChildIndex] === undefined && arr[rightChildIndex] === undefined) || parent >= arr[largestIndex]) {
	    return this.floydHeapify(arr, arr[iParent-1]);
	} else {
	    [arr[largestIndex], arr[iParent]] = [arr[iParent], arr[largestIndex]];
	    return this.floydHeapify(arr, arr[largestIndex]); 
	}
    }

    insert (item, arr) {
	arr.push(item);
	let lastIndex = arr.length-1;
	let indexParent = Math.floor((lastIndex -1)/2);
	let parent = arr[indexParent];
	console.log(indexParent, parent);
	return this.floydHeapify(arr, parent);
    }
    
    heapify (arr, parent) {
	
	return this.floydHeapify(arr, parent);
    };

    swapAndPush(arr) {
	
	this.sorted.push(arr[0]);
	arr[0]= arr[arr.length-1];
	arr.splice(arr.length-1, 1);
	return this.floydHeapify(arr, arr[0]);
    };
// same as swapAndPush but doesn't keep the value
    deleteMax (arr) {
	arr[0]= arr[arr.length-1];
	arr.splice(arr.length-1, 1);
	return this.floydHeapify(arr, arr[0]);
    }
    delete (key, arr) {
	let iKey = arr.indexOf(key);
	// overwrite the key in the array with the last item and delete the last item
	arr[iKey] = arr[arr.length-1];
	arr.splice(arr.length-1, 1);
	//re-heapify the array
	return this.floydHeapify(arr, arr[0]);
    }

    singleSwapAndPush(arr) {
	this.swapAndPush(arr);
	return this.sorted;
    }

    heapSort (arr) {
	while(arr.length > 0) {
	    
	    this.swapAndPush(arr);
	}
	return this.sorted;
    };

    getBaseLog (x, y) {
	return Math.log(y)/ Math.log(x);
    };
    // height value round down (completed rows);
    getHeight () {
	return this.getBaseLog(2, this.data.length);
    }
    //internal swap not to be confused with swapAndPush
    swap (a, b) {
	let cacheA = a;
	a = b;
	b = cacheA;
	return b;
    };
    

    
}
let heap = new Heap();

global.seed = function () {
    console.log(heap.data);
    let lastIndex = heap.data.length-1;
    let lastSubRootIndex = Math.floor((lastIndex-1)/2);
    heap.heapify(heap.data, heap.data[lastSubRootIndex]);
};


heap.data = heap.createArray(10,20);
// heap.floydHeapify(heap.data, heap.data[0]);
global.heap = heap;
repl.start('>');
