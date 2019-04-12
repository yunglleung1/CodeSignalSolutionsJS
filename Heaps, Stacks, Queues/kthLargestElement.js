//given array nums, return the kth largest number
function kthLargestElement(nums, k) {
    nums.sort((a, b) => {
        return a - b;
    })

    let i = nums.length - k;
    return nums[i];
}
