package stacks

import "strconv"

func calPoints(operations []string) int {
	sum := 0
	stack := []int{}

	for _, o := range operations {
		n := len(stack)

		if o == "+" {
			v := stack[n-1] + stack[n-2]
			sum += v
			stack = append(stack, v)
			continue
		}

		if o == "C" {
			sum -= stack[n-1]
			stack = stack[:n-1]
			continue
		}

		if o == "D" {
			v := stack[n-1] * 2
			sum += v
			stack = append(stack, v)
			continue
		}

		num, _ := strconv.Atoi(o)
		sum += num
		stack = append(stack, num)

	}

	return sum
}
