<template>
  <el-card>
    <div class="flex">
      <el-input
        v-model="text"
        placeholder="Enter task name" />

      <el-button
        type="primary"
        class="button"
        @click="save()">
        Save
      </el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      text: null
    }
  },

  methods: {
    save () {
      this.text = this.text ? this.text.trim() : null
      if (!this.text) return

      this.$store.commit('add', {
        done: false,
        text: this.text
      })
      this.text = null
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  .button {
    margin-left: 10px;
  }
}
</style>
