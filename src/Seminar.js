import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class Seminar extends Component {
    seminars() {
        const style = {
            'margin': '0.5em'
        };
        return [
            {
                'name': 'オープンセミナー2016@広島',
                'theme': 'みんなでつくろうモダンな開発現場',
                'url': '/2016'
            },
            {
                'name': 'オープンセミナー2015@広島',
                'theme': 'クラウド時代の構成管理入門',
                'url': '/2015'
            },
            {
                'name': 'オープンセミナー2014@広島',
                'theme': 'TDD…そして Be Agile',
                'url': 'http://osh-2014.github.io/'
            },
            {
                'name': 'オープンセミナー2013@広島',
                'theme': 'モバイルプラットフォームとJava',
                'url': '/2013'
            },
        ].map((event) => {
            const label = `${event.name}「${event.theme}」`;
            return (
                <Card onClick={() => { this.click(event.url)} }>
                    <CardHeader title={event.name} subtitle={event.theme} />
                </Card>
            );
        });
    };

    click (url) {
        window.location = url;
    }

    render() {
        return (
            <div className="Content">
                <Toolbar>
                    <ToolbarTitle text="これまでのオープンセミナー広島" />
                </Toolbar>
                {this.seminars()}
            </div>
        );
    }
}

export default Seminar;