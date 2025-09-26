<template>
  <main class="min-h-screen flex items-center justify-center bg-background p-4">
    <div v-if="bookingId" class="text-center max-w-md p-6 bg-white rounded-2xl shadow-lg">
      <h1 class="text-2xl font-bold text-text mb-4">歡迎體驗放鬆之旅</h1>
      <p class="text-text mb-6">
        請先透過 Cal.com 預約您的按摩、放鬆或助眠服務，完成後將自動跳轉至此查看詳情。
      </p>
      <a
        class="inline-block px-6 py-3 bg-primary text-text rounded-lg hover:bg-green-300 transition"
      >
        立即預約
      </a>
    </div>

    <div v-else class="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 space-y-6">
      <!-- 標題 -->

      <div class="text-center">
        <h1 class="text-2xl font-bold text-text">{{ title }} 預約確認</h1>
        <p class="text-sm text-gray-500 mt-1">已寄預約通知至 {{ email }}</p>
      </div>

      <!-- 注意事項 -->
      <div class="space-y-3">
        <h2 class="text-lg font-semibold text-primary">到場須知</h2>
        <ul class="space-y-2 text-sm text-text">
          <li class="flex items-start">
            <span class="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
            請於預約時間前 15 分鐘抵達，與櫃台領取房間鑰匙（電話: 02-1234-5678）。
          </li>
          <li class="flex items-start">
            <span class="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
            請穿著舒適衣物，場內提供免費精油與助眠音樂。
          </li>
          <li class="flex items-start">
            <span class="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
            場內禁止飲食，請保持環境整潔。
          </li>
          <li class="flex items-start">
            <span class="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
            服務結束後，請將鑰匙歸還櫃台。
          </li>
        </ul>
      </div>

      <!-- 支付資訊 -->
      <div class="space-y-3">
        <h2 class="text-lg font-semibold text-primary">費用支付</h2>
        <p class="text-sm text-text">
          請先完成服務費用（NT$ 1,000）支付，使用 Line Pay 掃描 QR code 即可。
        </p>
        <div class="flex justify-center">
          <img alt="Line Pay QR Code" class="w-32 h-32 border rounded-lg shadow-md" />
        </div>
        <p class="text-xs text-gray-500 text-center">
          掃描上方 QR code 支付 NT$ 1,000（備註: 預約名稱 {{ attendeeName }}）
        </p>
      </div>

      <!-- 底部連結 -->
      <div class="text-center pt-4 border-t">
        <p class="text-sm font-medium text-indigo-400 mt-1">
          離開此頁面後將無法顯示，請截圖保存以利提醒
        </p>
        <a
          :href="`mailto:your-email@example.com?subject=預約確認 - ${bookingId}`"
          class="text-primary hover:underline text-sm"
        >
          如有問題，請聯繫我們
        </a>
      </div>
    </div>
  </main>
</template>
<style></style>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import moment from 'moment'

const route = useRoute()
const defaultStr = '未顯示'
const bookingId = ref(null)
const title = ref('寧靜碰觸')
const startTime = ref(defaultStr)
const endTime = ref(defaultStr)
const email = ref(defaultStr)
const hostName = ref(defaultStr)
const attendeeName = ref(defaultStr)

onMounted(() => {
  bookingId.value = route.query.uid || null
  title.value = route.query.title || defaultStr
  startTime.value = moment(route.query.startTime).format('YYYY-MM-DD HH:mm') || defaultStr
  endTime.value = moment(route.query.endTime).format('YYYY-MM-DD HH:mm') || defaultStr
  email.value = route.query.email || defaultStr
  hostName.value = route.query.hostName || defaultStr
  attendeeName.value = route.query.attendeeName || defaultStr
  console.log(route.query)
})
</script>
