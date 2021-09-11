var form = document.getElementById("frm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

var inp = document.getElementById("box");
inp.addEventListener("keydown", function (e) {
    if (e.code === "Enter") { 
        validate();
    }
});

var btn = document.getElementById("sub");
btn.addEventListener("click", validate());

function online() {
    document.getElementById(`ios0`).innerHTML = `Connected`
}
function offline() {
    document.getElementById(`ios0`).innerHTML = `No Internet`
}
window.addEventListener('online', online)
window.addEventListener('offline', offline)

if (navigator.onLine == true) {
    online()
} else {
    offline()
}




function validate() {
    var ip = inp.value;
    inp.value = ""
    if (ip.length) {
    fetch(`https://mcapi.us/server/status?ip=${ip}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("ip0").innerHTML = ip;
        if (navigator.onLine == true) {
        if (data.online == true) {
            document.getElementById(`st0`).innerHTML = "Online"
            document.getElementById(`mot0`).innerHTML = `${data.motd}`
            document.getElementById(`pl0`).innerHTML = `${data.players.now}/${data.players.max}`
            document.getElementById(`favicon`).src = `${data.favicon}`
            document.getElementById(`sft0`).innerHTML = `${data.server.name}`

        } else if (data.online == false) {
            document.getElementById(`st0`).innerHTML = "Offline"
            document.getElementById(`sft0`).innerHTML = ""
            document.getElementById(`pl0`).innerHTML = ""
            document.getElementById(`mot0`).innerHTML = ""
            document.getElementById(`favicon`).src = `https://cdn.discordapp.com/emojis/785926583936221217.png`

        }} else {
            document.getElementById(`st0`).innerHTML = "No Internet"
            document.getElementById(`sft0`).innerHTML = ""
            document.getElementById(`pl0`).innerHTML = ""
            document.getElementById(`mot0`).innerHTML = ""
            document.getElementById(`favicon`).src = ""
        }
    })









    }
}

