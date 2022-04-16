export const convertURLToObject = (queryString) => {
    try{
        // var search = location.search.substring(1);
        return Object.fromEntries(new URLSearchParams(queryString));
        // var search = queryString;
        // // console.log(search);
        // return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    } catch(err){
        return {}
    }
}

export const convertObjToQueryString = (params) => {
    // var str = [];
    // for (var p in obj){
    //     if(obj[p]) continue;
    //     if (obj.hasOwnProperty(p)) {
    //         str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    //     }
    // }
    // return "?" + str.join("&");
    var queryString = Object.keys(params).map(function(key) {
        if(params[key]){
            return key + '=' + params[key]
        }
        return undefined
    }).filter(e => e).join('&');
    return '?' + queryString
  }


export const changeQueryUrl = (data) => {
    return '?' + new URLSearchParams(data).toString()
}