https://github.com/snowman12320/jtown-vite/tree/present

# /////////////////////////////////////////////// UI ep2 //////////////////////////////////////////////

# /////////////////////////////////////////////// FUNC ep2 //////////////////////////////////////////////

x 你的專案應該是沒有用到 cypress、測試相關，建議你移除，否則面試若被看到會被認為你有寫測試，但實際上並沒有。

x 元件引入並使用請採用雙單字，如：main.js 的 46、46 以及 61 行。

x router-link 也可以寫成 RouterLink 統一撰寫方式哦（error-message 也是一樣 ErrorMessage）。

x UserCheckout.vue 的 56 行 Alt 屬性 1506074059 是什麼意思呢？> search alt=

x AJAX 請補上 catch 確保發生錯誤時可以提示使用者，這邊也提供一篇文章給你補充。

x 非必要狀況下，v-for 在跑時，請盡可能避免使用 index，除非他沒有可以作為唯一值的屬性。（未修改） > 搜尋 :key="index"

x img 標籤建議補上/優化 alt 屬性增加使用者體驗唷。（未修改，如：StoryList.vue 67 行）

x button 標籤請補上 type="button" 屬性，詳情可見助教文章。（如：StoryList.vue 74 行）

x 沒有使用的週期請刪除，如：StoryItem.vue components: {},

x import 與 export default 之間可以有個適當換行。

x StoryItem.vue 有一些 // 不知道用途，如果是為了區分分類，可以用換行就好了。

x console.clear(); 為什麼會一直使用哩？目前看 main.js 有使用，StoryItem.vue 也有使用，雖然沒有什麼問題，但有時候這個會導致除錯上的困擾，因為錯誤訊息都被清掉了。

x AJAX 失敗的提示訊息請不要使用 console，普通使用者並不會開啟控制台來看問題。

x LoginView.vue 由於你使用的原生的 Form 表單，請在 submit 事件上補上 .prevent 避免發生預設事件哦。

x 如果沒有要傳入參數，那麼請把 Function Call 移除，如： ProductsItem.vue 470 行。（未修改，還有 Orders.vue 314 行）

x Toast.vue 的 name 屬性建議移除，讓他自己選取就好。

x 套件的使用請小心，看你註解都寫了不少有問題的套件，如果非必要狀況下，就盡量不要使用有問題的套件，而是換個方式去呈現或還原需去。

> 可能是指 vue-multiselect

x main.scss 請直接寫「@import ‘bootstrap/scss/functions’」就可以了，’../../../node_modules‘ 會透過 Vite 分析。

x 請統一頂級標籤(template、script、style) 撰寫順序，在官方文件中有建議 style 都應在最後。

x 當元件不插入其他元素時，可以改成自閉合，例如：<Loading></Loading> → <Loading>（未修改，如：StoryList.vue 83 行，不是只有指 <Loading>，包含了其他元件）

x HTML 與 JavaScript 的縮排空格會建議改成 2 格，若是使用 VSCode 可以在右下角看到目前的檔案所使用的縮排形式是空格還是定位點，在此會建議使用空格而不是定位點，在此可以看到這一篇 ESLint 規範文獻唷~
x SCSS 請以縮排兩格為主 ，可參考這一篇建議規範文獻。> ctrl+s
# ///////////////////////////////////////////////result to do//////////////////////////////////////////////

x "非必要註解可以斟酌刪除"，否則 code 會顯得特別雜亂，若是屬於想要釐清邏輯的，那麼可以斟酌留下來沒關係，只是會建議盡可能撰寫註解時，也要整理一下唷~（註解錯字也要注意一下，例如…折扣馬是很優良品種的馬嗎？)
> 搜尋 <!--  --> //
> 是人人都想要的馬

