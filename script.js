function switchBulb() {
    if (document.getElementById('switchbtn').innerHTML == 'on') {
        document.getElementById("bulbImage").src = 'bulb/bulbon.jpg';
        document.getElementById("switchbtn").innerHTML = 'off';
        document.getElementById("switchbtn").style.backgroundColor = 'purple';
    }
    else {
        document.getElementById("bulbImage").src = 'bulb/bulboff.jpg';
        document.getElementById("switchbtn").innerHTML = 'on';
        document.getElementById("switchbtn").style.backgroundColor = 'blue';
    }
}