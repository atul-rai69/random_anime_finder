
const pre = "https://api.jikan.moe/v4/anime/"
//https://api.jikan.moe/v4/anime/25/full
const myfunction = async () => {
    const num= Math.floor(Math.random() * 100);
    const Url= pre+ num + "/full" ;
    console.log("fetching data for a random anime ... ")
    let response = await fetch(Url);
    console.log(response);//json type data
    let data =await response.json();
    console.log(data);
    //console.log(data.data.synopsis);
    let about= data.data.synopsis;
    let imgsrc = data.data.images.jpg.image_url;
    console.log(imgsrc);
    const visual = document.querySelector("#image");
    visual.setAttribute("src",imgsrc);
    const name = data.data.title_english;
    const animename= document.querySelector("#anime_name");
    animename.innerHTML= name;
    const about_anime= document.querySelector("#about");
    about_anime.innerHTML= about;


}