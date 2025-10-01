<template>
  <main class="flex items-center justify-center bg-background p-4">
    <div v-if="!valid" class="text-center p-6 bg-white rounded-2xl shadow-lg">
      <h1 class="text-2xl font-bold text-text mb-4">歡迎預約 lull.flow</h1>
      <div class="p-8 space-y-8">
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center space-y-2">
            <div
              class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto"
            >
              <svg
                class="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                />
              </svg>
            </div>
            <h3 class="font-semibold">線上預訂</h3>
            <p class="text-xs text-gray-400">無需與人互動，方便完成預訂</p>
          </div>

          <div class="text-center space-y-2">
            <div
              class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto"
            >
              <svg
                class="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                />
              </svg>
            </div>
            <h3 class="font-semibold">便利位置</h3>
            <p class="text-xs text-gray-400">鄰近捷運站，交通便利</p>
          </div>

          <div class="text-center space-y-2">
            <div
              class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto"
            >
              <svg
                class="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <h3 class="font-semibold">彈性時段</h3>
            <p class="text-xs text-gray-400">多種時段選擇</p>
          </div>
        </div>

        <div class="bg-slate-50 rounded-lg p-6 space-y-3">
          <h3 class="font-semibold text-lg">預訂流程</h3>
          <ol class="space-y-2 text-sm text-left">
            <li class="flex gap-2 text-slate-500">
              <span class="font-medium text-text">1.</span>
              點擊「立即預約」按鈕，選擇您需要的時段
            </li>
            <li class="flex gap-2 text-slate-500">
              <span class="font-medium text-text">2.</span>
              完成預訂後，系統會自動導向到場須知頁面
            </li>
            <li class="flex gap-2 text-slate-500">
              <span class="font-medium text-text">3.</span>
              請詳閱到場須知頁面的地點注意事項和付款資訊
            </li>
            <li class="flex gap-2 text-slate-500">
              <span class="font-medium text-text">4.</span>
              完成付款，確認款項後，會再發送 Email-已預定時間，即算完成預約
            </li>
          </ol>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center p-4">
        <a
          href="https://cal.com/lull.flow/silenceoftouch"
          target="_blank"
          class="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-teal-300 transition"
        >
          立即預約
        </a>
      </div>

      <div class="text-center pt-4 border-t border-gray-200">
        <p class="text-primary text-sm mt-1 tracking-wider">如有任何問題，歡迎與我聯繫</p>
      </div>
    </div>

    <div v-else class="bg-white rounded-2xl shadow-lg p-6 space-y-6">
      <!-- 標題 -->

      <div class="text-center">
        <h1 class="text-2xl font-bold text-text">感謝您的預約</h1>
        <p class="text-sm text-gray-500 mt-1">已將預訂資訊寄至 {{ email }}</p>
      </div>

      <p class="border-t border-gray-100"></p>
      <!-- 注意事項 -->
      <div class="space-y-3">
        <div class="flex gap-1 items-center text-primary">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M5 9a7 7 0 1 1 8 6.93V21a1 1 0 1 1-2 0v-5.07A7.001 7.001 0 0 1 5 9Zm5.94-1.06A1.5 1.5 0 0 1 12 7.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.398.158-.78.44-1.06Z"
              clip-rule="evenodd"
            />
          </svg>

          <h2 class="text-lg font-semibold">到場須知</h2>
        </div>
        <div class="space-y-2 rounded-lg border border-gray-200 p-3">
          <div class="flex items-center gap-2">
            <div
              class="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5"
            >
              1
            </div>
            <p class="text-sm">
              地址：<a
                class="underline decoration-dotted"
                href="https://maps.app.goo.gl/eCE2gzgew7iPGwuN7"
                target="_blank"
                >忠孝東路三段54號4樓</a
              >，伯朗咖啡館旁
            </p>
          </div>

          <div class="flex items-center gap-2">
            <div
              class="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5"
            >
              2
            </div>
            <p class="text-sm">
              請向一樓管理員說「四樓瑜伽教室」，拿磁扣刷電梯。出電梯後左轉即可看到教室大門
            </p>
          </div>

          <div class="flex items-center gap-2">
            <div
              class="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5"
            >
              3
            </div>
            <p class="text-sm">請不要按門鈴，避免影響其他房間的課程</p>
          </div>

          <div class="flex items-center gap-2">
            <div
              class="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5"
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
        <div class="flex gap-1 items-center text-primary">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm0 6h16v6H4v-6Z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M5 14a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm5 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z"
              clip-rule="evenodd"
            />
          </svg>

          <h2 class="text-lg font-semibold text-primary">付款資訊</h2>
        </div>
        <div class="rounded-lg border border-orange-300 p-3 bg-orange-50">
          <p class="text-sm/7 font-medium text-orange-900 mb-2">請先完成場地費用支付</p>
          <p class="text-sm/7 text-orange-800">
            場地費用： <span class="font-bold text-lg">500</span>
          </p>
        </div>
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="space-y-3">
            <h3 class="font-semibold">銀行轉帳資訊</h3>
            <div class="space-y-2 text-sm mg:w-100">
              <div class="flex justify-between p-2 rounded bg-gray-100">
                <span class="text-muted-foreground">銀行名稱</span>
                <span class="font-medium">台新銀行(812)|敦南分行(0023)</span>
              </div>
              <div class="flex justify-between p-2 rounded bg-gray-100">
                <span class="text-muted-foreground">帳號</span>
                <span class="font-medium font-mono">28881004182733</span>
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <h3 class="font-semibold">或掃描 QR Code 付款</h3>
            <div class="img-container flex justify-around max-[25rem]:flex-col">
              <div class="items-center space-y-2 justify-items-center mb-3">
                <img
                  src="/bank-qrcode.jpg"
                  alt="bank QR code"
                  class="w-32 h-32 border rounded-lg shadow-md"
                />
                <p class="text-xs text-muted-foreground text-center">使用網路銀行 APP 掃描</p>
              </div>
              <div class="items-center space-y-2 justify-items-center">
                <img
                  src="/ipassMoney.png"
                  alt="bank QR code"
                  class="w-32 h-32 border rounded-lg shadow-md"
                />
                <p class="text-xs text-muted-foreground text-center">使用 iPASS Money 掃描</p>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-lg border border-gray-200 px-4 py-3 text-sm items-start">
          <div class="flex gap-1 items-center">
            <svg aria-hidden="true" width="20" height="20" fill="yellow" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"
              />
            </svg>
            <p class="mb-1">付款提醒：</p>
          </div>
          <ul
            class="font-thin text-xs text-gray-500 list-disc list-inside space-y-1 text-muted-foreground ml-4"
          >
            <li>轉帳請備註預約名稱： {{ attendeeName }}</li>
            <li>完成付款確認後，會再發送 Email-已預定時間，才算完成預約</li>
          </ul>
        </div>
      </div>

      <!-- 底部連結 -->
      <div class="text-center pt-4 border-t border-gray-200">
        <p class="text-sm font-medium text-cyan-600 mt-1 tracking-widest">
          - 請截圖保存到場須知以利提醒 -
        </p>
        <p class="text-primary text-sm mt-1 tracking-wider">
          期待與你見面！如有任何問題，歡迎與我聯繫
        </p>
      </div>
    </div>
  </main>
</template>
<style></style>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import moment from 'moment'
import { initFlowbite } from 'flowbite'

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
  initFlowbite()

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
