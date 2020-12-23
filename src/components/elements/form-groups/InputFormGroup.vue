<template>
  <div class="form-group">
    <div v-if="withLabel"
         class="form-group__label-wrapper"
         :class="{ required }"
    >
      <label class="form-group__label">{{ label }}</label>
      <i
          v-if="inputType === 'password'"
          class="far ml-3"
          :class="showPass ? 'fa-eye' : 'fa-eye-slash'"
          @click="showPass = !showPass"
      ></i>
    </div>
    <b-form-input
      class="app-input"
      :class="{error: withError && !value}"
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      trim
      :type="showPass ? 'text' : inputType"
      @input="$emit('input', $event)"
    ></b-form-input>
    <p v-if="withError && !value" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import i18n from "@/core/plugins/vue-i18n";

export default {
  props: {
    label: {
      type: String,
      default: ""
    },

    placeholder: {
      type: String,
      default: ""
    },

    value: {
      default: ""
    },

    required: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },

    inputType: {
      type: String,
      default: "text"
    },

    withLabel: {
      type: Boolean,
      default: true
    },

    withError: {
      type: Boolean,
      default: false
    },

    errorMessage: {
      type: String,
      default: i18n.t("error.field_is_required")
    }
  },

  data: () => ({
    showPass: false
  })
};
</script>

<style lang="scss" scoped>
.form-group {
  position: relative;
}

.form-group__label-wrapper {
  &.required {
    position: relative;
    display: inline-block;

    :after {
      content: "*";
      position: absolute;
      color: #f64e60;
      font-weight: bold;
      right: -10px;
    }
  }

  &.password {
    display: flex;
    align-items: center;
  }
}

.flaticon-eye {
  margin-top: -3px;
  cursor: pointer;
  opacity: 0.5;

  &.active {
    opacity: 1;
  }
}

.error-message {
  position: absolute;
  bottom: -32px;
  left: 0;
  font-size: 0.9rem;
  color: #f64e60;
}

.app-input {
  height: 38px;
}

.app-input.error {
  border-color: #f64e60;
}
</style>
