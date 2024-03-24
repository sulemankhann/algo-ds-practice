package arrays

func removeElement(nums []int, val int) int {
	if len(nums) == 0 {
		return 0
	}

	k := 0

	for r := 0; r < len(nums); r++ {
		if nums[r] != val {
			nums[k] = nums[r]
			k++
		}
	}

	return k
}
