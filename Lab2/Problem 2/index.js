fetch('http://jsonplaceholder.typicode.com/posts?')
.then(Response => Response.json())
.then(json => json.filter(y => y.title.split("").length > 6))
.then(result => result.map(y => y.title))
.then((data) => console.log(data));