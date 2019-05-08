const search = 'fast';
const movieList =  document.getElementById('movies');

function addMovie(movie){
	let img = document.createElement('img');
	img.src = movie.Poster;
	movieList.appendChild(img);
}

function getData(url){
	return new Promise(function(resolve,reject){
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.onload = function(){
			if(xhr.status === 200){
				let json = JSON.parse(xhr.response);
				resolve(json.Search);
			}else{
				reject(xhr.statusText);
			}
		}
		xhr.onerror = function(err){
			reject(err);
		}
		xhr.send();
	})
}

getData(`http://www.omdbapi.com?s=${search}&apikey=7703f66a`)
 .then(movies => movies.forEach(movie => addMovie(movie)))
 .catch(err => console.error(err));



// $('#getData').click(function(){
//   $.ajax({
//   	type: 'GET',
//   	url: `http://www.omdbapi.com?s=${search}&apikey=7703f66a`,
//   	success:function(data){
//   		data.Search.forEach(x => addMovie(x));
//   	},
//   	error:function(err){
//   		console.log(err);
//   	}
//   })
// })

//POST
// $('#getData').click(function(){
//   $.ajax({
//   	type: 'POST',
//   	url: `http://www.omdbapi.com?s=${search}&apikey=7703f66a`,
//   	data: objJson,
//   	success:function(data){
//   		data.Search.forEach(x => addMovie(x));
//   	},
//   	error:function(err){
//   		console.log(err);
//   	}
//   })
// })

