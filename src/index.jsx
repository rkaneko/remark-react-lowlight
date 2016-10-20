import React from 'react';
import Lowlight from 'react-lowlight';

export default (languageDefinitions) => {
  Object.keys(languageDefinitions).forEach(language => {
    const definition = languageDefinitions[language];

    Lowlight.registerLanguage(language, definition);
  });

  const Code = ({ className = '', children, inline = true }) => {
    const language = className.split('-')[1] || '';
    const child = children[0];
    if (child.type === 'code') {

    }
    const value = children[0] || '';
    const props = { language, value, inline };
    return (
      <Lowlight {...props} />
    );
  };
  Code.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    inline: React.PropTypes.boolean
  };

  const Pre = ({ children }) => {
    const codeElements = children.filter(child => child.type === 'code');
    if (codeElements.length === 1) {
      const codeElement = codeElements[0];
      const props = Object.assign({}, codeElement.props, { inline: false });
      return <pre><Code {...props} /></pre>;
    }
    return <pre>{children}</pre>;
  };

  return Pre;
};
