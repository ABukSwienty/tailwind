const evenMap = <T extends any[], ReturnValue>(
  array: T,
  cb: (item: T[0], index: number, isEven: boolean) => ReturnValue
) => {
  let map: ReturnValue[] = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const index = i;
    const isEven = i % 2 == 0;
    map.push(cb(item, index, isEven));
  }
  return map;
};

export default evenMap;
