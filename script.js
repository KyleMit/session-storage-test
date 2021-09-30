let counter = 0;
let debugEl = document.getElementById("dump")

setInterval(function() {
    setRandomSessionStorage()
    displaySessionStorage()
}, 50)

function setRandomSessionStorage() {
    const random = getRandomString(5000)
    window.sessionStorage.setItem(counter.toString(), random)
    counter++
}

function displaySessionStorage() {
    const obj = getSessionStorage()
    const str = JSON.stringify(obj, null, 2)
    debugEl.innerText = str;

}

function getSessionStorage() {
    return Object.keys(sessionStorage).reduce(function(obj, key) {
        obj[key] = sessionStorage.getItem(key).substring(0, 5) + '...';
        return obj
    }, {});
}

function getRandomString(len) {
    return new Array(len).join().replace(/(.|$)/g, function(){return ((Math.random()*36)|0).toString(36);})
}
