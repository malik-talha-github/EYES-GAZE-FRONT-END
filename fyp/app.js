function openNav() {
  document.getElementById("sidebar").style.width = "320px";
  document.getElementById("main").style.marginRight = "320px";
  // document.querySelector('.menu-btn').innerHTML = '✖';
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
  // document.querySelector('.menu-btn').innerHTML = '☰';
}

function toggleEyes() {
  // Toggle eyes functionality
}

function toggleFace() {
  // Toggle face functionality
}

function toggleDropdown(dropdownId) {
  var dropdownContent = document.getElementById(dropdownId);
  dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}

