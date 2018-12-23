import React from 'react'
import withRipple from '@material/react-ripple';
import { Link } from '@reach/router'
import TopAppBar, {TopAppBarFixedAdjust} from '@material/react-top-app-bar'
import MaterialIcon from '@material/react-material-icon'

/*
import '@material/react-top-app-bar/index.scss'
import '@material/react-material-icon/index.scss'
*/

const Back = (props) => {
  const {
    children,
    className = '',
    // You must call `initRipple` from the root element's ref. This attaches the ripple
    // to the element.
    initRipple,
    // include `unbounded` to remove warnings when passing `otherProps` to the
    // root element.
    unbounded,
    ...otherProps
  } = props;

  // any classes needed on your component needs to be merged with
  // `className` passed from `props`.
  const classes = `ripple-icon-component ${className}`;

  return (
    <Link
      to="/"
      className={classes}
      ref={initRipple}
      {...otherProps}>
      <MaterialIcon icon='chevron_left' />
    </Link>
  );
};
const RippleBack = withRipple(Back)

export function AppBar({title, children}) {
  return (
    <div>
      <TopAppBar
        title={title}
        navigationIcon={<RippleBack />}
      />
      <TopAppBarFixedAdjust>
      {children}
      </TopAppBarFixedAdjust>
    </div>
  );
}
