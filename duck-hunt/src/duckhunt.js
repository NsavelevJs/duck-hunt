window.onload = function () {
  const body = document.body;

  console.log(body);

  function createDuck() {
    let div = document.createElement("div");
    div.className += "duck";
    body.appendChild(div);
    moveDuck();
    setInterval(() => {
      div.classList.toggle("flap");
    }, 250);

    function moveDuck() {
      const innerWidth = Math.random() * window.innerWidth;
      const innerHeight = Math.random() * window.innerHeight;
      div.style.top = innerHeight + "px";
      div.style.left = innerWidth + "px";
    }
    moveDuck();
    setInterval(moveDuck, 1000);
  }
  createDuck();

  for (let i = 1; i < 5; i++) {
    createDuck();
  }


};
