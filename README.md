# React Data Vision Lab
本專案用於嘗試各種資料視覺化的第三方套件。此專案根據各套件實作幾個基本圖表，以比較各自優缺點並給予選擇上的建議，目前包含以下套件:
1. Ant Design Charts
2. Chart.js
3. D3.js
4. ECharts
5. Recharts

除了 Recharts 專門開發給 React，其他都是 Vanilla JS 就有的。會選 React 只是單純筆者較常用 React，也用過不少基於 React 的圖表套件。


## 選擇方案評估
此處先說明筆者對各套件在不同考量點時的建議程度，後續會依照各自套件的特性進行詳細介紹並說明其適合時機。

這邊先說整體建議的結論：
- 混用至少兩種套件，根據不同考量來建構圖表
    - 基本圖表、資料量不大: Chart.js、Ant Design Charts、Recharts
    - 複雜圖表、資料量極大: ECharts、D3
    - 極特殊的需求(文字雲等): D3
- 只想用一種套件，簡單複雜圖表都可能有，還需要一點客製化: ECharts、Ant Design Charts

### 圖表簡單
僅建構 **簡單的基本圖表**，例如: 折線圖、柱狀圖、圓餅圖等，建議程度: `Chart.js > Ant Design Charts = Recharts > ECharts >>> D3.js`

### 前期交付
需要在前期快速建構 **略為複雜的圖表**，例如: 地圖、雷達圖、熱力圖等，建議程度: `Chart.js > Ant Design Charts = Recharts > ECharts >>> D3.js`

### 客製化
需要大量 **客製化的圖表**，包含客製化的互動，例如: hover、click 的效果等，建議程度需要 **考慮時間成本**:
- 非常充足的時間: `D3.js >> ECharts > Ant Design Charts = Chart.js >>> Recharts`
- 普通足夠的時間: `ECharts > Ant Design Charts = Chart.js >>> Recharts` (不考慮 D3.js)
- 時間緊迫: `Ant Design Charts > Chart.js >>> Recharts` (不考慮 D3.js、ECharts)

### 社群支援
社群支援程度，包含文件、範例、問題解答、版本穩定度等，建議程度: `D3.js > Chart.js > ECharts > Recharts > Ant Design Charts`

### 效能評估
雖然不常見，有些圖需要呈現數萬、數十萬，甚至上百萬的資料點或其他資料資訊，針對此類圖表的效能，建議程度: `D3.js = ECharts > Ant Design Charts > Chart.js = Recharts`
- D3 和 ECharts 可以處理百萬量級，D3 可能更好，但依賴於開發人員優化
- Ant Design Charts 處理極限大概是十萬級別
- Chart.js 和 Recharts 可以處理幾千到幾萬，但 Recharts 沒特別針對效能進行優化，Chart.js 可能略好一些


## 各套件簡介
### Ant Design Charts
Ant Design Charts 是 Ant Design 團隊開發的資料視覺化套件，基於 G2Plot 進行二次封裝 (for React)，提供了一系列的圖表類型。此外，其底層 G2, S2 等都是 Vanilla JS，僅 Ant Design Charts 套件專門給 React。

#### 優勢
- 支援複雜圖表，而且是開箱即用
- 學習成本較低
- 用 React 的話效能也不會太差，因為有特別針對 React 進行優化
- 和其 UI Lib: `Ant Design` 整合方便，風格相似
- 對於中資料量 (萬、十萬級別)，效能也不差
- 文件相對容易閱讀，也較詳細，還有立即性的 Demo 可以觀看

#### 劣勢
- 前期上手容易，但更多細緻調整需要花時間學習 <br> (*筆者經驗: LLM 對於其細緻調整也相當不準，不確定是真的複雜還是單純套件較新*)
- 相對較新，所以社群支持較低 <br> (*筆者經驗: 相對較少，但並非沒有資源，目前建構的圖表還沒遇到無法解決的問題*)
- 整個 G2 滿大包的，如果只是要用基本圖表，就有點太超過了

