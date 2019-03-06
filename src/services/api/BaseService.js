import isoFetch from "isomorphic-fetch";

class BaseService {
  static getHeaders = isFile => {
    let headers = new Headers();
    if (!isFile) {
      headers.append("Content-Type", "application/json");
    }
    headers.append("Accept", "application/json");
    headers.append("Access-Control-Allow-Origin", " * ");
    headers.append("Credentials", "same-origin");
    let lang = localStorage.getItem("lang")
      ? localStorage.getItem("lang").toString()
      : "fr";
    headers.append("lang", lang);
    return headers;
  };

  static getHeadersAuth = isFile => {
    let headers = BaseService.getHeaders(isFile);
    let access_token = localStorage.getItem("access_token")
      ? localStorage.getItem("access_token").toString()
      : null;
    if (access_token === null) {
      window.location.reload();
    }
    headers.append("x-access-token", access_token);
    return headers;
  };

  static checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      alert("ici");
      console.log(error);
      throw error;
    }
  };

  static getToken = () => {
    return localStorage.getItem("access_token").toString();
  };

  static postRequest = async (url, body, required_auth) => {
    let head = required_auth
      ? BaseService.getHeadersAuth()
      : BaseService.getHeaders();

    let headers = {
      method: "POST",
      headers: head,
      mode: "cors",
      cache: "default",
      body: JSON.stringify(body)
    };

    let response = await isoFetch(url, headers)
      .then(response => {
        return response;
      })
      .catch(err => {
        return err;
      });
    return response;
  };

  static postFileRequest = async (url, body, required_auth) => {
    let head = required_auth
      ? BaseService.getHeadersAuth(true)
      : BaseService.getHeaders(true);

    let headers = {
      method: "POST",
      headers: head,
      mode: "cors",
      cache: "default",
      body: body
    };
    let response = await isoFetch(url, headers)
      .then(response => {
        console.log(response);
        return response;
      })
      .catch(err => {
        return err;
      });
    return response;
  };

  static putRequest = async (url, body, required_auth) => {
    let head = required_auth
      ? BaseService.getHeadersAuth()
      : BaseService.getHeaders();

    let headers = {
      method: "PUT",
      headers: head,
      mode: "cors",
      cache: "default",
      body: JSON.stringify(body)
    };
    let response = await isoFetch(url, headers)
      .then(response => {
        return response;
      })
      .catch(err => {
        return err;
      });
    return response;
  };

  static deleteRequest = async (url, body, required_auth) => {
    let head = required_auth
      ? BaseService.getHeadersAuth()
      : BaseService.getHeaders();

    let headers = {
      method: "DELETE",
      headers: head,
      mode: "cors",
      cache: "default",
      body: JSON.stringify(body)
    };
    let response = await isoFetch(url, headers)
      .then(response => {
        return response;
      })
      .catch(err => {
        return err;
      });
    return response;
  };

  static getRequest = async (url, required_auth) => {
    let head = required_auth
      ? BaseService.getHeadersAuth()
      : BaseService.getHeaders();

    let headers = {
      method: "GET",
      headers: head,
      mode: "cors",
      cache: "default"
    };
    let response = await isoFetch(url, headers)
      .then(response => {
        return response;
      })
      .catch(err => {
        return err;
      });
    return response;
  };
}

BaseService.publicName = "BaseService";
export default BaseService;
