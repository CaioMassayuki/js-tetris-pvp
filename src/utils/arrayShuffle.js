export function arrayShuffle(array) {
  for (let i = 0; i < array.length; i++) {
    const selectedIndex = parseInt(Math.random() * (array.length - i)) + i

    const temp = array[i]
    array[i] = array[selectedIndex]
    array[selectedIndex] = temp
  }
}
