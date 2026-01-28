<template>
  <div class="page-container">
    <div class="page-header">
      <h1>子菜单 1-2</h1>
    </div>
    <div class="page-content">
      <h2>菜单一 - 子菜单 1-2</h2>
      <p>这是菜单一下的第二个子菜单页面。</p>
      <p>演示 Nuxt 路由功能。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '子菜单 1-2'
})
</script>

<style scoped>
.page-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.page-header {
  background-color: white;
  padding: 20px 30px;
  border-bottom: 1px solid #e4e7ed;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.page-header h1 {
  margin: 0;
  font-size: 24px;
  color: #2c3e50;
}

.page-content {
  flex: 1;
  padding: 30px;
  overflow-y: auto;
}

.page-content h2 {
  color: #67c23a;
  margin-bottom: 15px;
}

.page-content p {
  margin: 10px 0;
  font-size: 16px;
  color: #606266;
  line-height: 1.6;
}
</style>
