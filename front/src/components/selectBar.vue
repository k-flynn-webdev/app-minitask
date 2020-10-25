<template>
  <div class="is-flex select-bar">
    <b-button class="is-size-7-tablet z-index-3"
              :class="{ 'is-primary': isProject }"
              :disabled="!projectBtnRoute"
              :loading="projectLoading"
              @click="loadPage(projectBtnRoute)">
      {{ TYPES.project.text }}
      <tri class="icon tri is-large"
           :class="{ 'fill-primary': isProject }"/>
    </b-button>
    <b-button class="is-size-7-tablet extra-pad z-index-2"
              :class="{ 'is-primary': isPlan }"
              :disabled="!planBtnRoute"
              :loading="planLoading"
              @click="loadPage(planBtnRoute)">
      {{ TYPES.plan.text }}
      <tri class="icon tri is-large"
           :class="{ 'fill-primary': isPlan }"/>
    </b-button>
    <b-button class="is-size-7-tablet extra-pad z-index-1"
              :class="{ 'is-primary': isTask }"
              :disabled="!taskBtnRoute"
              :loading="taskLoading"
              @click="loadPage(taskBtnRoute)">
      {{ TYPES.task.text }}
      <tri class="icon tri is-large"
           :class="{ 'fill-primary': isTask }"/>
    </b-button>
  </div>

</template>

<script>
import { TYPES } from '../constants'
import { get } from 'lodash-es'
import tri from '../assets/icons/ic_right'

export default {
  name: 'selectBar',

  components: {
    tri
  },

  data () {
    return {
      TYPES
    }
  },

  computed: {
    mode () {
      return this.$store.state.mode
    },
    hasQuery () {
      return this.$store.state.query
    },
    opened () {
      return this.$store.state.opened
    },
    current () {
      return this.$store.state[this.mode.store].current
    },
    hasSelected () {
      return !!(this.current && this.current.id > 0)
    },

    isProject () {
      return (this.mode.value === TYPES.project.value)
    },
    isPlan () {
      return (this.mode.value === TYPES.plan.value)
    },
    isTask () {
      return (this.mode.value === TYPES.task.value)
    },

    projectLoading () {
      return this.$store.state[TYPES.project.store].loading
    },
    planLoading () {
      return this.$store.state[TYPES.plan.store].loading
    },
    taskLoading () {
      return this.$store.state[TYPES.task.store].loading
    },

    projectBtnRoute () {
      if (this.isProject) {
        return {
          name: TYPES.project.route.name,
        }
      }

      if (this.isPlan) {
        return {
          name: TYPES.project.route.name
        }
      }

      if (this.isTask) {
        return {
          name: TYPES.project.route.name
        }
      }
    },
    planBtnRoute () {
      if (this.isProject) {
        if (this.hasSelected) {
          return {
            name: TYPES.plan.route.name,
            query: { project: this.current.id }
          }
        }

        return null
      }

      if (this.isPlan) {
        return {
          name: TYPES.plan.route.name,
          query: this.query
        }
      }

      if (this.isTask) {
        return {
          name: TYPES.plan.route.name,
          query: { project: this.opened.project }
        }
      }
    },
    taskBtnRoute () {
      if (this.isProject) {
        return null
      }

      if (this.isPlan) {
        if (this.hasSelected) {
          return {
            name: TYPES.task.route.name,
            query: { plan: this.current.id }
          }
        }

        return null
      }

      if (this.isTask) {
        return {
          name: TYPES.task.route.name,
          query: this.query
        }
      }
    },
  },

  methods: {
    loadPage (page) {
      this.$router.push(page)
    }
  }
}
</script>