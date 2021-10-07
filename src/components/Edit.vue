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

  computed: {
    index () {
      return this.$route.params.index
    },

    item () {
      return this.$store.getters.find(this.index)
    }
  },

  created () {
    if (this.item) {
      this.text = this.item.text
    }
  },

  methods: {
    save () {
      this.text = this.text ? this.text.trim() : null
      if (!this.text) return

      this.$store.commit('update', {
        index: this.index,
        data: {
          ...this.item,
          text: this.text
        }
      })

      this.$router.push({ name: 'Home' })
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
