# node-heap-repl
Heap implementation for the Node repl WIP

## Usage

launch node repl with the file

`node heap.js`

When on the repl:


`heap` object contains `data` which is a sample array of non repeating random numbers.

`heap.createArray(${length}, ${max});` to create new non repeating array of length `${length}` and max `${max}`.

`heap.heapify(heap.data, heap.data[0]);` to heapify the array. To automatically heapify on start uncomment this at end of heap.js. `heap.data[0]` is the parent node (first item).

`insert(${key}, heap.data);` to insert a new key into the heap.

`deleteMax(heap.data);` to delete the max, replace with end key,  and reheapify.

`delete(${key}, heap.data)` to delete arbitrary key, replace with end key, and reheapify.

`heapSort(heap.data);` to output sorted array into `heap.sorted`. Method returns `heap.sorted`.

`heap.getHeight();` to get the height of the heap (default heap.data).

Please leave an issue if you see errors or ways to refactor!








