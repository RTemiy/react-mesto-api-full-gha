const AVATAR_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const CORS = [
  'http://rtemiysproject.nomoredomainsicu.ru',
  'https://rtemiysproject.nomoredomainsicu.ru',
  'http://51.250.85.111',
  'https://77.232.131.208',
  'http://localhost:3000',
  'http://localhost:3001',
];

module.exports = {
  AVATAR_REGEX,
  CORS,
};
