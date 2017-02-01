// @flow
import React from 'react'
import {Card, CardHeader, CardMedia, CardTitle, CardActions} from 'material-ui/Card'
import Chip from 'material-ui/Chip'
import FlatButton from 'material-ui/FlatButton'
import Markdown from 'react-markdown'

import { Github, Twitter, Facebook} from './SNSLinkButton'

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

type SpeakerProp = {id: string, title: string, name: string, furi: string, image: string, tags: string[], github?: string, twitter?: string, facebook?: string, onShowDetail: any}
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
                onClick={onShowDetail}
            >
            </CardHeader>
            <CardActions>
                <FlatButton label="詳細" onClick={onShowDetail}/>
                { github ? <Github github={github} /> : null }
                { twitter ? <Twitter twitter={twitter} /> : null }
                { facebook ? <Facebook facebook={facebook} /> : null }
            </CardActions>
        </Card>
    );
};

export default Speaker
