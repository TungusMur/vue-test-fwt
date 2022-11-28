/* eslint-disable no-useless-escape */
const getCookie = (name: string) => {
  const regex = new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`);

  const matches = document.cookie.match(regex);
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export default getCookie;
