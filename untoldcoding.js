const text =
  "Happy Birthday Jaan.         You are the best thing happened in my life, and I hope you have an awesome birthday. You deserve it my love and I will make sure your dreams come true. You have the most adorable brown eyes one could fall for, the cutest smile that can take one's breath away. You make me smile when I want to frown and your warm and tight hugs mean everything to me and I need not describe the kisses right hehe. Words might get short to describe my feelings for you. On this very day last year some emotions were left unspoken but ever since that day your eyes changed to a different shade of brown, your voice became deeper, and your laughter quieter. You held my hand without hesitation grabbed me like I'm only yours and hugged me so tightly that I felt safe.            Everything else seemed irrelevant because now I'm yours and you are mine. You make me the happiest and I can't wait to celebrate with you.           I LOVE YOU HONEY...";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
