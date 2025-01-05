import { log } from "console";

const array = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];

const remove = (array, value) => {
  for (let i = 0; i < array.length; i++) if (array[i] == value) delete array[i];
};

remove(array, 3);
log(array);
