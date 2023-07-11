<script setup>

</script>

<template>
    <div class="container">
        <div class="custom-container">
            <h2>Forgotten your password?</h2>
            <form>
                <div class="form-group">
                    <input type="email" class="form-control" id="email" placeholder="E-mail">
                </div>
                <button type="submit" class="btn btn-primary">Reset Pasword</button>
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .custom-container {
        display: inline-block;
        border: 1px solid #0b0000;
        border-radius: 15px;
        padding: 20px;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        background-color: #f2f2f2;
        h2 {
            margin-bottom: 20px;
        }
        input {
            padding: 5px;
            margin-bottom: 10px;
        }
        button {
            margin-top: 10px;
        }
    }
</style>