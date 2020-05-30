// function parseUrl(url) {
//     var a = document.createElement('a')
//     a.href = url
//     return {
//         protocol: a.protocol.replace(':', ''),
//         host: a.hostname,
//         path: a.pathname,
//         query: a.search,
//         hash: a.hash.replace('#', '')
//     }
// }


// var myUrl = parseUrl('http://expame.com:8080/dir/index.html?id=255&m=hello#top')

// console.log(myUrl.protocol, myUrl.host, myUrl.path, myUrl.query, myUrl.hash)
// document is not defined lol

function binarySearch(num, arr) {
    let left = 0, right = arr.length - 1
    while (left <= right) {
        var mid = Math.floor((left + right) / 2)
        if (arr[mid] < num) {
            left = mid + 1
        } else if (arr[mid] > num) {
            right = mid - 1
        } else {
            return mid
        }
    }
    return -1
}

console.log(binarySearch(0,
    [-1, 0, 2, 3])
);

function Foo() {
    getName
        = function () { console.log(1); }
    return
    this;
}
Foo.getName
    = function () { console.log(2); }
Foo.prototype.getName
    = function () { console.log(3); }
var
    getName = function () { console.log(4); }
function
    getName() { console.log(5); }

Foo.getName();
getName();
Foo().getName();
getName();
new
    Foo.getName();
new
    Foo().getName();
new
    new Foo().getName();

