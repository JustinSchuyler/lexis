function parseSentence(selection) {
  let beginning = selection.anchorOffset - 1;
  while (beginning > 0) {
    if (/[\.!?]/.test(selection.anchorNode.data[beginning])) {
      break;
    }
    beginning -= 1;
  }

  let ending = selection.focusOffset;
  while (ending < selection.anchorNode.length) {
    if (/[\.!?]/.test(selection.anchorNode.data[ending])) {
      break;
    }
    ending += 1;
  }

  let sentence = selection.anchorNode.data.substring(beginning, ending + 1);
  sentence = sentence.replace(/^[\.!?][\s]*/, "");

  return sentence;
}

document.body.addEventListener('mouseup', () => {
  let selection = window.getSelection();

  if (selection.anchorOffset !== selection.focusOffset) {
    let word = selection.toString().trim(),
        context = selection.anchorNode.data,
        url = window.location.href;

    let sentence = parseSentence(selection);

    console.log(selection);
    console.log(word);
    console.log(context);
    console.log(sentence);
    console.log(url);
  }
});
