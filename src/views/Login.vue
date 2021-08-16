<template>
    <div>
        <div class="login-wrap">
            <div class="input-area">
                <select-form/>
                <input type="text" placeholder="아이디"/>
                <input type="password" placeholder="비밀번호"/>
                <div class="com-check">
                    <input type="checkbox" name="check-all" id="check-all">
                    <label for="check-all">아이디 저장</label>
                </div>
            </div>
            <div class="btn-area">
                <button class="com-btn">로그인</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
}
</script>

<style scoped>

</style>
