<script setup>
    import Navbar from '../../components/userComponent/Navbar.vue';
    import Sidebar from '../../components/userComponent/Sidebar.vue';
    import { onMounted } from 'vue';
    
    import router from '../../router'
    onMounted( () => {
        if (localStorage.getItem('token') === null) {
            router.push('/login')
        }
    })






    import axios from 'axios'
    

    // Trendyol API kimlik bilgilerini burada güncelleyin
    const apiKey = 'FlZAAQEYFTstE0WwTq91';
    const apiSecret = 'XlLYXiuXRa4mpkxoNoJ9';
    const clientId = '817589';

    // Trendyol API erişim URL'ini burada güncelleyin
    const trendyolApiUrl = 'https://api.trendyol.com';

    // Trendyol API'ye yetkilendirme yapmak için bir fonksiyon
    const authorize = async () => {
    try {
        const response = await axios.post(
        `${trendyolApiUrl}/authorization/v2/oauth/RmxaQUFRRVlGVHN0RTBXd1RxOTE6WGxMWVhpdVhSYTRtcGt4b05vSjk=`,
        {
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: apiSecret,
        }
        );
        
        const accessToken = response.data.access_token;
        return accessToken;
    } catch (error) {
        console.error('Yetkilendirme hatası:', error);
        throw error;
    }
    };

    // Trendyol API'ye ürünleri listeleme isteği göndermek için bir fonksiyon
    const listProducts = async (accessToken) => {
    try {
        const response = await axios.get(`${trendyolApiUrl}/product`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        });
        
        const products = response.data;
        console.log('Ürünler:', products);
    } catch (error) {
        console.error('Ürün listeleme hatası:', error);
        throw error;
    }
    };

    // Trendyol API'ye erişim için yetkilendirme yapın ve ürünleri listeleme isteği gönderin
    authorize()
    .then((accessToken) => listProducts(accessToken))
    .catch((error) => console.error('Hata:', error));

</script>

<template>
    <Navbar />
    <Sidebar />
</template>

<style scoped lang="scss">

</style>