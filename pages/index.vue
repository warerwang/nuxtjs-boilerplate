<template>
  <div class="page-container">
    <div class="page-header">
      <h1>欢迎页面</h1>
    </div>
    <div class="page-content">
      <p>欢迎使用 Nuxt.js 应用！</p>
      <p>这是一个使用 Nuxt 3 最佳实践构建的项目。</p>
      <ul>
        <li>✅ 使用 layouts 管理布局</li>
        <li>✅ 使用 components 创建可复用组件</li>
        <li>✅ 使用 composables 管理状态和逻辑</li>
        <li>✅ 使用 pages 实现文件路由</li>
        <li>✅ 支持服务器端渲染（SSR）</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '欢迎页面'
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

.page-content p {
  margin: 10px 0;
  font-size: 16px;
  color: #606266;
  line-height: 1.6;
}

.page-content ul {
  margin: 20px 0;
  padding-left: 20px;
}

.page-content li {
  margin: 8px 0;
  font-size: 15px;
  color: #606266;
  line-height: 1.6;
}
</style>
