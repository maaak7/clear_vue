<template>
  <div role="group" class="form-group" :class="{ error: withError && !value, 'with-groups': groupValues }">
    <div v-if="withLabel" class="form-group__label-wrapper" :class="{ required }">
      <label class="form-group__label">{{ label }}</label>
    </div>
    <Multiselect
      ref="multiselect"
      class="app-multiselect"
      :value="value"
      :options="options"
      :multiple="multiple"
      :label="itemLabel"
      :group-label="groupLabel"
      :group-values="groupValues"
      :group-select="groupSelect"
      track-by="id"
      selectLabel=""
      deselectLabel=""
      selectedLabel=""
      deselect-label=""
      :hideSelected="false"
      :disabled="disabled"
      :placeholder="placeholder"
      :close-on-select="!multiple"
      :allow-empty="allowEmpty"
      :loading="isLoading"
      @select="selectValue"
      @remove="removeValue"
    >
      <span slot="noResult">{{ noOptionsText }}</span>
      <template slot="clear">
        <div
          v-if="withClearBtn && !disabled && value"
          class="multiselect__clear"
          @mousedown.prevent.stop="removeValue"
        ></div>
      </template>
      <template #noOptions>
        <span>{{ noOptionsText }}</span>
      </template>
    </Multiselect>
    <p v-if="withError && !value" class="error-message">
      {{ errorMessage }}
    </p>
    <span v-if="helpMsg" class="form-text text-muted">{{ helpMsg }}</span>
  </div>
</template>

<script>
import i18n from "@/core/plugins/vue-i18n";
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect
  },

  props: {
    value: {
      default: () => null
    },

    options: {
      type: Array,
      default: () => []
    },

    label: {
      type: String,
      default: ""
    },

    itemLabel: {
      type: String,
      default: "label"
    },

    groupLabel: {
      type: String,
      default: "label"
    },

    placeholder: {
      type: String,
      default: ""
    },

    required: {
      type: Boolean,
      default: false
    },

    withLabel: {
      type: Boolean,
      default: true
    },

    withClearBtn: {
      type: Boolean,
      default: false
    },

    withError: {
      type: Boolean,
      default: false
    },

    errorMessage: {
      type: String,
      default: i18n.t("error.field_is_required")
    },

    disabled: {
      type: Boolean,
      default: false
    },

    multiple: {
      type: Boolean,
      default: false
    },

    noOptionsText: {
      type: String,
      default: i18n.t("notify.list_is_empty")
    },

    allowEmpty: {
      type: Boolean,
      default: true
    },

    groupSelect: {
      type: Boolean,
      default: false
    },

    groupValues: {
      type: String,
      default: ""
    },

    helpMsg: {
      type: String,
      default: ""
    },
  },

  data: () => ({
    isLoading: false,
  }),

  methods: {
    selectValue(newItem) {
      this.$emit("select", newItem);
    },

    removeValue(itemToRemove) {
      this.$emit("remove", itemToRemove);
    },
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
.form-group {
  position: relative;

  &.error {
    .app-multiselect::v-deep {
      .multiselect__tags {
        border-color: #f64e60;
      }
    }
  }

  &.with-groups {
    .app-multiselect::v-deep {
      .multiselect__option {
        padding: 5px 12px 5px 40px;
      }
    }
  }
}

.form-group__link-wrapper {
  position: absolute;
  z-index: 5;
  padding: 0 5px;
  top: -10px;
  left: 9px;
  background: white;
  font-size: 10px;
}

.form-group__label-wrapper.required {
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

.error-message {
  position: absolute;
  bottom: -32px;
  left: 0;
  font-size: 0.9rem;
  color: #f64e60;
}

.app-multiselect::v-deep {
  &.multiselect {
    min-height: 38px;
    border-radius: 0.42rem;
  }

  .multiselect__clear {
    position: absolute;
    right: 41px;
    height: 40px;
    width: 40px;
    display: block;
    cursor: pointer;
    z-index: 2;
  }

  .multiselect__clear:before {
    transform: rotate(45deg);
  }

  .multiselect__clear:after {
    transform: rotate(-45deg);
  }

  .multiselect__clear:after,
  .multiselect__clear:before {
    content: "";
    display: block;
    position: absolute;
    width: 3px;
    height: 16px;
    background: #aaa;
    top: 12px;
    right: 4px;
  }

  &.multiselect--active {
    z-index: unset;

    .multiselect__tags {
      border-color: #9cb8ff;
    }
  }

  .multiselect__tags {
    padding: 6px 40px 0 8px;
    min-height: 38px;
    border-radius: 0.42rem;
  }

  .multiselect__option {
    padding: 5px 12px 5px 13px;
    min-height: 24px;
    line-height: 14px;
    font-size: 1rem;

    color: black;
    background-color: white;

    &:hover {
      color: black;
      background-color: #f2f3f8;
    }
  }

  .multiselect__option--group {
    padding: 7px 12px 7px 13px !important;
  }

  // Use it to red highlight selected option.
  .multiselect__option--selected.multiselect__option--highlight {
    &:hover {
      /*background-color: rgba(246, 78, 96, 0.1);*/
    }
  }

  .multiselect__single {
    margin-top: 2px;
    margin-bottom: 0;
    font-size: 1rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .multiselect__tag {
    margin-top: 2px;
    margin-bottom: 0;
    background-color: #efefef;
    color: black;
    font-size: 1rem;
  }

  .multiselect__tag-icon {
    &:after {
      color: black;
    }
    &:focus,
    &:hover {
      color: white;
      background-color: #f64e60;
      &:after {
        color: white;
      }
    }
  }

  .multiselect__placeholder {
    margin-bottom: 3px;
    padding-left: 5px;
    color: black;
    opacity: 0.4;
    font-size: 1rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }

  .multiselect__input {
    padding-top: 2px;
    padding-left: 5px;
    color: black;
    opacity: 0.5;
    font-size: 1rem;
  }

  .custom-option__title {
    width: 480px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .custom-options__status-bar,
  .custom-options__status-bar--active {
    position: relative;
    width: 100%;
    height: 8px;
    border-radius: 6px;
    background: #e2e2e2;
  }

  .custom-options__status-bar--active {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
