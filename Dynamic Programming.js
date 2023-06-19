// Definition

method for solving complex problems by breaking them down into simpler subproblems. It is mainly an optimization over plain recursion, as in recursion many subproblems solutions are calculated multiple times. In dynamic programming, subproblem solutions are not calculated multiple times but are remembered and reused, thereby saving computation time at the expense of a little more space. This technique of saving values that have already been calculated is called Memoization.

Here are some of the characteristics that a problem must have in order for dynamic programming to be a viable solution:

Overlapping Subproblems: This means that the same subproblems are used to solve multiple higher-level problems. In other words, the problem can be divided into subproblems which are reused several times or a recursive algorithm for the problem solves the same subproblem over and over rather than always generating new subproblems.

Optimal Substructure: A problem has optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems. This property is used to determine the usefulness of dynamic programming and greedy algorithms for a problem.

// Example

* naive recursion fibonacci sequence

function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n-1) + fib(n-2);
  }
}

* with dynamic programming

function fib(n) {
  if (n <= 1) {
    return n;
  }
  const fibNumbers = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibNumbers[i] = fibNumbers[i-1] + fibNumbers[i-2];
  }
  return fibNumbers[n];
}

// Process

1. Identify if it's a problem that can be solved using DP (look for overlapping subproblems and optimal substructure).

2. Define the structure of the solution (this often involves figuring out how to break the problem down into subproblems).

3. Write a recursive function to solve the problem.

4. Add memoization to the recursive function (this often involves adding an array or hash table to store solutions to subproblems).

5. Optionally, convert the recursive function into an iterative one (this is often more efficient and easier to understand).




