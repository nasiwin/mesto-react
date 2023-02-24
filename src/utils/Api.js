class Api {
  constructor(item) {
    this._url = item.url;
    this._headers = item.headers;
    console.log(item);
  }

  getAllData() {
    return Promise.all([this.getProfile(), this.getDataCards()]);
  }

  _request(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getDataCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._request(res);
    });
  }

  getNewCard(item) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(item),
    }).then((res) => {
      return this._request(res);
    });
  }

  getDeleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._request(res);
    });
  }

  getProfile() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._request(res);
    });
  }

  getRenameProfile(item) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(item),
    }).then((res) => {
      return this._request(res);
    });
  }

  setProfileAvatar(item) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(item),
    }).then((res) => {
      return this._request(res);
    });
  }

  getCardLike(id, isLiked) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._request(res);
    });
  }

  deleteCardLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._request(res);
    });
  }
}
const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-42",
  headers: {
    Authorization: "81dfcd0d-09f2-41d4-baf1-d7216e006f64",
    "Content-Type": "application/json",
  },
});

export { api };
