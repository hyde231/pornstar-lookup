import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import Box from '@material-ui/core/Box';

const { Sites } = require("../Sites.js");

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
//      backgroundColor: 'lightblue',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      height: 320,
      minWidth: 120,
    },
    boxedname: {
        border: '1px solid black',
        marginRight: '2px',
        marginBottom: '1px',
    }
}));

const Pornstar = ({data}) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <CardMedia
                image={ Sites.findPictureUrl(data)[0] }
                className={classes.cover}
            />
            <div className={classes.details}>
                <CardHeader
                    avatar={
                        <Avatar>
                        {data.getMostProminentName().substring(0,1)}
                        </Avatar>
                    }
                    title={
                        <TypoGraphy variant="inherit">
                            { data.getMostProminentName() }
                        </TypoGraphy>
                    }
                    subheader={data.uuid}
                />
                <CardContent className={classes.content}>
                    <Box>
                        { data.getIds().map( id => {
                            return (
                                <span>
                                    {data.ids.getScopes(id).map( scope => {
                                        return (
                                            <a href={Sites.getUrl(scope,id)} target="_blank"  rel="noopener noreferrer">
                                                { React.createElement("img", {src:(Sites.getFavIcon(scope)), width:"12px", height:"12px", style:{padding:"4px",filter:"sepia(0%)"} } ) }
                                            </a>
                                        );
                                    })}
                                </span>
                            );
                        }) }
                    </Box>
                    <Box>
                        { data.getNames().sort().map( name => {
                            return (
                                <Tooltip title={data.names.getScopes(name).sort().join(", ")}>
                                    <span className={classes.boxedname}>{name}  </span>
                                </Tooltip>
                            );
                        }) }
                    </Box>
                </CardContent>
            </div>
        </Card>
    );
};

export default Pornstar;