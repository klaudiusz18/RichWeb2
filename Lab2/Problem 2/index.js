fetch('http://jsonplaceholder.typicode.com/posts?')
.then(Response => Response.json())
.then(json => json.filter(y => y.title.split("").length > 6))
.then(result => result.map(y => y.title))
.then((data) => console.log(data));

function wordfreq(string) {
    var words = string.replace(/[.]/g, '').split(/\s/);
    var map = {};
    words.forEach(function(word) {
        if(!map[word]) {
            map[word] = 0;
        }
        map[word] +1;

    });

    return map;
}