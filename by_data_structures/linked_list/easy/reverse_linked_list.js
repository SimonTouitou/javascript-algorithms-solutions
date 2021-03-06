var reverseList = function (head) {
  if (head === null) {
    return null;
  }

  let previous = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};
