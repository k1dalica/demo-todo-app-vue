<template>
  <div class="home">
    <Create @add="add($event)" />

    <el-button
      v-if="!allChecked"
      icon="el-icon-check"
      type="primary"
      class="mt-20"
      @click="markAllAsDone()">
      Mark all as done
    </el-button>

    <el-card
      v-for="item, index in list"
      :key="index"
      class="panel">
      <ul>
        <li>
          <el-switch
            v-model="item.done"
            class="switch" />

          <div class="text">
            {{ item.text }}
          </div>

          <div class="buttons">
            <router-link :to="{ name: 'EditPage', params: { index } }">
              <el-button
                size="mini"
                icon="el-icon-edit"
                type="primary"
                circle />
            </router-link>

            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              class="button ml-10"
              circle
              @click="remove(index)" />
          </div>
        </li>
      </ul>
    </el-card>

    <el-empty
      v-if="list.length === 0"
      description="There are no tasks added yet." />
  </div>
</template>

<script>
import Create from './Create'

export default {
  components: {
    Create
  },

  computed: {
    list () {
      return this.$store.state.list
    },

    allChecked () {
      return this.list.every(item => item.done)
    }
  },

  methods: {
    remove (index) {
      this.$store.commit('delete', index)
    },

    markAllAsDone () {
      this.$store.commit('markAllAsDone')
    }
  }
}
</script>

<style lang="scss" scoped>
.panel {
  margin-top: 20px;
  ul {
    padding: 0;
    margin: 0;
    li {
      width: 100%;
      display: flex;
      align-items: center;
      .switch {
        width: 60px;
      }
      .text {
        width: 100%;
      }
      .buttons {
        width: 80px;
      }
    }
  }
}
.ml-10 {
  margin-left: 10px;
}
.mt-20 {
  margin-top: 20px;
}
</style>
