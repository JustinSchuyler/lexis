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

function processSelection() {
    const selection = window.getSelection();

    return (selection.anchorOffset !== selection.focusOffset)
        ? {
            word: selection.toString().trim(),
            sentence: parseSentence(selection),
            context: selection.anchorNode.data,
            url: window.location.href
        }
        : undefined;
}
