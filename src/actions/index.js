export function movieslist (){
    return {
        type:"MOVIES_LIST",
        payload:[
            {id:1,name:"Avengers"},
            {id:2,name:"Aqua man"},
            {id:1,name:"Container"}
        ]
    }
}

export function directorslist (){
    return {
        type:"DIRECTORS_LIST",
        payload:[
            {id:1,name:"josip"},
            {id:2,name:"Matip"},
        ]
    }
}