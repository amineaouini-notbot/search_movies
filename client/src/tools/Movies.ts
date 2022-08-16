import LinkAPI from "./LinkAPI";

const funcs = {
    searchByName: (name: String)=>{
        fetch(LinkAPI+'&s=spider man')

        .then(res=>res.json())
        .then(res=>console.log(res))
    }
}

export default funcs;