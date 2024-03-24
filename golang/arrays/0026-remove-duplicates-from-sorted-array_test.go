package arrays

import (
	"testing"
)

func TestRemoveDuplicates(t *testing.T) {
	testCases := []struct {
		name           string
		input          []int
		expectedOutput []int
	}{
		{
			name:           "Removes duplicates - [1, 1, 2]",
			input:          []int{1, 1, 2},
			expectedOutput: []int{1, 2},
		},
		{
			name:           "Removes duplicates - [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]",
			input:          []int{0, 0, 1, 1, 1, 2, 2, 3, 3, 4},
			expectedOutput: []int{0, 1, 2, 3, 4},
		},
		{
			name:           "No duplicates - [0, 1, 2, 3, 4]",
			input:          []int{0, 1, 2, 3, 4},
			expectedOutput: []int{0, 1, 2, 3, 4},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			k := removeDuplicates(tc.input)

			if k != len(tc.expectedOutput) {
				t.Errorf(
					"Length of array after removing duplicates is incorrect: got %d, want %d",
					k,
					len(tc.expectedOutput),
				)
			}

			for i := 0; i < k; i++ {
				if tc.input[i] != tc.expectedOutput[i] {
					t.Errorf(
						"Element at index %d is incorrect: got %d, want %d",
						i,
						tc.input[i],
						tc.expectedOutput[i],
					)
				}
			}
		})
	}
}
