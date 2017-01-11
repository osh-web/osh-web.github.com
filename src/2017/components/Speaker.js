import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import Chip from 'material-ui/Chip'
import Markdown from 'react-markdown'

const Chips = ({tags}) => {
    const style = {
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: 14,
        paddingLeft: 10,
        paddingRight: 10,
    };

    const chip_style = {
        margin: 4,
    };

    const chips = tags.map((tag) => {
        return (
            <Chip style={chip_style}>{tag}</Chip>
        );
    });

    return (
        <div style={style}>
            {chips}
        </div>
    );
};

const Speaker = ({title, name, furi, image, profile, tags}) => {
    return (
        <Card key={furi}
            style={{maxWidth: 320, margin: 10}}
            initiallyExparded={false}
        >
            <CardMedia overlay={<CardTitle title={title} />}>
                <img src={image ? image : '/img/2017_no_image@2x.jpg' } />
            </CardMedia>
            <Chips tags={tags} />
            <CardHeader
                title={name}
                subtitle={furi}
                avatar={image}
                actAsExpander={true}
                showExpandableButton={true}
                onExpandChange={(state) => { console.log(state) }}
            />
            <CardText expandable={true}>
                <Markdown source={profile}/>
            </CardText>
        </Card>
    );
};

export default Speaker
