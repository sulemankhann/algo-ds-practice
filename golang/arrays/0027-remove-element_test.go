package arrays

import (
	"reflect"
	"sort"
	"testing"
)

func TestRemoveElement(t *testing.T) {
	testCases := []struct {
		name           string
		nums           []int
		val            int
		expectedNums   []int
		expectedLength int
	}{
		{
			name:           "Handles empty array",
			nums:           []int{},
			val:            3,
			expectedNums:   []int{},
			expectedLength: 0,
		},
		{
			name:           "Handles array with no occurrences of val",
			nums:           []int{1, 2, 3, 4},
			val:            5,
			expectedNums:   []int{1, 2, 3, 4},
			expectedLength: 4,
		},
		{
			name:           "Handles array with single occurrence of val",
			nums:           []int{3, 2, 2, 3},
			val:            3,
			expectedNums:   []int{2, 2},
			expectedLength: 2,
		},
		{
			name:           "Handles array with multiple occurrences of val",
			nums:           []int{0, 1, 2, 2, 3, 0, 4, 2},
			val:            2,
			expectedNums:   []int{0, 1, 4, 0, 3},
			expectedLength: 5,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			k := removeElement(tc.nums, tc.val)

			// Sort both resulting and expected arrays before comparison
			sort.Ints(tc.nums[:k])
			sort.Ints(tc.expectedNums)

			if k != tc.expectedLength {
				t.Errorf(
					"Length after removing element is incorrect: got %d, want %d",
					k,
					tc.expectedLength,
				)
			}

			if !reflect.DeepEqual(tc.nums[:k], tc.expectedNums) {
				t.Errorf(
					"Resulting array after removal is incorrect: got %v, want %v",
					tc.nums[:k],
					tc.expectedNums,
				)
			}
		})
	}
}
