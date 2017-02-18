// @flow
import { connect } from 'react-redux'
import { SpeakerLine, Timetable, NormalLine } from '../components/Timetable'
import { speakerDetail } from '../actions'
import {speakers} from 'toml!../speaker.toml'
import h from 'react-hyperscript'

const timeline = [
    {
        time: "09:30",
        text: "開場",
    },
    {
        time: "10:00",
        text: "オープニング",
    },
    {
        time: "10:10",
        speaker: "yayuyayu",
    },
    {
        time: "10:50",
        speaker: "motoki",
    },
    {
        time: "11:45",
        speaker: "hanatani"
    },
    {
        time: "12:15",
        text: "昼休憩",
    },
    {
        time: "13:30",
        speaker: "yamamoto_manabu",
    },
    {
        time: "14:45",
        speaker: "taisukef",
    },
    {
        time: "15:20",
        text: "ライトニングトーク大会",
    },
    {
        time: "16:30",
        speaker: "yoshioterada",
    },
    {
        time: "17:25",
        text: "エンディング"
    },
];

const speakerMap = speakers.reduce((acc, speaker) => {
    return {...acc, [speaker.id]: speaker};
}, {});


const mapStateToProps = (state, ownProps) => {
    return ownProps;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onShowDetail: () => {
            return dispatch(speakerDetail(ownProps.id));
        }
    }
};

const _SpeakerLine = connect(mapStateToProps, mapDispatchToProps)(SpeakerLine);

const _Timetable = () => {
    return h(Timetable, [
        timeline.map(({time, text, speaker}) => {
            if (speaker) {
                const s = speakerMap[speaker];
                return h(_SpeakerLine, {...s, time})
            } else {
                return h(NormalLine, {time, text})
            }
        }),
        h("div", {style: {margin: 20, color: "#666", fontSize: 12}}, [
            "本タイムテーブルは現時点での予定です。",
            h("br"),
            "運営の都合上で予告なしに変更される可能性があります。",
            h("br"),
            "変更される場合は、なるべく大きな変更がないように対応いたします。"
        ])
    ]);
};


export default _Timetable
