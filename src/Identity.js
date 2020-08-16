const { v4: uuidv4 } = require('uuid');

const { ScopedList } = require("./ScopedList.js");

const CONFIG = {
    THRESHOLD_MAX: 1000,
    THRESHOLD_SURE: 5,
    THRESHOLD_MAYBE: 2,
    WEIGHT_PENALTY: 80,
    WEIGHT_FULL_NAME: 16,
    WEIGHT_FIRSTNAME_PLUS_INITIAL: 4,
    WEIGHT_FIRSTNAME_ONLY: 1
};

class Identity{
    /*
    Objects of this class will act as an accesslayer in between a pornstar and its related data
    It is meant to collect
    - different ids (from labels, scopes, aggregators like indexxx,...)
    - different names with scopes (no need for default flag, if I want to have a default flag, I'll add a name with "default" scope)
    - reference to the data holding Object
        by splitting this, I can have different data handling implementations independently

    */
    constructor({uuid,ids,names,dataRef}={}){
        this.uuid = uuid || uuidv4();
        this.ids = new ScopedList(ids || null);
        this.names = new ScopedList(names || null);
        this.dataRef = dataRef || {}; //TODO
        return this;
    }
    //getData(key,scope){ return this.dataRef.get(key,scope); } //TODO
    getIds(scope){ return this.ids.getEntries(scope); }
    getNames(scope){ return this.names.getEntries(scope); }
    toJSON(){ return {uuid:this.uuid,ids:this.ids,names:this.names,dataRef:this.dataRef}; }
    toString(){ return this.ids.getEntries().sort().join(",")+": "+this.names.getEntries().sort().join(","); }
    getMostProminentName(){
        let name = null;
        let max = 0;
        for(var entry in this.names.list ){
            let score = Math.pow(this.names.list[entry].length, (entry.split(" ").length + 1)) + entry.length;
            if( score > max ){
                max = score;
                name = entry;
            }
        }
        return name;
    }
    merge(o){
        Object.keys(o.ids.list).forEach( newId=>this.ids.add(newId,o.ids.list[newId]) );
        Object.keys(o.names.list).forEach( newId=>this.names.add(newId,o.names.list[newId]) );
        //this.dataRef.add(o.dataRef); //TODO
        return this;
    }
    compare(o){
        let val = 0;
        if( this.uuid === o.uuid ){ return CONFIG.THRESHOLD_MAX; }
        this.ids.getScopes().forEach( scope=>{
            let thisEntries = this.ids.getEntries(scope);
            let oEntries = o.ids.getEntries(scope);

            let common = arrayIntersection( thisEntries, oEntries );
            if( common.length > 0 ){
                return CONFIG.THRESHOLD_MAX; //same id, same scope => 100% sure they are the same 
            }
            if( thisEntries.length > 0 && oEntries.length > 0 ){
                let diff = arrayXOR( thisEntries, oEntries );
                if( diff.length > 0 ){
                    val = val - CONFIG.WEIGHT_PENALTY; //same scope but different ids! => there has to be overwhelming evidence they are the same
                }
            }
        });
        let commonNames = this.names.compare(o.names);
        for(let entry in commonNames){
            let factor = !!entry.match(/\w+\s\w\w+/) ? CONFIG.WEIGHT_FULL_NAME : (entry.indexOf(" ")>-1 ? CONFIG.WEIGHT_FIRSTNAME_PLUS_INITIAL : CONFIG.WEIGHT_FIRSTNAME_ONLY);
            val = val + (commonNames[entry].length + 1 ) * factor;
        }
        //return val / (Object.keys(this.names.list).length - Object.keys(commonNames).length + 1);
        return val * (2 * Object.keys(commonNames).length + 1)  / (Object.keys(o.names.list).length + Object.keys(this.names).length + 1);
    }
    
    static parse = function(s){
        return new this.constructor(JSON.parse(s));
    }
}

function arrayIntersection(a1,a2){
    return a1.filter(el=>a2.includes(el));
}
function arrayXOR(a1,a2){ //the opposite of intersection, either in a1 or a2, but not in both
    return a1.filter(el=>!a2.includes(el)).concat(
        a2.filter(el=>!a1.includes(el))
    );
}
module.exports = { Identity };