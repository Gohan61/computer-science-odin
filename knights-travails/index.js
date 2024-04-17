function knightMoves(start, end) {
  const queue = [[start]];
  const visited = [`${start[0]}${start[1]}`];

  const possibleMoves = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [1, -2],
    [2, -1],
  ];

  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];

    if (current[0] === end[0] && current[1] === end[1]) {
      return path;
    }
    possibleMoves.forEach((move) => {
      const next = [current[0] + move[0], current[1] + move[1]];
      const nextString = `${next[0]}${next[1]}`;

      if (stillOnBoard(next[0], next[1]) && !visited.includes(nextString)) {
        visited.push(nextString);

        queue.push([...path, next]);
      }
    });
  }
}

console.log(knightMoves([0, 0], [3, 3]));

function stillOnBoard(x, y) {
  if (x < 0 || x > 7 || y < 0 || y > 7) {
    return false;
  }
  return true;
}
