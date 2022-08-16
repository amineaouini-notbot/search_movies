import LinkAPI from "./LinkAPI";

const funcs = {
    searchByName: (name: String)=>{
        return fetch(LinkAPI+'&s='+name)

        .then(res=>res.json())
    }
}

export default funcs;