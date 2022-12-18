function show(anime, character, quote){

    console.log(anime)
    console.log(character)
    console.log(quote)

    const section = document.createElement("div");
    section.setAttribute('class','section');

    const title = document.createElement("h2");
    const hero  = document.createElement("h3");
    const line = document.createElement("h1");

    title.setAttribute('class', 'content');
    hero.setAttribute('class', 'content');
    line.setAttribute('class', 'content');

    line.setAttribute('id','quote');
    hero.setAttribute('id','character');
    title.setAttribute('id', 'show');
    
    title.innerText=anime
    hero.innerText=`~ `+character
    line.innerText=`"`+quote+`".`

    const container = document.getElementById("container");

    section.appendChild(line);
    section.appendChild(title);
    section.appendChild(hero);

    container.appendChild(section);
}

function search(){
    let p = fetch("https://animechan.vercel.app/api/random")
    p.then((response)=>{
        return response.json()
    }).then((value)=>{

        let anime = value.anime;
        let character = value.character;
        let quote = value.quote

        show(anime,character,quote);
    })
}

function dark(){
    let  body = document.getElementById("body");
    let list = body.classList
    list.toggle("dark")

    if(list.length==1){
        document.getElementById("icon").classList.remove("ph-moon-fill");
        document.getElementById("icon").classList.add("ph-sun-fill");
    }

    else{
        document.getElementById("icon").classList.remove("ph-sun-fill");
        document.getElementById("icon").classList.add("ph-moon-fill");
    }
}