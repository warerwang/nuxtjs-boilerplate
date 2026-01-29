<template>
  <div class="page-container">
    <div class="page-header">
      <h1>子菜单 1-1 (SSR)</h1>
    </div>
    <div class="page-content">
      <h2>菜单一 - 子菜单 1-1</h2>
      <p>这是菜单一下的第一个子菜单页面。</p>
      <p>当前路由: {{ $route.path }}</p>
      
      <div class="info-card">
        <h3>SSR 渲染信息</h3>
        <ul>
          <li>渲染时间: {{ pageData?.serverTime }}</li>
          <li>渲染环境: {{ pageData?.environment }}</li>
          <li>页面 ID: {{ pageData?.pageId }}</li>
        </ul>
        <p class="tip">💡 此数据在服务器端生成，查看网页源代码可以看到完整的 HTML 内容</p>
      </div>

      <div class="info-card">
        <h3>页面特性</h3>
        <ul>
          <li>✅ 服务器端渲染（SSR）支持</li>
          <li>✅ 自动代码分割</li>
          <li>✅ 路由自动生成</li>
          <li>✅ SEO 友好</li>
          <li>✅ 首屏加载优化</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 定义数据类型
interface PageData {
  serverTime: string
  environment: string
  pageId: string
}

// 使用 useAsyncData 在服务器端获取数据
const { data: pageData } = await useAsyncData<PageData>(
  'menu1-item1', 
  async (): Promise<PageData> => {
    return {
      serverTime: new Date().toLocaleString('zh-CN'),
      environment: import.meta.server ? '服务器端' : '客户端',
      pageId: Math.random().toString(36).substring(7)
    }
  }
)

// SEO 优化
useHead({
  title: '子菜单 1-1 - SSR 渲染示例',
  meta: [
    { name: 'description', content: '这是一个使用 Nuxt 3 服务器端渲染的页面示例' }
  ]
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

.tip {
  margin-top: 15px;
  padding: 10px;
  background-color: #f0f9ff;
  border-left: 3px solid #409eff;
  color: #409eff;
  font-size: 14px;
  border-radius: 4px;
}
</style>
