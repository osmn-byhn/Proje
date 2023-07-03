<script setup>
    import Navbar from '../../components/guestComponent/Navbar.vue';
    import axios from 'axios'

    // Trendyol API kimlik bilgilerini burada güncelleyin
    const apiKey = 'FlZAAQEYFTstE0WwTq91';
    const apiSecret = 'XlLYXiuXRa4mpkxoNoJ9';
    const clientId = '817589';

    // Trendyol API erişim URL'ini burada güncelleyin
    const trendyolApiUrl = 'https://api.trendyol.com';

    const authorize = async () => {
    try {
        const response = await axios.post(`${trendyolApiUrl}/authorization/v2/oauth/token`, null, {
        params: {
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: apiSecret,
        },
        });

        const accessToken = response.data.access_token;
        console.log('Access Token:', accessToken);
        return accessToken;
    } catch (error) {
        console.error('Yetkilendirme hatası:', error.response.data);
        throw error;
    }
    };

    authorize()
    .then((accessToken) => {
        // Access Token'ı kullanarak diğer Trendyol API isteklerini gerçekleştirin
        console.log('sonunda oldu amk');
        // ...
    })
    .catch((error) => console.error('Hata:', error));


</script>

<template>
    <Navbar />
</template>

<style scoped lang="scss">

</style>