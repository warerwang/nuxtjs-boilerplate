<template>
  <div class="page-container">
    <div class="page-header">
      <h1>子菜单 1-1</h1>
    </div>
    <div class="page-content">
      <h2>菜单一 - 子菜单 1-1</h2>
      <p>这是菜单一下的第一个子菜单页面。</p>
      <p>当前路由: {{ $route.path }}</p>
      <div class="info-card">
        <h3>页面特性</h3>
        <ul>
          <li>服务器端渲染（SSR）支持</li>
          <li>自动代码分割</li>
          <li>路由自动生成</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '子菜单 1-1'
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
  color: #409eff;
  margin-bottom: 15px;
}

.page-content p {
  margin: 10px 0;
  font-size: 16px;
  color: #606266;
  line-height: 1.6;
}

.info-card {
  margin-top: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.info-card h3 {
  margin: 0 0 15px 0;
  color: #2c3e50;
  font-size: 18px;
}

.info-card ul {
  margin: 0;
  padding-left: 20px;
}

.info-card li {
  margin: 8px 0;
  color: #606266;
}
</style>
