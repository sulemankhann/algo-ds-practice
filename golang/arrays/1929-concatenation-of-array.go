package arrays

func getConcatenation(nums []int) []int {
	n := len(nums)
	ans := make([]int, n*2)

	for i := 0; i < 2; i++ {
		for j, num := range nums {
			ans[i*n+j] = num
		}
	}

	return ans
}
