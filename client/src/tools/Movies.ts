import LinkAPI from "./LinkAPI";

const funcs = {
    searchByName: (name: String, cb: any)=>{
        fetch(LinkAPI+'&s='+name)

            .then(res=>res.json())
            .then(res=>cb(res))
            
    }
}

export default funcs;