// @flow
import IconButton from 'material-ui/IconButton'
import h from 'react-hyperscript'

const Base = ({iconClassName, href, tooltip}) => {
  return h(IconButton, {
    iconClassName,
    href,
    tooltip,
    target: "_blank",
    tooltipPosition: "top-center"
  });
}

export const Github = ({github}) => {
  return h(Base, {
    iconClassName: "fa fa-github",
    href: `https://github.com/${github}`,
    tooltip: github,
  });
}

export const Twitter = ({twitter}) => {
  return h(Base, {
    iconClassName: "fa fa-twitter",
    href: `https://twitter.com/${twitter}`,
    tooltip: twitter,
  });
}

export const Facebook = ({facebook}) => {
  return h(Base, {
    iconClassName: "fa fa-facebook",
    href: `https://www.facebook.com/${facebook}`,
    tooltip: facebook,
  });
}
