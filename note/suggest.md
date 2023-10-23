

 ///////////////////////////////////////////////result to do//////////////////////////////////////////////

非必要註解可以斟酌刪除，否則 code 會顯得特別雜亂，若是屬於想要釐清邏輯的，那麼可以斟酌留下來沒關係，只是會建議盡可能撰寫註解時，也要整理一下唷~
> 我把這個專案當做工具庫，所以我會寫一些當我需要使用類似功能時能夠快速理解，我會盡量精簡並整理的！！ > 放進 /note中

測試相關的檔案請移除，若沒有使用卻又有檔案在內會顯的很奇怪，面試時被問到會很尷尬。
> vitest等等


一個專案內通常只會引入一個 UI 框架（你目前引入了 Bootstrap + Element UI），引入兩者可能會發生衝突、整體版型不統一等問題，因此建議你擇一使用就好，除非是前後台差異，那就沒關係。
> 改前台就好 拿掉ele ui > 前台產品選單 尺寸彈窗 評論星星  / 後台 配送選單 側邊選單

- 圖片建議不要太大張（尺寸不超過顯示區域的 2 倍）。
 ///////////////////////////////////////////////question//////////////////////////////////////////////
x 圖片的引入方式可以調整一下，可詳見文章。
    https://israynotarray.com/vue/20230330/238425903/
    有分靜態引入（直接在html引入src）和 非靜態引入（必須透過import引入:src），兩者編譯出來會不太一樣，靜態引入路徑有分別名和相對路徑和require＋相對路徑
    Q: 助教說要調整引入方式，有看完文章，但不太了解調整的理由
    1. 所以我在src使用相對路徑或別名引入，都要改import引入嗎？，因為圖片都要編譯過，都屬於非靜態資源，所以都要改成import，
    2. 還是說nbaWeb資料夾的圖片不用編譯，應該屬於靜態資源，可以直接移到public中去用相對路徑引入即可，也不用import，但文章中沒有提到vite中public資料夾的圖片引入方式，我猜是跟cli一樣"/img/...jpg"
x 關於：當元件不插入其他元素時，可以改成自閉合，例如：<Loading></Loading> → <Loading>
    Q：我將<Loading :active="isLoading"></Loading> ，
    這邊改自閉合會錯誤，[plugin:vite:vue] Element is missing end tag.
    
Q:關於判斷登入或登出
登入狀態時，在dashboard，重新整理會重新讀取loginStore，而dashboard拿到isLogin = true狀態是在computed時，
但進入的頁面判斷登入或登出，只能放在created or mounted，因為拿到的isLogin是false，導致跳轉到登入頁，
後來改成監聽isLogin監聽變化才判斷登入登出，
但另一個問題就是，在登出後，用網址直接進去dashboard，會沒有判斷isLogin，

最終改成，放在loginStore 去直接呼叫api判斷登入狀態( 只在/dashboard呼叫，其他頁面使用另一支函式  )，然後判斷是否轉向，請問有需調整的地方嗎?

Q：關於上述 ，使用router beforeEnter
我vue router官網，有看到router的beforeEach和beforeEnter函式，應該可以用beforeEnter來針對 /dashboard判斷是否登入，
我有全域註冊mixin判斷，/dashboard的beforeEnter觸發，但沒作用，不知道哪裡錯誤

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// b94e591: fixd confilted //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
整體
x 優惠券的 Modal 若點擊關閉，則不需要另行再滑動頁面時持續跳出，這樣的互動會稍顯困擾使用者，蓋版的 Modal 除非是很強烈需要警示使用者的操作外，都不建議持續跳出來中斷使用者的瀏覽操作
 > 主要是各大網站都會這樣持續蓋版
