let lista = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];
console.log(lista);

 //a) Crie uma função que retorne a bio do id passado
function getBioById(Id: number): string{

    let i:number = 0;
    for(i;i<lista.length;i++){
        if(lista[i].id == Id ){
            return lista[i].bio;
        }
    }
    return "Id invalido";
}

 //b) Crie uma função que retorne o name do id passado
function getNameById(Id: number): string{
    let i:number = 0;
    for(i;i<4;i++){
        if(lista[i].id == Id ){
            return lista[i].name;
        }
    }
    return "Id invalido";
}



 //c) Crie uma função que apague um item da lista a partir de um id passado
 function deleteElementById(Id: number): any{
    let i:number = 0;
    for(i;i<lista.length;i++){
        if(lista[i].id == Id ){
            const index = lista.indexOf(lista[i]);
            lista.splice(index, 1);
            return;
        }
    }
}



 //d) Crie uma função que altere a bio ou o name a partir de um id passado

 
function changeNameById(Id: number, newName: string):any{
    let i:number = 0;
    for(i;i<lista.length;i++){
        if(lista[i].id == Id ){
            lista[i].name="Novo nome";
            return;
        }
    }
}

function changeBioById(Id: number, newName: string):any{
    let i:number = 0;
    for(i;i<lista.length;i++){
        if(lista[i].id == Id ){
            lista[i].bio="Nova bio";
            return;
        }
    }
}


 function changeElementById(Id: number, change: string, newString: string): any{
    let i:number = 0;

    for(i=0; i<lista.length; i++){
        if(lista[i].id == Id ){
            if(change=="bio") changeBioById(Id, newString);
            if(change=="name") changeNameById(Id, newString);
            return;
        }
    }
}

 //e) Demonstre todas as funções com o paradigma funcional e com o imperativo

const getBioByIdF = (Id: number): string => {
    return lista.find((value) => value.id == Id)?.bio as string;
}

const getNameByIdF = (Id: number): string => {
    return lista.find((value) => value.id == Id)?.name as string;
}

const deleteElementByIdF=  (Id: number): any =>{
    return lista.forEach((value) =>{
        if(value.id == Id){
            lista.splice(lista.indexOf(value), 1);
        }
    });
}

const changeNameByIdF = (Id: number, newName: string): any =>{
    return lista.forEach((value) =>{
        if(value.id == Id){
            value.name=newName;
        }
    });
}

const changeBioByIdF = (Id: number, newBio: string): any =>{
    return lista.forEach((value) =>{
        if(value.id == Id){
            value.bio=newBio;
        }
    });
}

const changeElementByIdF = (Id: number, change: string, newString: string): any =>{
    return change=="bio"?changeBioByIdF(Id, newString): changeNameByIdF(Id, newString);
}


let bio: string = getBioById(1);
console.log(bio);

let nm: string = getNameById(1);
console.log(nm);

deleteElementById(1);
console.log(lista);

changeElementById(4, "name", "Novo nome");
changeElementById(4, "bio", "Nova Bio");
console.log(lista[2]);

console.log(getBioByIdF(2));
console.log(getNameByIdF(2));

deleteElementByIdF(2);
console.log(lista);

changeElementByIdF(3, "name", "Este Nome foi alterado");
changeElementByIdF(3, "bio", "Esta bio foi alterada");
console.log(lista[0]);
console.log(lista[1]);