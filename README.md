## attendance-systems
考勤打卡專案 | 前後端分離

You can see on[https://leo812leo.github.io/attendance_vue3/#/mainpage]
## Getting Started

本專案已經設定 npm script, 因此可以直接透過 npm install 與 npm run 的方式來執行。

### Description
- 登入功能
    - 使用者直接從資料庫初始化(員編 0~4 密碼預設 titaner)
    - 使用者要有修改密碼功能
    - 登入密碼錯誤 5 次上鎖
    - 一般使用者有按鈕可以打卡
    - QR code 打卡功能
    
- admin
    - HR 要是 admin 有不同功能，列出缺勤使用者的帳號
    - admin 可以清除缺勤狀態，改為出勤 (未完成)
    - 有通知功能給 admin 有人帳號上鎖  (未完成)
    - 有通知功能給 admin 今天未打卡的人有誰 (未完成)

- 上下班打卡機制 (考勤管理)
    - 早上上班打卡一次，晚上下班打卡一次，未滿 8 小時為缺勤 
    - 換日時間為上午五點 (GMT+8)
    - QR code 也可以打卡 - 意思是 QR code 會隨著**每個人、每天**變化，可以掃碼直接打卡
    - GPS 驗證打卡 (只能在公司使用) - 如果 GPS 驗證，登入跟 QR code 都必須要在指定的公司地點附近 400 公尺內
    - 出缺勤僅計算工作日(根據台灣行事曆) (未完成)

### Installing

1. 透過 https 取得此專案

```bash
git clone https://github.com/leo812leo/attendance.git
```

2. 安裝 node module

```bash
cd Attendance_System
npm install
```

3. 根據需求修改.example 的內容並更換其檔名

```bash
$ vim .example
(註:存檔離開vim指令為 :wq)
$ mv .example .env
```

4. 載入 Record Seeds

本專案需在 local 建立 MongoDB 並且使用預設 port 3000。

```bash
$ npm run seed
```

5. 透過 npm 在 local 啟動 web server

```bash
$ npm run dev
Express is running on http://localhost:3000
```

6. 透過 Browser 打開 [http://localhost:3000](http://localhost:3000)
