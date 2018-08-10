import strings from './strings.json';

function getText(text, locale) {
  return strings[text] ? strings[text][locale] || strings['en'] : text;
}

export default getText;
