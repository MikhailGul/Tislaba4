function processQueueOperations(operations) {
  let queue = [];
  let worriedCount = 0;

  for (let i = 0; i < operations.length; i++) {
    let operation = operations[i].split(" ");
    let command = operation[0];

    if (command === "WORRY") {
      let index = parseInt(operation[1]);
      queue[index] = "worried";
      worriedCount++;
    } else if (command === "QUIET") {
      let index = parseInt(operation[1]);
      queue[index] = undefined;
      worriedCount--;
    } else if (command === "COME") {
      let count = parseInt(operation[1]);
      if (count > 0) {
        for (let j = 0; j < count; j++) {
          queue.push(undefined);
        }
      } else {
        queue.splice(count);
        worriedCount -= queue.slice(count).filter((element) => element === "worried").length;
      }
    } else if (command === "WORRY_COUNT") {
      console.log(worriedCount);
    }
  }
}

let operations = [
  "COME 5",
  "WORRY 1",
  "WORRY 4",
  "COME -2",
  "WORRY_COUNT",
  "COME 3",
  "WORRY 3",
  "WORRY_COUNT"
];

processQueueOperations(operations);