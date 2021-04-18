<template>
  <q-layout view="hHh lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Todo-List
        </q-toolbar-title>
        <q-btn
          flat
          v-if="!loggedIn"
          to="/auth"
          icon-right="account_circle"
          label="Login"
          class="absolute-right"
        />
        <q-btn
          flat
          @click="logoutUser"
          v-if="loggedIn"
          icon-right="account_circle"
          label="Logout"
          class="absolute-right"
        />
      </q-toolbar>
    </q-header>
    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          exact
          :icon="nav.icon"
          :label="nav.label"/>

      </q-tabs>
    </q-footer>
    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      show-if-above
      :width="250"
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>

        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          class="text-grey-4"
          exact
          clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon"/>
          </q-item-section>
          <q-item-section>
            <q-item-label> {{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: 'MainLayout',
  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Todo',
          to: '/',
          icon: 'list',
        },
        {
          label: 'settings',
          to: '/settings',
          icon: 'settings',
        },
        {
          label: 'About',
          to: '/About',
          icon: 'info',

        }
      ]
    }
  },
  computed: {
    ...mapState('auth', ['loggedIn'])
  },
  methods:{
    ...mapActions('auth',['logoutUser'])
  }
}
</script>
<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}

.q-drawer .q-router-link--exact-active {
  color: white !important;
}
</style>
