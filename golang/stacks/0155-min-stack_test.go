package stacks

import (
	"testing"
)

func TestMinStack(t *testing.T) {
	t.Run("Handles basic push and pop operations", func(t *testing.T) {
		minStack := Constructor()
		minStack.Push(-2)
		minStack.Push(0)
		minStack.Push(-3)

		minResult := minStack.GetMin()
		if minResult != -3 {
			t.Errorf("Expected minimum element: -3, got: %d", minResult)
		}

		minStack.Pop()
		topResult := minStack.Top()
		if topResult != 0 {
			t.Errorf("Expected top element: 0, got: %d", topResult)
		}

		minResult = minStack.GetMin()
		if minResult != -2 {
			t.Errorf("Expected minimum element: -2, got: %d", minResult)
		}
	})

	t.Run("Handles multiple pushes and pops with getMin", func(t *testing.T) {
		minStack := Constructor()
		minStack.Push(2)
		minStack.Push(0)
		minStack.Push(3)
		minStack.Push(0)

		minResult := minStack.GetMin()
		if minResult != 0 {
			t.Errorf("Expected minimum element: 0, got: %d", minResult)
		}

		minStack.Pop()
		minResult = minStack.GetMin()
		if minResult != 0 {
			t.Errorf("Expected minimum element: 0, got: %d", minResult)
		}

		minStack.Pop()
		minResult = minStack.GetMin()
		if minResult != 0 {
			t.Errorf("Expected minimum element: 0, got: %d", minResult)
		}

		minStack.Pop()
		minResult = minStack.GetMin()
		if minResult != 2 {
			t.Errorf("Expected minimum element: 2, got: %d", minResult)
		}
	})

	t.Run("Handles edge case with a single element", func(t *testing.T) {
		minStack := Constructor()
		minStack.Push(1)

		topResult := minStack.Top()

		if topResult != 1 {
			t.Errorf("Expected top element: 1, got: %d", topResult)
		}

		minResult := minStack.GetMin()
		if minResult != 1 {
			t.Errorf("Expected minimum element: 1, got: %d", minResult)
		}
	})
}
