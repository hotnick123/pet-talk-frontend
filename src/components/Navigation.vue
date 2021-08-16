<template>
  <nav>
    <h1>
      <span class="blind">PETTALK</span>
    </h1>
    <router-link to="/"><span>메인</span></router-link>
    <router-link to="/about"><span>about</span></router-link>
    <router-link to="/login"><span>로그인</span></router-link>
  </nav>
</template>

<script>
export default {
    name : "Navigation"
}
</script>

<style>

</style>
