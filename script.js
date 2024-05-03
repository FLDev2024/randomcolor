// const colors = ["rgb(246, 246, 250)", "rgb(143, 170, 199)", "rgb(189, 196, 102)", "rgb(244, 208, 116)"];
// const colorBox = document.getElementById("colorBox");
// let intervalId;

// function changeColor() {
//   const randomIndex = Math.floor(Math.random() * colors.length);
//   colorBox.style.backgroundColor = colors[randomIndex];
// }

// function startColorChanger() {
//   intervalId = setInterval(changeColor,2000);
// }

// function stopColorChanger() {
//   clearInterval(intervalId);
// }


// const colors = ["rgb(246, 246, 250)", "rgb(143, 170, 199)", "rgb(189, 196, 102)", "rgb(244, 208, 116)"];
// const colorBox = document.getElementById("colorBox");
// let currentIndex = -1; // Initialize to -1 so that first color index is 0
// let intervalId;

// function changeColor() {
//   let nextIndex;
//   do {
//     nextIndex = Math.floor(Math.random() * colors.length);
//   } while (nextIndex === currentIndex); // Ensure next color is different from current
//   colorBox.style.backgroundColor = colors[nextIndex];
//   currentIndex = nextIndex;
// }

// function startColorChanger() {
//   changeColor(); // Show the first color immediately
//   intervalId = setInterval(changeColor, 2000); // Set interval for subsequent color changes
// }

// function stopColorChanger() {
//   clearInterval(intervalId);
// }

// // Start button click event listener
// document.getElementById("startButton").addEventListener("click", startColorChanger);

// // Stop button click event listener
// document.getElementById("stopButton").addEventListener("click", stopColorChanger);

// // Initial start of the color changer
// startColorChanger();



const colors = [
    { name: "Light Gray", code: "rgb(246, 246, 250)", count: 0 },
    { name: "Blue", code: "rgb(143, 170, 199)", count: 0 },
    { name: "Green", code: "rgb(189, 196, 102)", count: 0 },
    { name: "Yellow", code: "rgb(244, 208, 116)", count: 0 }
  ];
  const colorBox = document.getElementById("colorBox");
  const counters = document.getElementById("counters");
  
  function changeColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[randomIndex];
    colorBox.style.backgroundColor = selectedColor.code;
    selectedColor.count++;
    updateCounters();
  }
  
  function updateCounters() {
    counters.innerHTML = "";
    colors.forEach(color => {
      const item = document.createElement("li");
      item.textContent = `${color.name}: ${color.count}`;
      counters.appendChild(item);
    });
  }
  
  function startColorChanger() {
    intervalId = setInterval(changeColor, 2000);
  }
  
  function stopColorChanger() {
    clearInterval(intervalId);
  }
  
  // Start button click event listener
  document.getElementById("startButton").addEventListener("click", startColorChanger);
  
  // Stop button click event listener
  document.getElementById("stopButton").addEventListener("click", stopColorChanger);
  
  // Initial start of the color changer
  startColorChanger();
  


