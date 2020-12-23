import $api from '@/core/services/api.service'

export default function(store) {
    store.$api = $api;
}