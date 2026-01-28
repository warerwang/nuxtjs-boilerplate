<template>
  <aside class="sidebar">
    <div class="logo">
      <h2>系统菜单</h2>
    </div>
    <nav class="menu">
      <div v-for="item in menuItems" :key="item.id" class="menu-item">
        <div class="menu-title" @click="toggleMenu(item.id)">
          <span>{{ item.title }}</span>
          <span class="arrow" :class="{ expanded: item.expanded }">▼</span>
        </div>
        <div v-show="item.expanded" class="submenu">
          <NuxtLink
            v-for="subItem in item.children"
            :key="subItem.id"
            :to="subItem.path"
            class="submenu-item"
            active-class="active"
          >
            {{ subItem.title }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
const { menuItems, toggleMenu } = useMenu()
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
}

.logo {
  padding: 20px;
  background-color: #1a252f;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo h2 {
  margin: 0;
  font-size: 20px;
  color: #3498db;
}

.menu {
  flex: 1;
  overflow-y: auto;
  padding: 10px 0;
}

.menu-item {
  margin-bottom: 5px;
}

.menu-title {
  padding: 12px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;
  font-weight: 500;
}

.menu-title:hover {
  background-color: #34495e;
}

.arrow {
  font-size: 10px;
  transition: transform 0.3s;
  display: inline-block;
}

.arrow.expanded {
  transform: rotate(180deg);
}

.submenu {
  background-color: #1a252f;
}

.submenu-item {
  display: block;
  padding: 10px 20px 10px 40px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 14px;
  text-decoration: none;
  color: #ecf0f1;
}

.submenu-item:hover {
  background-color: #2c3e50;
}

.submenu-item.active {
  background-color: #3498db;
  color: white;
  border-left: 3px solid #2980b9;
}

/* 滚动条样式 */
.menu::-webkit-scrollbar {
  width: 6px;
}

.menu::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}
</style>
