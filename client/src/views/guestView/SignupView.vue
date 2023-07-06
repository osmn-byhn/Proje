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
    function togglePassword2() {
        var element2 = document.getElementById('repassword');
        var eye2 = document.getElementById('eye-2');
        element2.type = (element2.type == 'password' ? 'text' : 'password');
        if (element2.type === 'password') {
            eye2.setAttribute('class', 'bi bi-eye-fill')
        }
        else {
            eye2.setAttribute('class', 'bi bi-eye-slash-fill')
        }
    }
</script>

<template>
    <div class="signup container">
        <h1>Sign up</h1>
        <div class="row">
            <div class="first-name col-md-6">
                <label for="first-name">First Name</label>
                <input type="text" v-model="firstName" id="first-name" class="form-control" aria-label="first-name" placeholder="John">
            </div>
            <div class="last-name col-md-6">
                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" v-model="lastName" class="form-control" aria-label="last-name" placeholder="Die">
            </div>
            <div class="email col-md-6">
                <label for="email">E-Mail</label>
                <input type="email" v-model="email" id="email" class="form-control" aria-label="E-Mail" placeholder="Enter your e-mail adress">
            </div>
            <div class="tel col-md-6">
                <label for="tel-no">Phone Number</label>
                <input type="tel" name="number" id="number" class="form-control" aria-label="Tel-No" placeholder="+000000000000">
            </div>
            <div class="password col-md-6">
                <label for="password">Password</label>
                <div class="input-group mb-3">
                    <input type="password" id="password" v-model="password" class="form-control" aria-label="Password" placeholder="Enter your password">
                    <span  class="input-group-text" @click="togglePassword()">
                        <i id="eye" class="bi bi-eye-fill"></i>
                    </span>
                </div>
            </div>
            <div class="repassword col-md-6">
                <label for="repassword">Password Again</label>
                <div class="input-group mb-3">
                    <input type="password" id="repassword" v-model="repassword" class="form-control" aria-label="repassword" placeholder="Enter your password again">
                    <span  class="input-group-text" @click="togglePassword2()">
                        <i id="eye-2" class="bi bi-eye-fill"></i>
                    </span>
                </div>
            </div>
            <button class="btn btn-success">Create Account</button>
            <br><br>
            <p>Are you have account? <a href="/login">Login</a></p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import '../../../public/guestPublic/views/SignupView.scss'
</style>