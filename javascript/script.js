document.querySelector("#Home").removeAttribute("hidden");

const navAnchors = document.querySelectorAll('button.menuButton');

navAnchors.forEach((anchor) => {

  anchor.addEventListener("click", (event) => {

    document.querySelectorAll(".screen").forEach((screen) => {
      screen.setAttribute("hidden", true)
    });


    // read screen attribute
    let target = anchor.getAttribute("data-screen");
    console.log(target);
    // find target screen
    let targetScreen = document.querySelector("#" + target);

    // show it
    targetScreen.removeAttribute("hidden");
  })
});




const box = document.querySelector('#calendar-day-box');

function createDay(){
  const day = document.createElement('div');
  day.className = 'rounded-box';
  day.style.backgroundColor = 'white';
  day.style.width = '12%';
  day.style.height = '100%';
  const dayText = document.createElement('p');
  dayText.id = 'dayText';
  dayText.style.marginRight = '10px';
  dayText.style.marginTop = '-5px';
  dayText.style.fontSize = 1 + 'vw';
  day.appendChild(dayText);

  return day;
}
function createRow(){
  const row = document.createElement('div');
  row.className = 'row';
  row.style.display = 'flex';
  row.style.flexDirection = 'row';
  row.style.justifyContent = 'space-evenly';
  
  return row; 
}

for (let j = 0; j < 5; j++) {  
  const row = createRow();

  box.appendChild(row);
  let dayText = j * 7 + 1;

  for (let i = 0; i < 7; i++) {
    const newDay = createDay();
    newDay.querySelector('#dayText').textContent = dayText;
    row.appendChild(newDay);
    dayText++;
  }
}

const showButton = document.getElementById('nmsg');
const favDialog = document.getElementById('msgD');
const confirmBtn = favDialog.querySelector('#confirmBtn');

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener('click', () => {
    favDialog.showModal();
});

// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener('change', (e) => {
  confirmBtn.value = selectEl.value;
});

// "Confirm" button triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener('close', (e) => {
  outputBox.value = favDialog.returnValue === 'default' ? "No return value." : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
});
confirmBtn.addEventListener('click', (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(selectEl.value); // Have to send the select box value here.
});