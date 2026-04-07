class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        for (let i = 0; i < arr.length; i++) {
            let maxToTheRight = 0;

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] > maxToTheRight) {
                    maxToTheRight = arr[j];
                }
            }

            arr[i] = maxToTheRight;
            if (i === arr.length - 1) arr[i] = -1;
        }

        return arr;
    }
}
