
function pathGenerator(url) {
    return function (imageName) {
        return url + imageName
    }
}

let urlToIcons = pathGenerator('https://domain.ru/assets/icons/');
let urlToImages = pathGenerator('https://domain.ru/assets/images/');


console.log(urlToIcons('svg.com'))
console.log(urlToImages('home.com'))

