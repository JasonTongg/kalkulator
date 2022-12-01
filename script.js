let input = document.getElementById('inputLabel');

let pushButton = (obj) => {
  let pushed = obj.innerHTML;

  if (pushed === '=') {
    input.innerHTML = eval(input.innerHTML);
  } else if (pushed === 'c') {
    input.innerHTML = '0';
  } else {
    if (input.innerHTML === '0') {
      input.innerHTML = pushed;
    } else {
      input.innerHTML += pushed;
    }
  }
};
