<template>
  <transition name="loader">
    <div class="app-loader d-flex justify-content-center align-items-center">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style>
.app-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

.loader-enter .loader-container-loader,
.loader-leave-active .loader-container-loader {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.lds-ripple {
  margin-left: -15px;
  position: relative;
  width: 160px;
  height: 160px;
}

.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes lds-ripple {
  0% {
    top: 80px;
    left: 80px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 160px;
    height: 160px;
    opacity: 0;
  }
}
</style>
