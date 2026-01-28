<template>
  <div class="layout-container">
    <!-- 左侧菜单栏 -->
    <Sidebar />
    
    <!-- 右侧内容区域 -->
    <main class="content">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #f5f7fa;
}
</style>
