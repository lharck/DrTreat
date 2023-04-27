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