import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

/**
 * Service to call HTTP request via Axios
 */
const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = process.env.VUE_APP_API_URL;
  },

  /**
   * Set the default HTTP request headers
   */
  setHeader() {
    Vue.axios.defaults.headers.common = {
      Accept: "application/json"
    };
  },

  /**
   * Send the GET HTTP request
   * @param resource
   * @param config
   * @returns {*}
   */
  get(resource, config = null) {
    return Vue.axios.get(resource, config);
  },

  /**
   * Set the POST HTTP request
   * @param resource
   * @param params
   * @returns {*}
   */
  post(resource, params = null) {
    return Vue.axios.post(resource, params);
  },

  /**
   * Send the PUT HTTP request
   * @param resource
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  put(resource, params = null) {
    return Vue.axios.put(resource, params);
  },

  /**
   * Send the PATCH HTTP request
   * @param resource
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  patch(resource, params = null) {
    return Vue.axios.patch(resource, params);
  },

  /**
   * Send the DELETE HTTP request
   * @param resource
   * @param config
   * @returns {*}
   */
  delete(resource, config = null) {
    return Vue.axios.delete(resource, config);
  }
};

export default ApiService;