x 另外給個小建議：我認為優惠券的相關資訊不需要特別跳出 Modal 來阻擋使用者的瀏覽行為，可讓它出現在 Navbar 的上方等位置來執行相對提示即可
x  Navbar 文字及 Icon 我建議可以拿掉外光暈，會稍微影響文字判讀，且風格呈現上較不適合
x 建議統一 Button 視覺樣式，像是 Navbar 上的「Log In」、「More Product」、Modal 上的按鈕樣式皆不同，建議統一顏色、圓角程度、是否需要類 3D 效果等
x 優惠券關閉後的提示元件，建議可以換一種呈現形式，並不建議使用顏色過重的漸層背景效果，會讓整體網頁視覺過於搶眼且較不易閱讀，可參考如 24S 呈現優惠券提示的元件樣式
x 建議除了 Hero Section 外，可增加每個 Section 上下的留白 Padding，讓整體更具呼吸感
x 目前網站上兩個主色（紅色、藍色）的色系使用上較重，因此也會顯得顏色搭配上較雜亂一些，建議可以先選定一個主色系，輔佐中性色 (Neutral）來使用即可
x Footer 必須置底不可跟著卷軸移動出白色區塊
x 整體圓角參數建議統一，視覺上會更一致
首頁
x Hero Section（Banner 區塊）的所有 Icon 都過大，建議可再大幅縮小
x Player Story 下方如果都沒有任何資訊（如 Player 介紹卡片等）直接出現 More Lists 的按鈕選項會顯得不符邏輯，建議可出現相關的 Player 介紹
x 小建議：第二行的副標建議字首大寫，並可使用較細的 Font Weight，顏色可使用灰階，讓資訊閱讀起來較有層次性
x 「New Product」的商品卡片的呈現形式，我建議別做成瀑布流的形式會比較好哩，瀑布流適用於在滑動頁面時，內容會源源不絕地刷新出來，快速提供使用者不同的靈感與點子，較適用於純影音分享的網站，如 Pinterest 或是小紅書等
x 建議商品卡片要呈現相對性的資訊，如價格、品項名稱（目前是 Hover 後出現，這種比較屬於就純介紹的形式）
x 右下角的圖示會看不出來是一個幫助使用者的 Chat Bot，可能會需要幫助的使用者找不到其功能，會建議做成收合視窗形式
Story 頁
x 內文建議可以降低視覺層級，如調細 Font Weight、使用灰階色系等
x 建議若是使用藍色系，請與主色的藍色系統一顏色
x 小建議：「More」的 Button 可以製作上下及左右分別相等的 Padding，不要用 Padding 來排它在卡片上的位置。如：Padding 我會設定為左右 Fill Container、上下 12px，排列在 Divider （上下 設定 16px 的 Gap）下方，這樣會比較符合排列邏輯，給你參考
x Pagination 的顏色建議與主色統一即可 > 那是active的顏色
Product 頁
x Footer 沒有置底，下方會多出白色區塊
x 商品卡片樣式如上方所述，建議修正一下樣式，直接顯示出標題及價格佳
x 建議收藏的愛心 Icon 在 Hover 時會變更狀態樣式
x 點擊收藏及購物車時跳出的 Modal 建議修正一下文字內容，在標題上寫 Please 的意義上不大，建議可以標題揭露使用者需要執行的行為即可，且按鈕需要引導使用者行為，如前往登入或註冊
x Search Bar 點擊出現下拉選框時，建議「Search」文字保持一樣的相對位置及大小，不建議點擊開時文字在視覺上會位移
x 這裡的圓角數值建議與網頁所有有圓角的統一
x 小建議：Price 建議可以使用 Checkbox，使用者可能不一定會是從這兩者中二選一，且正常再販售的電商也不會只有兩種 Price 級距
    > XXX || XXX > 價格鎖定在某個區間 （雖然樂屋網有同時選 小於五千和一萬到兩萬
x 如果篩選出來沒有任何結果，建議可以在中間空白處提醒使用者沒有結果
    > v-if !XXX.length 
    
x 「Sort By」的下拉選框樣式建議與上方「Search」的樣式統一哩
 > 用微軟看正常，但用蘋果系統看會有內建的下拉選單樣式


行動版
整體
x Chat Bot 建議可以有收合形式，否則可能會容易使使用者誤觸
Product 頁
x 建議篩選功能的 Div 可以讓他左右不要貼在瀏覽器邊緣，可以給予左右一些 Gap

///////////////////////////////////////////////solve//////////////////////////////////////////////
x 部分檔案有 ESLint，請確定你的 VSCode 是否有安裝 ESLint 靜態分析套件，可詳見助教文章。
    https://israynotarray.com/vscode/20191212/2147775133/#ESLint
    ctrl + s 整理排版
x vite.config.js 的 base 會建議調整成助教文章這樣較好哩。
    // https://israynotarray.com/nodejs/20230214/796256725/
    /* global process */
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
> css改成scss寫法 檔案也是

x all.scss 跟 main.scss 應該都是相同的東西。

x assets/nbaWeb/參考，參考的東西請不要放在專案內，會凸顯作品的不專業度，因為這不屬於專案（src）的一部分。

x ckeditor5-build-classic 如果要使用的話，請使用 npm，所以請把 public 的移除。
> 有使用npm 但是public中，是透過官網去勾選自定義的功能，並生成的資料夾檔案，不像npm的會產生出內建的功能，所以會等到編譯產生dist才覆蓋原本的 > 刪掉，會用自定義功能就好 

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

x check isLogin 全放在store ，dashboard只觸發該函式

x $enable-reduced-motion: false !default;// https://bootstrap5.hexschool.com/docs/5.1/customize/options/
