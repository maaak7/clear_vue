import $api from '@/services/api.service'

export default function(store) {
    store.$api = $api;
}