import axios from 'axios';

const isDocumentDefined = () => typeof document !== 'undefined';

const createCookie = (cookieName, cookieValue, daysToExpire) => {
  const date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 999);
  if (isDocumentDefined()) {
    document.cookie = `${cookieName}=${cookieValue}; expires=${date.toGMTString()}`;
  }
};

const fetchCookie = (cookieName) => {
  const name = `${cookieName}=`;
  const allCookieArray = isDocumentDefined() ? document.cookie.split(';') : [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < allCookieArray.length; i++) {
    const temp = allCookieArray[i].trim();

    if (temp.indexOf(name) === 0) {
      return temp.substring(name.length, temp.length);
    }
  }

  return '';
};

const isAuthenticated = () => fetchCookie('x-auth').length > 0;

const validateCookie = () =>
  new Promise((resolve, reject) => {
    axios
      .post('/api/validate-cookie', { cookie: fetchCookie('x-auth') })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err.response));
  });

const validateArticle = (article) =>
  new Promise((resolve, reject) => {
    if (article.title.length) {
      if (article.caption.length) {
        if (article.slug.length) {
          if (article.content.length) {
            if (article.cover_url.length) {
              return resolve();
            }
            reject(new Error('Missing cover image URL in the form!'));
          } else {
            reject(new Error('Missing content in the form!'));
          }
        } else {
          reject(new Error('Missing slug in the form!'));
        }
      } else {
        reject(new Error('Missing caption in the form!'));
      }
    } else {
      reject(new Error('Missing title in the form!'));
    }
  });

const areInputsValid = (name, email, message) => {
  if (name.length) {
    if (email.length) {
      const re = /\S+@\S+\.\S+/;
      if (re.test(email)) {
        if (message.length) {
          return true;
        }
        return 'Polje sa porukom je obavezno! Molimo pokušajte ponovo.';
      }
      return 'Email adresa nije ispravna! Molimo pokušajte ponovo.';
    }
    return 'Email adresa je obavezna4! Molimo pokušajte ponovo.';
  }
  return 'Polje sa imenom je obavezno! Molimo pokušajte ponovo.';
};

export {
  areInputsValid,
  isAuthenticated,
  fetchCookie,
  createCookie,
  validateCookie,
  validateArticle,
};
