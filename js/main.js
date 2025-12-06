function updateTime() {
  let d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
  
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let dateShow = d.toLocaleDateString("en-US", options);
  document.getElementById("bemo").innerText = dateShow;
}
updateTime();
setInterval(updateTime, 1000);