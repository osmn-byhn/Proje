<script setup>
    function togglePassword() {
        var element = document.getElementById('password');
        var eye = document.getElementById('eye');
        element.type = (element.type == 'password' ? 'text' : 'password');
        if (element.type === 'password') {
            eye.setAttribute('class', 'bi bi-eye-fill')
        }
        else {
            eye.setAttribute('class', 'bi bi-eye-slash-fill')
        }
    }
</script>

<template>
    <div class="main row">
        <div class="login col-6">
            <h2>Login</h2>
            <div class="email input-box">
                <label for="email">E-Mail</label>
                <input type="email" v-model="email" id="email" class="form-control" aria-label="E-Mail" placeholder="Enter your e-mail adress">
            </div>
            <div class="password input-box">
                <label for="password">Password</label>
                <div class="input-group mb-3">
                    <input type="password" id="password" v-model="password" class="form-control" aria-label="Password" placeholder="Enter your password">
                    <span  class="input-group-text" @click="togglePassword()">
                        <i id="eye" class="bi bi-eye-fill"></i>
                    </span>
                </div>
            </div>
            <div class="button-group">
                <button type="button" class="btn btn-primary">
                    <i class="bi bi-arrow-right-circle-fill"></i> LOGIN
                </button>
                <a href="/forgot-password">Forgot Password</a>
            </div>
        </div>
        <div class="content col-6">
            <img src="../../assets/Photos/illustrations-1.png" alt="illustration-1">
            <h5>You can integrate all your stores here and control them in one panel...</h5>
            <a class="btn" href="/sign-up">Start for free</a>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import '../../../public/guestPublic/views/LoginView.scss'
</style>