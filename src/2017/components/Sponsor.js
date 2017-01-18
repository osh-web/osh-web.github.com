import h from 'react-hyperscript'

const Sponsor = ({url, name, image, type, width}) => {
    console.log(width);
    const type2width = {
        'silver': width/2,
        'gold': width,
        'platinum': width,
    };
    const type2opacity = {
        'silver': 0.8,
        'gold': 1,
        'platinum': 1,
    };
    const style = {
        width: type2width[type],
        opacity: type2opacity[type],
    };
    return h('div', {},
        h('a', {href: url},
            h('img', {src: image, alt: name, style })
        )
    );
};

export default Sponsor
