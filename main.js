let string = prompt("String typedagi malumot kiriting");
let number = Number(prompt("Number typedagi malumot kiriting"));
let boolean = Boolean(prompt("Boolean typedagi malumot kiriting"));

let check = "Hamma malumotlarni to'g'ri kiritganizga ishonchingiz komilmi?";

alert(check);
alert("Siz kiritgan" + " " + string + " " + "so'zi" + " " + typeof(string) + " " + "typega tegishli" + "\n"
 + "Siz kiritgan" + " " + number + " " + "so'zi" + " " + typeof(number) + " " + "typega tegishli" + "\n"
 + "Siz kiritgan" + " " + boolean + " " + "so'zi" + " " + typeof(boolean) + " " + "typega tegishli");