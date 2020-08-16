const { Identity } = require("./Identity.js");

class IdentityList{
    constructor(list=[]){
        this.list = list.map(el=>new Identity(el));
        return this;
    }
    getByUuid(uuid){ return this.list.filter(el=>el.uuid === uuid); }
    delete(uuid){ this.list = this.list.filter(el=>el.uuid!==uuid); }
    getById(id,scope){ return this.list.filter(el=>el.ids.hasEntry(id,scope)); }
    getByName(name,scope){ return this.list.filter(el=>el.names.hasEntry(name,scope)); }
    toJSON(){ return this.list; }
    getSimilarityScores(o,startIndex=0,endIndex=Number.MAX_SAFE_INTEGER){ return this.list.map((el,i) => (i>=startIndex && i<endIndex) ? el.compare(o) : 0); }
    addNew(o){ this.list.push(o); return o; }
}

module.exports = { IdentityList };