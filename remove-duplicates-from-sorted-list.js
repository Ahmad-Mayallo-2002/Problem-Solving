class LNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new LNode(1);
head.next = new LNode(1);
head.next.next = new LNode(2);
head.next.next.next = new LNode(2);
head.next.next.next.next = new LNode(3);
head.next.next.next.next.next = new LNode(3);

function deleteDuplicates(head) {
  if (!head) return null;
  let arr = [];
  while (head) {
    if (head?.val === head?.next?.val) {
      head = head.next;
    } else {
      arr.push(head);
      head = head.next;
    }
  }
  for (let i = 0; i <= arr.length - 2; i++) arr[i].next = arr[i + 1];
  return arr[0];
}
console.log(deleteDuplicates(head));
