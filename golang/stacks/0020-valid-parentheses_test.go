package stacks

import "testing"

func TestIsValid(t *testing.T) {
	testCases := []struct {
		name     string
		s        string
		expected bool
	}{
		{
			name:     "Valid parentheses for a simple case",
			s:        "()",
			expected: true,
		},
		{
			name:     "Valid parentheses for a more complex case",
			s:        "()[]{}",
			expected: true,
		},
		{
			name:     "Invalid parentheses for a case with mismatched brackets",
			s:        "(]",
			expected: false,
		},
		{
			name:     "Valid parentheses for a case with nested brackets",
			s:        "{[]}",
			expected: true,
		},

		{
			name:     "Invalid parentheses for a single closing bracket",
			s:        "]",
			expected: false,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			result := isValid(tc.s)
			if result != tc.expected {
				t.Errorf("For input %s, got result %t, want %t", tc.s, result, tc.expected)
			}
		})
	}
}
