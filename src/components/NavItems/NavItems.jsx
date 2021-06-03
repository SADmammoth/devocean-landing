import React, { useMemo } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Button from '../Button';

import styles from './NavItems.styles';

const useStyles = createUseStyles(styles);

function NavItems({
  as,
  items,
  className,
  itemClass,
  itemContainerClass,
  activeItemClass,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const renderItems = useMemo(
    () =>
      items.map((item, index) => {
        const { id, title, label, link, onClick, type } = item;
        return (
          <li
            key={id}
            title={title}
            aria-label={title}
            className={classNames(itemContainerClass, classes.li)}
            style={{ '--index': index }}>
            <Button
              size="fluid"
              onClick={onClick}
              link={link}
              className={classNames(itemClass, classes[type || 'link'])}>
              {label}
            </Button>
          </li>
        );
      }),
    [items],
  );

  const As = as || 'ul';

  return (
    <As className={classNames(className, classes.navItems)}>{renderItems}</As>
  );
}

NavItems.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ).isRequired,
  itemClass: PropTypes.string,
  itemContainerClass: PropTypes.string,
};

export default NavItems;