x 副檔名為 .vue 的檔案會建議首字大寫，可以看到 Vue 官方文獻也都是首字大寫唷。(未修改，小心 Git 有大小寫敏感問題，可見。）
> 已改，但 git 沒有改，要到檔案路徑下，並輸入 git mv -f memberSide.vue  MemberSide.vue  或開啟git大小寫敏感的指令
https://israynotarray.com/git/20221230/27133639/
> 改成 -<directory> 會不能改回去，要在cmd用 ren "-__tests__" "_tests__"
> 強制刪除資料夾或檔案，要在cmd用 rd /s /q "_tests__"

x 這邊有一段我想請你有空描述一下說明運作，就是 multiselectMixin.js 的 66 行的 flow 函式，請試著說明運作以及為什麼要這樣寫。
>
搜尋實例：
1. flow函式，接受一系列的函式 (...fns) 作為參數，這些函式代表一連串的操作步驟。
2. (x) 是 flow 返回的新函式的參數，這個參數 x 代表了你要套用這連串操作的初始值。
3. fns.reduce((v, f) => f(v), x)利用 reduce 函式來遍歷 fns，將每個函式應用在前一個函式的結果上。這裡的 v 代表累積的值x。
4. 最後的結果是經過所有操作步驟後的最終值。這個函式的作用是根據給定的搜尋條件來過濾資料
5. 假設商品資料結構：
const options = [
  { id: 1, name: "Apple", category: "fruit" },
  { id: 2, name: "Banana", category: "fruit" },
  { id: 3, name: "Carrot", category: "vegetable" },
  { id: 4, name: "Broccoli", category: "vegetable" }
];
對這些商品進行篩選，只顯示類別為 "fruit" 的商品，然後將篩選後的商品展平成一個陣列。
const search = "fruit";
const label = "category";
const result = filterAndFlat(options, search, label);
console.log(result);

加總實例：
1. flow 函式接受一個或多個函式作為參數，並回傳一個新的函式。
2. 在filterAndFlat例子中，flow 接受兩個函式作為參數，分別是 filterGroups 和 flattenOptions。
3. filterAndFlat 函式被呼叫時，會執行 flow 函式，並將 options 作為參數傳入。
4. 在 flow 函式內部，會依序執行 filterGroups 和 flattenOptions 兩個函式，並將它們的結果作為下一個函式的輸入。
5. 最後，filterAndFlat 函式會回傳最後一個函式的執行結果。將複雜的處理邏輯拆成多個簡單的函式，並透過 flow 函式來串接它們的執行順序。
6. 舉例來說，假設有兩個函式 double 和 addOne：
const double = (num) => num * 2;
const addOne = (num) => num + 1;
可以使用 flow 來組合這兩個函式：
const doubleThenAddOne = flow(double, addOne);
doubleThenAddOne 是一個新的函式，將一個數字帶入這個函式時，它會先將這個數字乘以二，然後再加一。例如：
console.log(doubleThenAddOne(5));  // 輸出：11





- 一個專案內通常只會引入一個 UI 框架（你目前引入了 Bootstrap + Element UI），引入兩者可能會發生衝突、整體版型不統一等問題，因此建議你擇一使用就好，除非是前後台差異，那就沒關係。> 改前台就好 拿掉 ele ui > 前台產品選單 尺寸彈窗 評論星星 (都可關)/ 後台 配送選單(可關) 側邊選單
- 圖片建議不要太大張（尺寸不超過顯示區域的 2 倍）。

# ///////////////////////////////////////////////question//////////////////////////////////////////////

x 圖片的引入方式可以調整一下，可詳見文章。
https://israynotarray.com/vue/20230330/238425903/
有分靜態引入（直接在 html 引入 src）和 非靜態引入（必須透過 import 引入:src），兩者編譯出來會不太一樣，靜態引入路徑有分別名和相對路徑和 require ＋相對路徑
Q: 助教說要調整引入方式，有看完文章，但不太了解調整的理由 1. 所以我在 src 使用相對路徑或別名引入，都要改 import 引入嗎？，因為圖片都要編譯過，都屬於非靜態資源，所以都要改成 import， 2. 還是說 nbaWeb 資料夾的圖片不用編譯，應該屬於靜態資源，可以直接移到 public 中去用相對路徑引入即可，也不用 import，但文章中沒有提到 vite 中 public 資料夾的圖片引入方式，我猜是跟 cli 一樣"/img/...jpg"
x 關於：當元件不插入其他元素時，可以改成自閉合，例如：<Loading></Loading> → <Loading>
Q：我將<Loading :active="isLoading"></Loading> ，
這邊改自閉合會錯誤，[plugin:vite:vue] Element is missing end tag.

Q:關於判斷登入或登出
登入狀態時，在 dashboard，重新整理會重新讀取 loginStore，而 dashboard 拿到 isLogin = true 狀態是在 computed 時，
但進入的頁面判斷登入或登出，只能放在 created or mounted，因為拿到的 isLogin 是 false，導致跳轉到登入頁，
後來改成監聽 isLogin 監聽變化才判斷登入登出，
但另一個問題就是，在登出後，用網址直接進去 dashboard，會沒有判斷 isLogin，

最終改成，放在 loginStore 去直接呼叫 api 判斷登入狀態( 只在/dashboard 呼叫，其他頁面使用另一支函式 )，然後判斷是否轉向，請問有需調整的地方嗎?

Q：關於上述 ，使用 router beforeEnter
我 vue router 官網，有看到 router 的 beforeEach 和 beforeEnter 函式，應該可以用 beforeEnter 來針對 /dashboard 判斷是否登入，
我有全域註冊 mixin 判斷，/dashboard 的 beforeEnter 觸發，但沒作用，不知道哪裡錯誤

> beforeEach 就可以 (但要用在元件函式判斷是叫 beforeRouterEnter)

Q：關於購物車結帳驗證
為什麼明明有打勾，卻不能驗證通過，一定要手動打勾才能

/////////////////////////////////////////////////////////////////////////////////////////////

# /////////////////////////////////////////////// b94e591: fixd confilted //////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////
整體
x 優惠券的 Modal 若點擊關閉，則不需要另行再滑動頁面時持續跳出，這樣的互動會稍顯困擾使用者，蓋版的 Modal 除非是很強烈需要警示使用者的操作外，都不建議持續跳出來中斷使用者的瀏覽操作

> 主要是各大網站都會這樣持續蓋版
> x 另外給個小建議：我認為優惠券的相關資訊不需要特別跳出 Modal 來阻擋使用者的瀏覽行為，可讓它出現在 Navbar 的上方等位置來執行相對提示即可
> x Navbar 文字及 Icon 我建議可以拿掉外光暈，會稍微影響文字判讀，且風格呈現上較不適合
> x 建議統一 Button 視覺樣式，像是 Navbar 上的「Log In」、「More Product」、Modal 上的按鈕樣式皆不同，建議統一顏色、圓角程度、是否需要類 3D 效果等
> x 優惠券關閉後的提示元件，建議可以換一種呈現形式，並不建議使用顏色過重的漸層背景效果，會讓整體網頁視覺過於搶眼且較不易閱讀，可參考如 24S 呈現優惠券提示的元件樣式
> x 建議除了 Hero Section 外，可增加每個 Section 上下的留白 Padding，讓整體更具呼吸感
> x 目前網站上兩個主色（紅色、藍色）的色系使用上較重，因此也會顯得顏色搭配上較雜亂一些，建議可以先選定一個主色系，輔佐中性色 (Neutral）來使用即可
> x Footer 必須置底不可跟著卷軸移動出白色區塊
> x 整體圓角參數建議統一，視覺上會更一致
> 首頁
> x Hero Section（Banner 區塊）的所有 Icon 都過大，建議可再大幅縮小
> x Player Story 下方如果都沒有任何資訊（如 Player 介紹卡片等）直接出現 More Lists 的按鈕選項會顯得不符邏輯，建議可出現相關的 Player 介紹
> x 小建議：第二行的副標建議字首大寫，並可使用較細的 Font Weight，顏色可使用灰階，讓資訊閱讀起來較有層次性
> x 「New Product」的商品卡片的呈現形式，我建議別做成瀑布流的形式會比較好哩，瀑布流適用於在滑動頁面時，內容會源源不絕地刷新出來，快速提供使用者不同的靈感與點子，較適用於純影音分享的網站，如 Pinterest 或是小紅書等
> x 建議商品卡片要呈現相對性的資訊，如價格、品項名稱（目前是 Hover 後出現，這種比較屬於就純介紹的形式）
> x 右下角的圖示會看不出來是一個幫助使用者的 Chat Bot，可能會需要幫助的使用者找不到其功能，會建議做成收合視窗形式
> Story 頁
> x 內文建議可以降低視覺層級，如調細 Font Weight、使用灰階色系等
> x 建議若是使用藍色系，請與主色的藍色系統一顏色
> x 小建議：「More」的 Button 可以製作上下及左右分別相等的 Padding，不要用 Padding 來排它在卡片上的位置。如：Padding 我會設定為左右 Fill Container、上下 12px，排列在 Divider （上下 設定 16px 的 Gap）下方，這樣會比較符合排列邏輯，給你參考
> x Pagination 的顏色建議與主色統一即可 > 那是 active 的顏色
> Product 頁
> x Footer 沒有置底，下方會多出白色區塊
> x 商品卡片樣式如上方所述，建議修正一下樣式，直接顯示出標題及價格佳
> x 建議收藏的愛心 Icon 在 Hover 時會變更狀態樣式
> x 點擊收藏及購物車時跳出的 Modal 建議修正一下文字內容，在標題上寫 Please 的意義上不大，建議可以標題揭露使用者需要執行的行為即可，且按鈕需要引導使用者行為，如前往登入或註冊
> x Search Bar 點擊出現下拉選框時，建議「Search」文字保持一樣的相對位置及大小，不建議點擊開時文字在視覺上會位移
> x 這裡的圓角數值建議與網頁所有有圓角的統一
> x 小建議：Price 建議可以使用 Checkbox，使用者可能不一定會是從這兩者中二選一，且正常再販售的電商也不會只有兩種 Price 級距
> XXX || XXX > 價格鎖定在某個區間 （雖然樂屋網有同時選 小於五千和一萬到兩萬
> x 如果篩選出來沒有任何結果，建議可以在中間空白處提醒使用者沒有結果
> v-if !XXX.length

x 「Sort By」的下拉選框樣式建議與上方「Search」的樣式統一哩

> 用微軟看正常，但用蘋果系統看會有內建的下拉選單樣式

行動版
整體
x Chat Bot 建議可以有收合形式，否則可能會容易使使用者誤觸
Product 頁
x 建議篩選功能的 Div 可以讓他左右不要貼在瀏覽器邊緣，可以給予左右一些 Gap

# ///////////////////////////////////////////////solve////////////////////////////////////////////// 

x 部分檔案有 ESLint，請確定你的 VSCode 是否有安裝 ESLint 靜態分析套件，可詳見助教文章。
https://israynotarray.com/vscode/20191212/2147775133/#ESLint
ctrl + s 整理排版
x vite.config.js 的 base 會建議調整成助教文章這樣較好哩。
// https://israynotarray.com/nodejs/20230214/796256725/
/_ global process _/
// https://vitejs.dev/config/
export default defineConfig({
plugins: [vue()],
// base: '/jtown-vite/', //*https://courses.hexschool.com/courses/vue-20211/lectures/43730457
base: process.env.NODE_ENV === 'production' ? '/jtown-vite/' : '/',
resolve: {
alias: {
'@': fileURLToPath(new URL('./src', import.meta.url))
}
}
})
x 可多加美化 index.html 中的 meta，另外請多加注意 lang 要調整至相關語系，例如調整成 「zh-Hant-TW」，若是英語系網站則可以保留預設 「en」。
x 請移除你放在 index.html Bootstrap CSS CDN，因為你目前已經多次引入了，有可能發生一些不可預期的錯誤。
x 元件命名上請盡可能避免與原生 HTML 類似，避免發生一些不可預期的問題。
(header navbar ...)
x 副檔名為 .vue 的檔案會建議首字大寫，可以看到 Vue 官方文獻也都是首字大寫唷。
x router 資料夾內的 index.js 可以增加 { path: '*', redirect: '/' }，避免使用者輸入不存在的 router。

x 理論上來說，你使用 SCSS 的話，專案中是不會有 .css 的。

> css 改成 scss 寫法 檔案也是

x all.scss 跟 main.scss 應該都是相同的東西。

x assets/nbaWeb/參考，參考的東西請不要放在專案內，會凸顯作品的不專業度，因為這不屬於專案（src）的一部分。

x ckeditor5-build-classic 如果要使用的話，請使用 npm，所以請把 public 的移除。

> 有使用 npm 但是 public 中，是透過官網去勾選自定義的功能，並生成的資料夾檔案，不像 npm 的會產生出內建的功能，所以會等到編譯產生 dist 才覆蓋原本的 > 刪掉，會用自定義功能就好

x 許多多餘的換行符號都可以記得清除，整理一下整體程式碼，例如 App.vue 的第七行可以刪除以及 class="" 若沒有使用也可以刪除哩。
class=""/
沒有使用的程式碼請記得刪除，如：StoryView.vue 12 行。

x div 標籤並沒有預設行為，請移除 .prevent。

x img 標籤建議補上/優化 alt 屬性增加使用者體驗唷。alt=""

X 非必要狀況下，v-for 在跑時，請盡可能避免使用 index，除非他沒有可以作為唯一值的屬性。

x 要渲染在畫面的元件，建議與元件名稱相同，例如：<HelloWorld><HelloWorld/> 而不是 <hello-world><hello-world/> 雖然兩者皆可以運行，但是可以在 VSCode 看到 的寫法會高亮顯示（這是一個元件概念）對於自己快速找元件在哪裡時是非常方便的唷 :D

> search ><

x 使用 pinia 之後，就可以不用再使用 emitter 了。

x 頂級標籤(template、script、style) 之間請有個換行。

x important 在使用時要多加注意權重問題哩。

x 如果沒有要傳入參數，那麼請把 Function Call 移除，如： ProductsItem.vue 470 行。

x 建議可以試著建立 frontend 及 backend 兩種資料夾區分前後台，區分的好處在於方便自己將來的維護。

x 建議可以建立一個 scss 資料夾區分相關檔案，例如：all.scss、helpers 等，因此也可以建立一個 img 資料夾專門放相關圖片哩。

x check isLogin 全放在 store ，dashboard 只觸發該函式

x $enable-reduced-motion: false !default;// https://bootstrap5.hexschool.com/docs/5.1/customize/options/

x 非必要註解可以斟酌刪除，否則 code 會顯得特別雜亂，若是屬於想要釐清邏輯的，那麼可以斟酌留下來沒關係，只是會建議盡可能撰寫註解時，也要整理一下唷~ > 我把這個專案當做工具庫，所以我會寫一些當我需要使用類似功能時能夠快速理解，我會盡量精簡並整理的！！ > 放進 /note 中
x 測試相關的檔案請移除，若沒有使用卻又有檔案在內會顯的很奇怪，面試時被問到會很尷尬。> vitest 等等 .gitignore
x 登入錯誤的提示還是有陰影

首頁
x 建議 Carousel Control Button 可以再縮小一些，目前 150px 的大小會有點過大

x 卡片內文建議可以降低視覺層級，如調細 Font Weight、使用灰階色系等

Product 頁
x 目前卡片上的標題排列邏輯較不順暢，建議可以讓所有文字皆齊左顯示試試即可。目前小字靠左，主標及價格置中會讓整體較紊亂一些
x 小字文字過小，網頁文字皆建議至少 14-16px 以上

x 後面不需要出現 Press enter 文字，裡面文字會無法全部顯示

x Filter 的設定邏輯目前有點奇怪，目前看來品類與價格有時是互相連動的，但是與 Dropdwn 目前沒有互相連動。等於我在操作時，如果先選擇了品類及價格，另外選擇 Dropdown 的內容後，其他 Filter 皆會失效，反之亦然。建議 Filter 的內容都需要互相連動，才能幫助使用者快速找出他所需要的產品

x Relevance 的 Padding 建議切齊 Search 的 padding

行動版 - Product 頁
x 品類的文字排列方式目前有點亂，建議可以條列排列
x Price 的目前排列也可以讓他條列排列，目前換行看起來會顯得擁擠

x 詢問一下，目前首頁上的其他 Section 都先移除了嗎？目前首頁上的卡片其實跟 Story 頁的卡片是一樣的，這樣的話其實首頁的內容豐富性會偏低一些
