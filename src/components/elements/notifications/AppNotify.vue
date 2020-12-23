<template>
  <notifications group="notify" class="app-notify" animation-type="velocity" :animation="animation">
    <template v-slot:body="props">
      <div class="app-notify__body" :class="props.item.type">
        <div class="app-notify__element-wrapper d-flex justify-content-between align-items-center">
          <a class="title">
            {{ props.item.title }}
          </a>
          <a class="close" @click="props.close">
            <i class="close-icon fa fa-times"></i>
          </a>
        </div>
        <div class="content" v-html="props.item.text"></div>
      </div>
    </template>
  </notifications>
</template>

<script>
export default {
  data: () => ({
    animation: null
  }),

  mounted() {
    this.animation = {
      enter(element) {
        let height = element.clientHeight;

        return {
          height: [height, 0],
          opacity: [0.5 + 0.5, 0]
        };
      },
      leave: {
        height: 0,
        opacity: 0
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.app-notify::v-deep .app-notify__body {
  margin-top: 20px;
  margin-right: 20px;
  border-radius: 8px;
  padding: 20px;

  &.error {
    background: rgba(229, 77, 66, 1);
  }

  &.warning {
    background: rgba(255, 193, 7, 1);
  }

  &.success {
    background: rgba(32, 201, 151, 1);
  }

  .app-notify__element-wrapper {
    margin-top: -10px;
  }

  .title {
    color: white;
    font-weight: 500;
    font-size: 16px;
  }

  .content {
    padding: 10px 0 0 0;
    color: white;
    font-weight: 100;
  }

  .close {
    margin-right: -10px;
    cursor: pointer;
    color: white;
    opacity: 1;
    padding: 7px 9.5px;
    border-radius: 50%;
    background-color: white;
    line-height: 16px;
  }

  .close-icon {
    color: black;
    font-size: 16px;
  }
}
</style>
