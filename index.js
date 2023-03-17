function main() {
  let count = 0;
  const numberContainer = document.getElementById('number-container');

  const countElement = document.createElement('div');
  countElement.innerText = count;

  numberContainer.appendChild(countElement);

  const calculate = (event) => {
    count += parseInt(event.target.value);
    countElement.innerHTML = count;
  }

  const buttons = document.getElementsByClassName('count-button');

  [...buttons].forEach((button) => {
    button.addEventListener('click', calculate);
  })
}

main();