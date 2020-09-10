export interface Teachers {
    name: string;
    species: string;
    gender: string;
    house: string;
    dateOfBirth: Date;
    yearOfBirth: string;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand : Wand[];
    patronus: string;
    hogwartsStudent: string;
    hogwartsStaff: string;
    actor: string;
    alive: string;
    image:string;
}

export interface Wand {
    wood: string;
    core: string;
    length: string;
}

// {
//     "name":"Minerva McGonagall",
//     "species":"human",
//     "gender":"female",
//     "house":"Gryffindor",
//     "dateOfBirth":"04-10-1925",
//     "yearOfBirth":1925,
//     "ancestry":"",
//     "eyeColour":"",
//     "hairColour":"black",
//     "wand":{"wood":"","core":"","length":""},
//     "patronus":"tabby cat",
//     "hogwartsStudent":false,
//     "hogwartsStaff":true,
//     "actor":"Dame Maggie Smith",
//     "alive":true,
//     "image":"http://hp-api.herokuapp.com/images/mcgonagall.jpg"}