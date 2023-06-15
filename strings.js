//ДЗ: Строки

                                                                                     //String: greeting

{const name = prompt("jak masz na imie?");

alert("cześć " + name)}

                                                                                     // String: gopni4ek

{let string = prompt("Введіть рядок:");
let words = string.split(',');
let fixedString = words.join(', блін');

alert(fixedString);}


                                                                                     // String: capitalize

{let string = prompt("Введіть рядок:");
let fixedString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

alert(fixedString);}

                                                                                     // String: word count

{let string = prompt("Введіть рядок:");
let words = string.split(" ");
let wordLength = words.length;

alert("колво слів: " + wordLength);}

                                                                                     // String: credentials

{const lastName = prompt("Фамилия").trim();
const firstName = prompt("Имя").trim();
const fatherName = prompt("Отчество").trim();

const firstNameFixed = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
const lastNameFixed = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
const fatherNameFixed = fatherName.charAt(0).toUpperCase() + fatherName.slice(1).toLowerCase();

const fullName = lastNameFixed + " " + firstNameFixed + " " + fatherNameFixed;
console.log(fullName)}

                                                                                     // String: beer

{let str = "Было жарко. Василий пил пиво вприкуску с креветками";
let words = str.split(" ");
words[4] = "чай";
let result = words.join(" ");
console.log(result); //"Было жарко. Василий пил чай вприкуску с креветками"
}

                                                                                     // String: no tag

{let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
let tegStart = str.indexOf("<");
let tegEnd = str.indexOf(">");
let result = str.slice(0, tegStart) + str.slice(tegEnd + 2);

console.log(result);}

                                                                                     // String: big tag

{let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
let tegStart = str.indexOf("<");
let tegEnd = str.indexOf(">");
let result = str.slice(0, tegStart) + str.slice(tegStart, tegEnd + 1).toUpperCase() + str.slice(tegEnd + 1);

console.log(result);}

                                                                                     // String: new line

{let horizontalText = prompt(`в этом тексте все \\n \n будут переносить строку на следующую`);
let horizontalTextSplit = horizontalText.split("\\n");
alert(horizontalTextSplit.join(`\n`));} 

                                                                                     // String: youtube

let userInput = prompt("Введите текст с ссылкой на YouTube:");
let regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/;
let match = userInput.match(regex);
if (match && match[1]) {
  let videoId = match[1];
  
  let htmlVideo = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
  
  document.body.innerHTML += htmlVideo;
} else {
  alert("Введенный текст не содержит ссылку на YouTube видео.");
}