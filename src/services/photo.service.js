import http from "../http-common";

class PhotoDataService {
  getAll(albumId) {
    return http.get(`/photos?albumId=${albumId}`);
  }
}

export default new PhotoDataService();
