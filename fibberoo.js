/**
 * Created by bynun on 9/20/2016.
 */

function fib(){
  let curr = 1;
  let prev = 0;
  let list = [];
  let next = 0;
  let i = 1;
  while (curr <= 100){
    list.push(prev);
    next = curr + prev;
    prev = curr;
    curr = next;
  }
  list.push(prev);
  return list;
}
console.log(fib());