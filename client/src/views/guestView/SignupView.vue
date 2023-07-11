<script setup>
    import { useRouter, useRoute } from 'vue-router'
    import axios from 'axios'
    import { ref, onMounted } from "vue"
    import router from '../../router';
    const email = ref('')
    const password = ref('')
    const firstName = ref('')
    const lastName = ref('')
    const telNumber = ref('')
    const error = ref('')
    var popup = document.getElementById('popup')
    var validRegexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/
    var validRegexPassword = /^(?=.*\d)(?=.*[.!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/
    async function Sign() {
        let user = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            telNumber: telNumber.value,
            password: password.value
        }
        if (validRegexEmail.test(email.value)) {
            if (validRegexPassword.test(password.value)) {
                await axios.post('http://localhost:3000/signup', user)
                .then( res => {
                    if (res.status === 200) {
                        router.push('/dashboard')
                    }
                    //router.push('/home')
                }, err => {
                    error.value = err.response.data.error
                })
            } else {
                error.value = 'Invalid password'
            }
        } else {
            error.value = 'Invalid email'
        }
    }
    onMounted( () => {
        if (localStorage.getItem('token') !== null) {
            router.push('/dashboard')
        }
    })
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
                <input type="tel" v-model="telNumber" name="number" id="number" class="form-control" aria-label="Tel-No" placeholder="+000000000000">
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
            <button class="btn btn-success" @click="Sign()" :disabled="password.length <=8">Create Account</button>
            <br><br>
            <p>Are you have account? <a href="/login">Login</a></p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import '../../../public/guestPublic/views/SignupView.scss'
</style>