#### 文件
- [Ant Design Charts](https://ant-design-charts.antgroup.com/)
- [AntV](https://antv.antgroup.com/)


### Chart.js
Chart.js 是一個簡單的資料視覺化套件，提供了基本的圖表類型。React 可透過封裝過的 react-chartjs-2 套建快速運用

#### 優勢
- 提供常見的基本圖表，配置也較為單純
- 學習成本極低 (比 Ant Design Charts 更低)
- 老牌的套件(10 年)，社群支援、文件等都很豐富
- 相當輕量，對於大量基本圖表顯示和運用，用這個套件就足夠了

#### 劣勢
- 可負荷的資料量不大，大約落在千 ~ 萬，(*筆者經驗: 對於大部分時候都相當足夠，基本圖表還沒碰過需要那麼大量的資料顯示，如果不是基本圖表也不會選這個套件了*)
- 有一定的客製化程度，但不多

#### 文件
- [Chart.js](https://www.chartjs.org/)
- [react-chartjs-2](https://react-chartjs-2.js.org/)


### D3.js
D3.js 提供了大量的 API 供使用者進行客製化的圖表。

#### 優勢
- 最高度客製化，因為是直接操作 DOM 了，要什麼就自己寫
- 老牌的套件(10 年)，社群支援、文件等都很豐富
- 功能廣泛，開發團隊相當積極擴展，不只是圖表還包含各種圖像顯示，像是文字雲等
- 筆者認為這套件更適合用在特殊需求，基本圖表 or 複雜圖表可以交給封裝過的套件 <br> (*筆者經驗: 像是文字雲，支援套件不多，而且又滿需要訂製的*)

#### 劣勢
- 學習成本極高，什麼都要自己做，尤其是只需要基本圖表，還用 D3 寫就太過頭了 <br> (*筆者經驗: 這專案我只是寫個簡單的 Bar, Pie 就花了大量時間...*)
- 除了學習成本，更令人擔心的是: 新手馬上拿來用，沒有經驗去實踐最佳方案，後期維護會是一個巨大成本
- DOM 操作和 React 的 Virtual DOM 操作概念衝突
- 優化成本高，D3 效能理論上最好，但這依賴於開發人員針對性地去優化，實務上很少有這麼多時間可以去優化，尤其 D3 的程式碼又相當複雜

#### 文件
- [D3](https://d3js.org/)


### ECharts
ECharts 提供大量的圖表類型，並且支援高度客製化的功能。React 可透過 echarts-for-react 來運用封裝後的元素。

#### 優勢
- 高度客製化
- 支援的圖表類型豐富
- 效能相當優秀，可以處理十萬至百萬級別的資料量
- 內含 i18n
- Apache 開發的，我覺得品質、性能都相當有保證

#### 劣勢
- 學習成本高，因為配置項較多 <br> (*筆者經驗: 但可以配合 LLM 輔助，所以其實這項劣勢還好*)
- 承上，也因為配置項多，做一些基本圖就會有點煩躁，但 LLM 也可以輔助，所以好一點
- 承上上，也跟 D3 有類似擔憂，如果新手前期直接拿來用，後期維護成本也相當可觀
- 同 Ant Design Charts，打包後也相當肥，如果只是需要基本圖表，建議用 Chart.js 更輕量
- API 文件不太好閱讀，必須很完整的知道其概念和整體架構才可能比較容易找到自己要的

#### 文件
- [ECharts](https://echarts.apache.org/)
- [echarts-for-react](https://github.com/hustcc/echarts-for-react)

### Recharts
Recharts 是基於 React 的資料視覺化套件，提供基本的圖表類型。

#### 優勢
- 簡單易上手，開箱即用
- 專門開發給 React 的，與 React 算是緊密結合，操作也是使用 Virtual DOM 而不是如同其他的套件用 options 來配置
- 文件相當直觀 (也可能是他圖不多)

#### 劣勢
- 支援圖表不多、性能不佳、客製化程度低 (跟 Chart.js 差不多)
- 專門 for React
- 社群資源少

#### 文件
- [Recharts](https://recharts.org/)


## Getting Started
1. Node.js v18.13.0
2. Install dependencies
    ```bash
    yarn install
    ```
3. Start the project
    ```bash
    yarn dev
    ```
4. Open the browser and go to `http://127.0.0.1:3000`


## Reference
- 資料來源 - [Sales of a Supermarket](https://www.kaggle.com/datasets/lovishbansal123/sales-of-a-supermarket)
