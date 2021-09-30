let counter = 0;
let dumpEl = document.getElementById("dump")
let sizeEl = document.getElementById("size")
let lengthEl = document.getElementById("length")
let intervalEl = document.getElementById("interval")

main()

function main() {
    setTimeout(function() {
        setRandomSessionStorage()
        displaySessionStorage()
        displaySize()

        // rerun
        if (Number(intervalEl.value) > 0) main()
    }, intervalEl.value)
}

function setRandomSessionStorage() {
    const random = getRandomString(lengthEl.value)
    window.sessionStorage.setItem(counter.toString(), random)
    counter++
}

function getRandomString(len) {
    return new Array(len).join().replace(/(.|$)/g, function(){return ((Math.random()*36)|0).toString(36);})
}

function displaySessionStorage() {
    const obj = getSessionStorage()
    const str = JSON.stringify(obj, null, 2)
    dumpEl.innerText = str;

}

function getSessionStorage() {
    return Object.keys(sessionStorage).reduce(function(obj, key) {
        obj[key] = sessionStorage.getItem(key).substring(0, 5) + '...';
        return obj
    }, {});
}


function displaySize() {
    const keys = Object.keys(sessionStorage)
    const item = sessionStorage.getItem(keys[0])
    const bytes = keys.length * item.length * 2

    if (bytes / 1024 < 1) {
        sizeEl.innerText = bytes.toFixed(2) + " bytes"
    } else if (bytes / 1024 / 1024 < 1) {
        sizeEl.innerText = (bytes / 1024).toFixed(2) + " kb"
    } else {
        sizeEl.innerText = (bytes / 1024 / 1024).toFixed(2) + " mb"
    }
}
