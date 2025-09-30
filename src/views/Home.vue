<template>
  <main class="min-h-screen flex items-center justify-center bg-background p-4">
    <div v-if="!valid" class="text-center max-w-md p-6 bg-white rounded-2xl shadow-lg">
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
        <h1 class="text-2xl font-bold text-text">感謝您的預約</h1>
        <p class="text-sm text-gray-500 mt-1">已將預訂資訊寄至 {{ email }}</p>
      </div>

      <p class="text-center pt-4 border-t border-gray-100"></p>
      <!-- 注意事項 -->
      <div class="space-y-3">
        <h2 class="text-lg font-semibold text-primary">到場須知</h2>
        <div class="space-y-2 rounded-lg border border-gray-200 p-3">
          <div class="flex items-start gap-2 text-sm">
            <div
              class="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5"
            >
              1
            </div>
            地址：<a
              class="text-decoration-none"
              href="https://maps.app.goo.gl/eCE2gzgew7iPGwuN7"
              target="_blank"
              >忠孝東路三段54號4樓</a
            >，伯朗咖啡館旁
          </div>

          <div class="flex items-start gap-2">
            <div
              class="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5"
            >
              2
            </div>
            <p class="text-sm">
              請向一樓管理員說「四樓瑜伽教室」，拿磁扣刷電梯。出電梯後左轉即可看到教室大門
            </p>
          </div>

          <div class="flex items-start gap-2">
            <div
              class="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5"
            >
              3
            </div>
            <p class="text-sm">請不要按門鈴，避免影響其他房間的課程</p>
          </div>

          <div class="flex items-start gap-2">
            <div
              class="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5"
            >
              4
            </div>
            <p class="text-sm">到了ＩＧ私訊 lull.flow，會來協助您開門</p>
          </div>
        </div>
      </div>

      <p class="text-center pt-4 border-t border-gray-100"></p>
      <!-- 支付資訊 -->
      <div class="space-y-3">
        <h2 class="text-lg font-semibold text-primary">付款資訊</h2>
        <div class="rounded-lg border border-orange-300 p-3 bg-orange-50">
          <p class="text-sm/7 font-medium text-orange-900 mb-2">請先完成場地費用支付</p>
          <p class="text-sm/7 text-orange-800">
            場地費用： <span class="font-bold text-lg">500</span>
          </p>
        </div>
        <div class="grid gap-6">
          <div class="space-y-3">
            <h3 class="font-semibold">銀行轉帳資訊</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between p-2 rounded">
                <span class="text-muted-foreground">銀行名稱</span>
                <span class="font-medium">中國信託(822)</span>
              </div>
              <div class="flex justify-between p-2 rounded">
                <span class="text-muted-foreground">帳號</span>
                <span class="font-medium font-mono">462890025765</span>
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <h3 class="font-semibold">掃描 QR Code 付款</h3>
            <div class="flex flex-col items-center space-y-2">
              <img
                src="../../public/bank-qrcode.png"
                alt="bank QR code"
                class="w-32 h-32 border rounded-lg shadow-md"
              />
              <p class="text-xs text-muted-foreground text-center">使用網路銀行 APP 掃描付款</p>
            </div>
            <div class="flex flex-col items-center space-y-2">
              <img
                src="../../public/ipassMoney.png"
                alt="bank QR code"
                class="w-32 h-32 border rounded-lg shadow-md"
              />
              <p class="text-xs text-muted-foreground text-center">使用ipass Money 掃描付款</p>
            </div>
          </div>
        </div>
        <div class="rounded-lg border border-gray-200 px-4 py-3 text-sm items-start">
          <p class="mb-1">付款提醒：</p>

          <ul
            class="font-thin text-xs text-gray-500 list-disc list-inside space-y-1 text-muted-foreground ml-4"
          >
            <li>轉帳請備註預約名稱： {{ attendeeName }}</li>
            <li>完成付款確認後，會再發送 Email-已預定時間，才算完成預約</li>
            <li>如有任何問題，請聯繫客服：service@example.com</li>
          </ul>
        </div>
      </div>

      <!-- 底部連結 -->
      <div class="text-center pt-4 border-t border-gray-200">
        <p class="text-sm font-medium text-indigo-400 mt-1">請截圖保存到場須知以利提醒</p>
        <a
          :href="`mailto:your-email@example.com?subject=預約確認 - ${bookingId}`"
          class="text-primary hover:underline text-sm"
        >
          期待與你見面
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
const valid = ref(false)
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
  startTime.value = moment(route.query.startTime).local().format('YYYY-MM-DD HH:mm') || defaultStr
  endTime.value = moment(route.query.endTime).local().format('YYYY-MM-DD HH:mm') || defaultStr
  email.value = route.query.email || defaultStr
  hostName.value = route.query.hostName || defaultStr
  attendeeName.value = route.query.attendeeName || defaultStr
  console.log(route.query)
  valid.value = validParam(bookingId.value, endTime.value)
  console.log(valid.value)
})

function validParam(uid, endTime) {
  if (uid && endTime) {
    if (uid.length == 22 && moment(endTime).local().isAfter(moment())) {
      return true
    }
  }
  return false
}
</script>
