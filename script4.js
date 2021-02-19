function ins() {
  let dialog = document.getElementById("txt").innerHTML;
  let reg = /\'/gm;
  let reple = dialog.replace(reg, '"');
  document.getElementById("txt").innerHTML = reple;
}

function ins2() {
  let dialog = document.getElementById("txt").innerHTML;
  let reg = /\B\'\B/gm;

  let reple = dialog.replace(reg, '"');

  document.getElementById("txt").innerHTML = reple;
}

function testInput() {
  let nam = document.getElementById("nam").value;
  let phon = document.getElementById("phon").value;
  let emal = document.getElementById("mail").value;
  let reg1 = /^[А-Яа-я]+\s?[А-Яа-я]?/gm;
  let reg2 = /^\+?\d+\-?\d+\-?\d+\-?\d+\-?\d+$/gm;
  let reg3 = /^[a-z]+\.?\-?[a-z]+\@(mail\.ru)$/gm;

  if (!reg1.test(nam)) {
    document.getElementById("nam").style.backgroundColor = "red";
  } else {
    document.getElementById("nam").style.backgroundColor = "green";
  }

  if (!reg2.test(phon)) {
    document.getElementById("phon").style.backgroundColor = "red";
  } else {
    document.getElementById("phon").style.backgroundColor = "green";
  }

  if (!reg3.test(emal)) {
    document.getElementById("mail").style.backgroundColor = "red";
  } else {
    document.getElementById("mail").style.backgroundColor = "green";
  }
}
