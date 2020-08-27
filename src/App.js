import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import { GitHub } from '@material-ui/icons'
import Grid from '@material-ui/core/Grid';

import Pornstar from './components/Pornstar.js';
const { IdentityList } = require("./IdentityList.js");
console.log("importing data");
const Data = require("./data/Pornstars.combined.json"); 
console.log("setting up database")
let Pornstars = new IdentityList(Data);

let allScopes = new Set();
Pornstars.list.forEach( ps => {
  ps.names.getScopes().forEach( s => allScopes.add(s) );
});
console.log("build list of names");

let allNames = new Set(); //For autocomplete
Pornstars.list.forEach( pornstar => {
  pornstar.getNames().forEach( name => allNames.add(name) );
});
console.log("ready");

//Installation
//TODO Provide dockerfile + build instructions
//TODO provide docker-compose

//Functionality
//TODO use a database and have the json as an export result? Or add saving/loading functionality
//TODO allow to select cards in order to merge them
//TODO extract all data from one source into its own entry (to correct an error)
//TODO undo / redo 

//UI
//TODO Lookup into own Component
//TODO Statistics on search results (results found, out of x entries, in Y ms)
//TODO Highlight search terms
//TODO Search for substrings
//TODO search for combination of names
//TODO use routes and a view for /performer/{uuid} and /performer/?q=bla

const LookupForm = ({lookup}) => {
  let input;
  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        lookup(input.value);
        input.value = '';
      }}>
        Search for name
      </button>
    </div>
  )
};

class Lookup extends React.Component{
  constructor(props){
    super(props);
    this.state = {data:[]};
  }
  lookup(s){
    //TODO show spinning wheels
    this.setState( {data: Pornstars.getByName(s) } );
    //TODO hide spinning wheels
    //TODO show result statistics
  }
  render(){
    return (
      <div>
        <div>
          <LookupForm lookup={this.lookup.bind(this)}></LookupForm>
        </div>
        <Grid container spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          { this.state.data.map( (pornstar) => {
            return (
              <Grid item xs={4} key={pornstar.uuid}>
                <Pornstar data={pornstar}></Pornstar> 
              </Grid>  
            );
          }) }
        </Grid>
      </div>
    );
  }
};

function App() {
  return (
    <div className="App">
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="h4"
            color="inherit"
          >
            Pornstar Identity Lookup 
          </TypoGraphy>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="Github link"
          >
            <a
              href="https://github.com/hyde231/pdb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub/>
            </a>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Lookup />
    </div>
  );
}

export default App;
