const parseUrl = require("parse-url");

const decodeUrl = (link) => {
  try {
    let urlParts = parseUrl(link);
    let urlPtBr = {
      protocolo: urlParts.protocol,
      host: urlParts.host,
      usuario: urlParts.user,
      path: urlParts.pathName ? urlParts.replace('/', '') : '',
      parametros: urlParts.search != ''
    }
    if (urlParts.protocol === 'ssh') {
      urlPtBr.dominio = urlParts.resource;
      if (urlParts.user) {
        let indexPercent = urlPtBr.usuario.indexOf("%");
        if (indexPercent >= 0) {
          urlPtBr.usuario = urlParts.user.substr(0, indexPercent);
          urlPtBr.senha = urlParts.user.substr(indexPercent + 1, urlParts.user.length);
        }
      }
    } else {
      if (urlParts.resource) {
        let index = urlParts.resource.indexOf(".");
        if (index >= 0) {
          urlPtBr.dominio = urlParts.resource.substr(index + 1, urlParts.resource.length);
          urlPtBr.host = urlParts.resource.substr(0, index);
        }
      }
    }

    if (urlParts.search) {
      urlPtBr.parametros = urlParts.search
    } else {
      let igualIndex = urlParts.pathname.lastIndexOf("=");
      let primeiraBarra = urlParts.pathname.indexOf("/");
      let ultimaBarra = urlParts.pathname.lastIndexOf("/");

      if (igualIndex >= 0) {
        urlPtBr.parametros = urlParts.pathname.substr(ultimaBarra + 1, urlParts.pathname.length);
      } else {
        urlPtBr.parametros = '';
      }

      if (urlPtBr.parametros) {
        urlPtBr.path = urlParts.pathname.substr(primeiraBarra + 1, urlParts.pathname.indexOf(urlPtBr.parametros) - 2);
      } else {
        urlPtBr.path = urlParts.pathname.substr(primeiraBarra + 1, urlParts.pathname.length);
      }
    }

    return (urlPtBr);
  }
  catch (err) {
    console.log('Url inválida.');
  }
}

getString = (obj) => {
  if (obj) {
    for (const [key, value] of Object.entries(obj)) {
      if (value) {
        console.log(`${key}: `, value);
      }
    }
  }
}

module.exports = { decodeUrl, getString };