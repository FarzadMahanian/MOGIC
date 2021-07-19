import http from "../http-common";

class AlbumDataService {
  getAll(userId) {
    return http.get(`/albums?userId=${userId}`);
  }
}

export default new AlbumDataService();
