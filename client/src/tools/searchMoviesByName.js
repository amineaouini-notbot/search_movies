import ApiURL from "./ApiURL";
const searchMoviesByName = (name, cb) =>
    fetch(ApiURL + "&s=" + name)
        .then(res => res.json())
        .then((res) => {
            cb(res);
        });

export default searchMoviesByName;