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
})


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
        Lookup
      </button>
    </div>
  );
};

const gridStyle={
  flexGrow:1
};

const PornstarList = ({list}) => {
  return (
    <div style={gridStyle}>
    <Grid container spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      
        {list.map( pornstar => {
          return (
            <Grid item xs={4}>
              <Pornstar data={pornstar}></Pornstar> 
            </Grid>  
          );
        })}

    </Grid>
    </div>
  );

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
        <div>
          <PornstarList list={this.state.data}></PornstarList>
        </div>
      </div>
    );
  }
};

function App() {
  return (
    <div className="App">
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
              Pornstar Identity Lookup
            </TypoGraphy>
          </Toolbar>
        </AppBar>
        <TypoGraphy variant="link"
          color="inherit"
          align="right"
        >
          <a
            href="https://github.com/hyde231/pdb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
        </TypoGraphy>

      <Lookup/>
    </div>
  );
}

export default App;
