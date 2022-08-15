export class Utils {
    static getData(url, callback) {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                callback(data);
            });
    }
}
