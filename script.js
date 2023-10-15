const Apilink='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cd5efecf3c603261383a549ca0a3563&page=1';
const img_path='https://image.tmdb.org/t/p/w1280';
const search_api="https://api.themoviedb.org/3/search/movie?&api_key=1cd5efecf3c603261383a549ca0a3563&query=";
const main=document.getElementById("section");
const form=document.getElementById("form");
const search=document.getElementById("query");

returnMovies(Apilink)
function returnMovies(url){
  fetch(url).then(res => res.json())
  .then(function(data){
    console.log(data.results);
    data.results.forEach(element=>{
      const div_card=document.createElement('div');
      div_card.setAttribute('class','card');
      
      const div_row=document.createElement('div');
       div_row.setAttribute('class','row');
      
      const div_column=document.createElement('div');
       div_column.setAttribute('class','column');
      
      const image=document.createElement('img');
       image.setAttribute('class','thumbnail');
       image.setAttribute('id','image');
      
      const title=document.createElement('h3');
       title.setAttribute('id','title');
      
      const center=document.createElement('center');
      title.innerHTML=`${element.title}`;
      image.src=img_path+element.poster_path;
      center.appendChild(image);
      div_card.appendChild(center);
      div_card.appendChild(title);
      div_column.appendChild(div_card);
      div_row.appendChild(div_column);
      main.appendChild(div_row);
      
  });
});
}

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  main.innerHTML='';
    const searchItem=search.value;
  if(searchItem){
    returnMovies(search_api+searchItem);
    search.value="";
  }
});
