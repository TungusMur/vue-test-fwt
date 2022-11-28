const setCookie = (name: string, value: string) => {
  const updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  document.cookie = updatedCookie;
};

export default setCookie;
