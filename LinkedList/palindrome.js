/*
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 
 */

var isPalindrome = function (head) {
  let current = head;
  let str1 = "";
  let str2 = "";

  while (current != null) {
    str1 = `${str1}${current.val}`;
    str2 = `${current.val}${str2}`;
    current = current.next;
  }

  return str1 === str2;
};
