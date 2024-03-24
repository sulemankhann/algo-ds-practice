package stacks

import "testing"

func TestCalPoints(t *testing.T) {
	testCases := []struct {
		name     string
		ops      []string
		expected int
	}{
		{
			name:     "Simple sequence of operations",
			ops:      []string{"5", "2", "C", "D", "+"},
			expected: 30,
		},
		{
			name:     "More complex sequence of operations",
			ops:      []string{"5", "-2", "4", "C", "D", "9", "+", "+"},
			expected: 27,
		},
		{
			name:     "Sequence with only one operation",
			ops:      []string{"1", "C"},
			expected: 0,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			result := calPoints(tc.ops)
			if result != tc.expected {
				t.Errorf("For input %v, got result %d, want %d", tc.ops, result, tc.expected)
			}
		})
	}
}
