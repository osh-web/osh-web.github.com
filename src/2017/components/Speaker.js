// @flow
import React from 'react'
import {Card, CardHeader, CardMedia, CardTitle, CardActions} from 'material-ui/Card'
import Chip from 'material-ui/Chip'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import Markdown from 'react-markdown'
import h from 'react-hyperscript'

const Chips = ({tags}: {tags: string[]}) => {
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

    const chips = tags.map((tag: string) => {
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

type SpeakerProp = {id: string, title: string, name: string, furi: string, image: string, tags: string[], github: string, twitter: string, facebook: string, onShowDetail: any}
const Speaker = ({id, title, name, furi, image, tags, github, twitter, facebook, onShowDetail}: SpeakerProp) => {
    const titleStyle = ((length) => {
        switch(true) {
            case length > 25:
                return { fontSize: 13, lineHeight: 1.4 };
            case length > 21:
                return { fontSize: 12, lineHeight: '40px' };
            case length > 10:
                return { fontSize: 15, lineHeight: '50px' };
            default:
                return { fontSize: 24, lineHeight: '34px' };
        }
    })(title.length);
    const Github = github ?
        h(IconButton, {
            iconClassName: "fa fa-github",
            href: `https://github.com/${github}`,
            tooltip: github,
            target: "_blank",
            tooltipPosition: "top-center"
        }) : null;
    const Twitter = twitter ?
        h(IconButton, {
            iconClassName: "fa fa-twitter",
            href: `https://twitter.com/${twitter}`,
            tooltip: twitter,
            target: "_blank",
            tooltipPosition: "top-center"
        }) : null;
    const Facebook = facebook ?
        h(IconButton, {
            iconClassName: "fa fa-facebook",
            href: `https://www.facebook.com/${facebook}`,
            tooltip: facebook,
            target: "_blank",
            tooltipPosition: "top-center"
        }) : null;
    return (
        <Card key={furi}
              style={{maxWidth: 320, margin: 10}}
              expandable={false}
        >
            <CardMedia overlay={<CardTitle title={<Markdown source={title} />} titleStyle={titleStyle}/>}>
                <img src={image ? image : '/img/2017_no_image@2x.jpg' } role="presentation"/>
            </CardMedia>
            <Chips tags={tags} />
            <CardHeader
                title={name}
                subtitle={furi}
                avatar={image}
                actAsExpander={true}
            >
            </CardHeader>
            <CardActions>
                <FlatButton label="詳細" onClick={onShowDetail}/>
                {Github}
                {Twitter}
                {Facebook}
            </CardActions>
        </Card>
    );
};

export default Speaker
