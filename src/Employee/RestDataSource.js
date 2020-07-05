import Axios from "axios";
import "babel-polyfill";

export default class RestDataSource {

    constructor(errorCallback) {
        this.BASE_URL = "http://localhost:3500/rest/employee";
        //this.BASE_URL = "http://localhost:9090/rest/employee";
        this.handleError = errorCallback;
    }

    async GetData(callback) {
        this.SendRequest("get", this.BASE_URL, callback);
    }

    async GetOne(id, callback) {
        this.SendRequest("get", `${this.BASE_URL}/${id}`, callback);
    }

    async Store(data, callback) {
        this.SendRequest("post", this.BASE_URL, callback, data)
    }

    async Update(data, callback) {
        this.SendRequest("put", `${this.BASE_URL}/${data.id}`, callback, data);
        //this.SendRequest("post", `${this.BASE_URL}/${data.id}`, callback, data);
    }

    async Delete(data, callback) {
        this.SendRequest("delete", `${this.BASE_URL}/${data.id}`, callback, data);
    }

    async SendRequest(method, url, callback, data) {
        try {
            callback((await Axios.request({
                method: method, 
                url: url,
                data: data
            })).data);
        } catch(err) {
            this.handleError("Operation Failed: Network Error");            
        }
    }
}
