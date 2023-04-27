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


// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

const box = document.querySelector('#calendar-day-box');

function createDay() {
  const day = document.createElement('div');
  day.className = 'rounded-box day-cal';
  day.style.backgroundColor = 'white';
  day.style.width = '12%';
  day.style.height = '100%';
  const dayText = document.createElement('p');
  dayText.className = 'day-text';
  dayText.textContent = '1';
  dayText.style.marginRight = '10px';
  dayText.style.marginTop = '-5px';
  dayText.style.fontSize = '1vw';
  day.appendChild(dayText);

  day.addEventListener('click', function() {
    // Set all days to white
    const days = document.querySelectorAll('.day-cal');
    days.forEach(function(day) {
      day.style.backgroundColor = 'white';
    });
    
    // Set clicked day to blue
    day.style.backgroundColor = 'lightblue';
  });

  return day;
}

function createRow() {
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
    newDay.querySelector('.day-text').textContent = dayText;
    row.appendChild(newDay);
    dayText++;
  }
}



const days = document.querySelectorAll('.rounded-box.day-cal');

days.forEach(function(day) {
  day.addEventListener('click', function() {
    // Set previously selected day's background color to normal
    const previouslySelected = document.querySelector('.selected');
    if (previouslySelected) {
      previouslySelected.classList.remove('selected');
    }

    // Set clicked day's background color to blue
    day.classList.add('selected');
  });
});

const confirmBtnn = document.querySelector('#confirm-btn');

confirmBtnn.addEventListener('click', function() {
  const confirmed = confirm('Book an appointment?');
  if (confirmed) {
    alert('Your appointment was confirmed.');
  }
});


const refillBtns = document.querySelectorAll('#refillBtn');

refillBtns.forEach(function(refillBtn) {
  refillBtn.addEventListener('click', function() {
    if (refillBtn.textContent === 'Refill In Progress') {
      alert('Your refill request is already in progress.');
    } else {
      const confirmed = confirm('Are you sure you want to request a refill?');
      if (confirmed) {
        refillBtn.textContent = 'Refill In Progress';
        alert('Your refill request has been confirmed.');
      }
    }
  });
});

//ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc


// const showButton = document.getElementById('nmsg');
// const favDialog = document.getElementById('msgD');
// const confirmBtn = favDialog.querySelector('#confirmBtn');


// showButton.addEventListener('click', () => {
//     favDialog.showModal();
// });

// selectEl.addEventListener('change', (e) => {
//   confirmBtn.value = selectEl.value;
// });

// favDialog.addEventListener('close', (e) => {
//   outputBox.value = favDialog.returnValue === 'default' ? "No return value." : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
// });

// confirmBtn.addEventListener('click', (event) => {
//   event.preventDefault(); 
//   favDialog.close(selectEl.value); 
// });

const messageButtons = document.querySelectorAll('#nmsg');

messageButtons.forEach(function(messageButton) {
  const dialog = document.getElementById('msgD');

  messageButton.addEventListener('click', function() {
    dialog.showModal();
  });
});