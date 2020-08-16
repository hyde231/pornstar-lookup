import React from 'react';

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import TypoGraphy from '@material-ui/core/Typography'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';

let idToUrl = {
    thenude: (id) => `https://www.thenude.com/${id}.htm`,
    eurobabeindex: (id) => `https://www.eurobabeindex.com/sbandoindex/${id}.html`,
    indexxx: (id) => `https://www.indexxx.com/m/${id}`,
    freeones: (id) => `https://www.freeones.xxx/${id}`,
    pornpics: (id) => `https://www.pornpics.com/?q=${id}`,
    babepedia: (id) => `https://www.babepedia.com/babe/${id}`,
    adultempire: (id) => `https://www.adultdvdempire.com/${id}.html`,
    boobpedia: (id) => `http://www.boobpedia.com/boobs/${id}`,
    tpdb: (id) => `https://metadataapi.net/performer/${id}`,
};
function getUrl(label,id){
    return idToUrl[label] ? idToUrl[label](id) : id;
}

const Pornstar = ({data}) => {
    const ids = data.getIds().map( id => {
        return (
            <IdList list={data.ids.getScopes(id)} id={id}></IdList> 
        );
    });
    const names = data.getNames().sort().map( name => {
        return (
            <NameList list={data.names.getScopes(name)} name={name}></NameList>
        );
    });
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar>
                      {data.getMostProminentName().substring(0,1)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={data.getMostProminentName()}
                subheader={data.uuid}
            />
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <TypoGraphy variant="p" color="inherit">
                            IDs
                        </TypoGraphy>
                        <TypoGraphy variant="div" color="inherit">
                            {ids}
                        </TypoGraphy>
                    </Grid>
                    <Grid item xs={6}>
                        <TypoGraphy variant="p" color="inherit">
                            Names
                        </TypoGraphy>
                        <TypoGraphy variant="div" color="inherit">
                            {names}
                        </TypoGraphy>
                    </Grid>
                </Grid>
            </CardContent>

            <CardActions>
                todo
            </CardActions>
        </Card>
    );
};
  
const IdList = ({list, id}) => {
    //console.log(list);
    const links = list.map( scope => {
        return (<a href={getUrl(scope,id)}>{scope} </a>);
    });
    return (<span>{links}</span>);
};
  
let pill={"padding":"2px;"};
const NameList = ({list, name}) => {
    return (
        <Tooltip title={list.sort().join(", ")}>
            <span style={pill}>{name} </span>
        </Tooltip>
    );
    //<Tooltip title=}>
};

export default Pornstar;