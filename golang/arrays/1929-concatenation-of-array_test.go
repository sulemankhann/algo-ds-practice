package arrays

import (
	"reflect"
	"testing"
)

func TestGetConcatenation(t *testing.T) {
	testCases := []struct {
		name     string
		nums     []int
		expected []int
	}{
		{
			name:     "Handles an array with length 1",
			nums:     []int{1},
			expected: []int{1, 1},
		},
		{
			name:     "Handles an array with length 3",
			nums:     []int{1, 2, 3},
			expected: []int{1, 2, 3, 1, 2, 3},
		},
		{
			name:     "Handles an array with length 4",
			nums:     []int{1, 3, 2, 1},
			expected: []int{1, 3, 2, 1, 1, 3, 2, 1},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			result := getConcatenation(tc.nums)

			if !reflect.DeepEqual(result, tc.expected) {
				t.Errorf(
					"Result for input %v is incorrect: got %v, want %v",
					tc.nums,
					result,
					tc.expected,
				)
			}
		})
	}
}
