import axios from "axios";

const quillModules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const quillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const createCookie = (cookieName, cookieValue, daysToExpire) => {
  const date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  document.cookie =
    cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
};

const fetchCookie = (cookieName) => {
  let name = cookieName + "=";
  let allCookieArray = document.cookie.split(";");

  for (let i = 0; i < allCookieArray.length; i++) {
    let temp = allCookieArray[i].trim();

    if (temp.indexOf(name) === 0) {
      return temp.substring(name.length, temp.length);
    }
  }

  return "";
};

const isAuthenticated = () => {
  return fetchCookie("x-auth").length > 0;
};

const validateCookie = () => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/validate-cookie", { cookie: fetchCookie("x-auth") })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err.response));
  });
};

const validateArticle = (article) => {
  return new Promise((resolve, reject) => {
    if (article.title.length) {
      if (article.caption.length) {
        if (article.slug.length) {
          if (article.content.length) {
            if (article.cover_url.length) {
              return resolve();
            } else {
              reject("Missing cover image URL in the form!");
            }
          } else {
            reject("Missing content in the form!");
          }
        } else {
          reject("Missing slug in the form!");
        }
      } else {
        reject("Missing caption in the form!");
      }
    } else {
      reject("Missing title in the form!");
    }
  });
};

const areInputsValid = (name, email, message) => {
  if (name.length) {
    if (email.length) {
      let re = /\S+@\S+\.\S+/;
      if (re.test(email)) {
        if (message.length) {
          return true;
        } else {
          return "Polje sa porukom je obavezno! Molimo pokušajte ponovo.";
        }
      } else {
        return "Email adresa nije ispravna! Molimo pokušajte ponovo.";
      }
    } else {
      return "Email adresa je obavezna4! Molimo pokušajte ponovo.";
    }
  } else {
    return "Polje sa imenom je obavezno! Molimo pokušajte ponovo.";
  }
};

const decaOdrastanjeTeme = [
  { value: "1", label: "Stidljivost ili je nešto drugo u pitanju" },
  { value: "2", label: "Deca i osećanja - ljutnja" },
  { value: "3", label: "Prilagodljivost i deca" },
  { value: "4", label: "Najčešći problem u učenju" },
  { value: "5", label: "Značaj emocionalnog razvoja" },
  { value: "6", label: "Sistem uspešnog učenja" },
  { value: "7", label: "Da li sam ok iz ugla deteta" },
];

const licniRazvojTeme = [
  { value: "1", label: "Začarani krug anksioznosti i kvaliteta sna" },
  { value: "2", label: "Kako naša uverenja utiču na kvalitet života" },
  { value: "3", label: "Realistični optimizam" },
  { value: "4", label: "Mentalno zdravlje i negovanje sebe" },
  { value: "5", label: "Važnost slušanja" },
];

const roditeljstvoTeme = [
  {
    value: "1",
    label:
      "Disciplina – šta je i kako nam može pomoći da budemo bolji roditelj",
  },
  { value: "2", label: "Mercedes model vaspitanja" },
  { value: "3", label: "Kako biti odgovoran roditelj" },
  { value: "4", label: "Roditeljstvo i tinejdžeri – šta sa konfliktima" },
];

export {
  areInputsValid,
  isAuthenticated,
  fetchCookie,
  createCookie,
  validateCookie,
  validateArticle,
  quillFormats,
  quillModules,
  decaOdrastanjeTeme,
  licniRazvojTeme,
  roditeljstvoTeme,
};
