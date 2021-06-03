import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import ToggleButton from './ToggleButton';
import Button from './Button';

const SelectLanguage = ({ className, langs }) => {
  const links = langs
    ?.filter((lang) => !lang.selected)
    .map((lang) => (
      <Button
        className={className}
        size="fluid"
        link={lang.link}
        key={lang.langKey}>
        {lang.langKey}
      </Button>
    ));

  return <>{links}</>;
};

SelectLanguage.propTypes = {
  langs: PropTypes.array,
};

export default SelectLanguage;
