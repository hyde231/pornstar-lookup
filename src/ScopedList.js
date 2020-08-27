class ScopedList{
    //stores data as object with entry (original data), scope (e.g.like website, label, ...), 
    //very useful for objects that have different names in different scopes (example: Pornstar Names for different labels)
    constructor(o){
        this.list = {}; //objects entry: [scopes]        
        if( !!o ){ this.list = Object.assign({},o); } 
        return this;
    }
    add(entry,scope){
        if( !entry ){ throw new Error("ScopedList.add() requires at least one argument"); }
        //if( this.hasEntry(entry,scope) ){ return this; } //ignore if entry with scope already present
        if( !this.list[entry] ){ this.list[entry]=[]; }
        if( !!scope ){
            [].concat(scope).forEach(el=>{
                if(!this.list[entry].includes(el) ){ this.list[entry].push(String(el)); }
            });
        }
        return this;
    }
    toJSON(){ return this.list; }
    hasEntry(entry,scope){ return !!this.list[entry] && (!!scope?this.list[entry].includes(scope):true) ; }
    find(str,scope){ return this.getEntries(scope).some( entry=>entry.indexOf(str)!==-1 ) }
    getEntries(scope){ return Object.keys(this.list).filter(entry => !!scope?this.list[entry].includes(scope):true ); }
    getScopes(entry){ return !!entry?this.list[entry]:Object.keys(this.list).reduce((a,entry)=>{return a.concat(this.list[entry])},[]); }
    compare(o){ //get intersection of two scoped lists (same entry with same scope)
        let rO = {};
        for(var entry in this.list){
            if(o.list[entry]){
                rO[entry] = arrayIntersection( this.list[entry], o.list[entry] );
            }
        }
        return rO;
    }

    static parse = function(str){
        return new ScopedList(JSON.parse(str));
    }
}

function arrayIntersection(a1,a2){
    return a1.filter(el=>a2.includes(el));
}

module.exports = { ScopedList };