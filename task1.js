function demo(input) {
  if (input.length >= 2 && input.length <= 100) {
    let word = input.slice(-2).split("").reverse().join(" ");
    return word;
  } else {
    console.log(`Please enter a valid word.`);
    return;
  }
}
demo("bat");
