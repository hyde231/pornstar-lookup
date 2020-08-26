import React from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import { GitHub } from '@material-ui/icons'
import Grid from '@material-ui/core/Grid';

import Pornstar from './components/Pornstar.js';
const { IdentityList } = require("./IdentityList.js");
const Data = require("./data/Pornstars.combined.json"); 
let Pornstars = new IdentityList(Data);
let scopes = new Set();
Pornstars.list.forEach( ps => {
  ps.names.getScopes().forEach( s => scopes.add(s) );
});

//TODO Lookup into on Component
//TODO Statistics on search results (results found, out of x entries, in Y ms)
//TODO Highlight search terms
//TODO select list component
//TODO Search for substrings
//TODO search for combination of names

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
    this.setState( {data: Pornstars.getByName(s) } );
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

          <TypoGraphy variant="inherit"
            color="inherit"
            align="right"
          >
            <a
              href="https://github.com/hyde231/pdb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub style={{ color: '#ffffff'}}/>
            </a>
          </TypoGraphy>
        </Toolbar>
      </AppBar>
      <Lookup />
    </div>
  );
}

export default App;
