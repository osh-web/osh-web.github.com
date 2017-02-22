import {List, ListItem} from 'material-ui/List';
import {Card} from 'material-ui/Card';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Avatar from 'material-ui/Avatar';
import h from 'react-hyperscript'

const NormalLine = ({time, text}) => {
    return h(ListItem, {
        disabled: true,
        primaryText: `${time} ${text}`,
        leftAvatar: h(Avatar, {icon: ""}),
    })
};

const SpeakerLine = ({time, title, name, image, onShowDetail}) => {
    const _title = title.replace("\\", "");
    return h(ListItem, {
        primaryText: `${time} ${_title}`,
        secondaryText: `${name}`,
        leftAvatar: h(Avatar, {src: image}),
        rightIcon: h(ActionInfo),
        onClick: onShowDetail,
    })
};

const Timetable = ({children}) => {
    return h(Card, [
        h(List, children)
    ]);
};

export { Timetable, SpeakerLine, NormalLine }
