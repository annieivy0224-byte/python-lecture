<template>
  <div class="root">
    <div class="tab-row">
      <button
        v-for="t in tabs" :key="t.id"
        :class="['tab-btn', { active: current === t.id }]"
        @click="current = t.id"
      >{{ t.label }}</button>
    </div>

    <!-- TAB 1: 存取元素 -->
    <div v-if="current === 'access'">
      <p class="desc">點擊任一格，查看 <code>students[i][j]</code> 的取值方式</p>
      <div class="grid-wrap">
        <div class="grid-section">
          <div class="grid-label">students（巢狀清單）</div>
          <div class="nl-grid">
            <div class="nl-row">
              <div class="row-label"></div>
              <div v-for="col in colLabels" :key="col" class="col-header">{{ col }}</div>
            </div>
            <div v-for="(row, i) in students" :key="i" class="nl-row">
              <div class="row-label">students[{{ i }}]</div>
              <div
                v-for="(val, j) in row" :key="j"
                :class="['cell', { 'inner-active': selI === i && selJ === j }]"
                @click="selectCell(i, j, val)"
              >
                <span class="val">{{ val }}</span>
                <span class="idx">[{{ i }}][{{ j }}]</span>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-section info-col">
          <div class="grid-label">存取說明</div>
          <div class="info-panel">
            <template v-if="selI === -1">
              <span class="muted">👆 點擊任一格</span>
            </template>
            <template v-else>
              <div style="margin-bottom:.5rem">
                <code class="hl">students[{{ selI }}][{{ selJ }}]</code>
                → <strong>{{ selVal }}</strong>
              </div>
              <div class="sub-info">
                第一層 <code>students[{{ selI }}]</code> 取出第 {{ selI }} 筆資料<br>
                第二層 <code>[{{ selJ }}]</code> 取出其中的{{ colNames[selJ] }}<br>
                <span class="hl-g">= '{{ selVal }}'（{{ typeof selVal === 'string' ? '字串' : '整數' }}）</span>
              </div>
            </template>
          </div>
          <div class="code-block" style="margin-top:1rem">
            <div class="code-line" v-for="(line, i) in codeLines" :key="i"
              :style="{ color: selI === i - 1 && i >= 1 && i <= 3 ? 'var(--vp-c-brand-1)' : 'var(--vp-c-text-2)',
                        fontWeight: selI === i - 1 && i >= 1 && i <= 3 ? '500' : '400',
                        paddingLeft: i >= 1 && i <= 3 ? '1.5rem' : '0' }"
            >{{ line }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 2: 雙層迴圈 -->
    <div v-if="current === 'loop'">
      <p class="desc">
        按「下一步」逐格觀察外層（<span class="hl">藍色</span>）與內層（<span class="hl-g">綠色</span>）迴圈的執行順序
      </p>
      <div class="grid-wrap">
        <div class="grid-section">
          <div class="grid-label">執行狀態</div>
          <div class="nl-grid">
            <div v-for="(row, i) in students" :key="i" class="nl-row">
              <div class="row-label">s = s[{{ i }}]</div>
              <div
                v-for="(val, j) in row" :key="j"
                :class="['cell',
                  loopStep > 0 && loopSteps[loopStep-1].i === i && loopSteps[loopStep-1].j === -1 && j === 0 ? 'outer-active' : '',
                  loopStep > 0 && loopSteps[loopStep-1].i === i && loopSteps[loopStep-1].j === j ? 'inner-active' : '',
                  isVisited(i, j) ? 'visited' : ''
                ]"
              >
                <span class="val">{{ val }}</span>
                <span class="idx">[{{ i }}][{{ j }}]</span>
              </div>
            </div>
          </div>
          <div class="out-box">
            輸出：<span v-for="(v, k) in loopOutput" :key="k">
              <span :class="k === loopOutput.length - 1 ? 'hl' : ''">{{ v }}</span>
              <span v-if="k < loopOutput.length - 1" style="margin: 0 4px">　</span>
            </span>
          </div>
        </div>
        <div class="grid-section info-col">
          <div class="grid-label">目前程式碼</div>
          <div class="code-block">
            <div :class="['code-line', { 'code-active': loopStep > 0 && loopSteps[loopStep-1].type === 'outer' }]">for s in students:</div>
            <div :class="['code-line', { 'code-active': loopStep > 0 && loopSteps[loopStep-1].type === 'outer' }]" style="padding-left:1.5rem">  name = s[0]</div>
            <div :class="['code-line', { 'code-active': loopStep > 0 && loopSteps[loopStep-1].type === 'outer' }]" style="padding-left:1.5rem">  scores = s[1:]</div>
            <div :class="['code-line', { 'code-active': loopStep > 0 && loopSteps[loopStep-1].type === 'inner' }]" style="padding-left:1.5rem">  for score in scores:</div>
            <div :class="['code-line', { 'code-active': loopStep > 0 && loopSteps[loopStep-1].type === 'inner' }]" style="padding-left:3rem">    print(score)</div>
          </div>
          <div class="info-panel" style="margin-top:.75rem">
            <span v-if="loopStep === 0" class="muted">按「播放」或「下一步」開始</span>
            <span v-else v-html="loopSteps[loopStep - 1].msg"></span>
          </div>
        </div>
      </div>
      <div class="ctrl">
        <button class="btn primary" @click="togglePlay">{{ playing ? '⏸ 暫停' : '▶ 播放' }}</button>
        <button class="btn" @click="stepForward" :disabled="loopStep >= loopSteps.length">下一步</button>
        <button class="btn" @click="resetLoop">重置</button>
        <span class="step-info">步驟 {{ loopStep }} / {{ loopSteps.length }}</span>
      </div>
      <div class="speed-row">
        速度：
        <input type="range" min="300" max="1500" step="100" v-model="speed">
        <span>{{ (speed / 1000).toFixed(1) }}s</span>
      </div>
    </div>

    <!-- TAB 3: 建立巢狀清單 -->
    <div v-if="current === 'build'">
      <p class="desc">觀察用雙層迴圈建立 3×3 巢狀清單的過程</p>
      <div class="grid-wrap">
        <div class="grid-section">
          <div class="grid-label">建立中的 table</div>
          <div class="nl-grid" style="min-height:140px">
            <template v-if="bTable.length === 0 && bRow.length === 0">
              <div class="muted" style="padding:.5rem 0;font-size:13px">table = []</div>
            </template>
            <template v-else>
              <div v-for="(row, i) in [...bTable, ...(bRow.length ? [bRow] : [])]" :key="i" class="nl-row">
                <div class="row-label" :style="{ color: i === bTable.length && bRow.length > 0 ? 'var(--vp-c-brand-1)' : 'var(--vp-c-text-3)' }">
                  {{ i === bTable.length && bRow.length > 0 ? 'row →' : '' }} [{{ i }}]
                </div>
                <div
                  v-for="(val, j) in row" :key="j"
                  :class="['cell',
                    i === bTable.length && bRow.length > 0 && j === row.length - 1 ? 'inner-active' :
                    i === bTable.length && bRow.length > 0 ? 'outer-active' : ''
                  ]"
                >
                  <span class="val">{{ val }}</span>
                  <span class="idx">[{{ i }}][{{ j }}]</span>
                </div>
              </div>
            </template>
          </div>
          <div class="out-box" style="margin-top:.75rem;word-break:break-all">
            table = [{{ bTable.map(r => '[' + r.join(',') + ']').join(', ') }}]
            <span v-if="bRow.length" class="hl">　row = [{{ bRow.join(',') }}]</span>
          </div>
        </div>
        <div class="grid-section info-col">
          <div class="grid-label">目前程式碼</div>
          <div class="code-block">
            <div :class="['code-line', { 'code-active': bStep === 1 }]">table = []</div>
            <div :class="['code-line', { 'code-active': bStep > 1 && bCurrentStep && bCurrentStep.type === 'new-row' }]">for i in range(1, 4):</div>
            <div :class="['code-line', { 'code-active': bStep > 1 && bCurrentStep && bCurrentStep.type === 'new-row' }]" style="padding-left:1.5rem">  row = []</div>
            <div :class="['code-line', { 'code-active': bStep > 1 && bCurrentStep && bCurrentStep.type === 'append' }]" style="padding-left:1.5rem">  for j in range(1, 4):</div>
            <div :class="['code-line', { 'code-active': bStep > 1 && bCurrentStep && bCurrentStep.type === 'append' }]" style="padding-left:3rem">    row.append(i*j)</div>
            <div :class="['code-line', { 'code-active': bStep > 1 && bCurrentStep && bCurrentStep.type === 'push' }]" style="padding-left:1.5rem">  table.append(row)</div>
          </div>
          <div class="info-panel" style="margin-top:.75rem">
            <span v-if="bStep === 0" class="muted">按「播放」開始</span>
            <span v-else v-html="bCurrentStep ? bCurrentStep.msg : '完成！'"></span>
          </div>
        </div>
      </div>
      <div class="ctrl">
        <button class="btn primary" @click="toggleBuild">{{ bPlaying ? '⏸ 暫停' : '▶ 播放' }}</button>
        <button class="btn" @click="stepBuild" :disabled="bStep >= bSteps.length">下一步</button>
        <button class="btn" @click="resetBuild">重置</button>
        <span class="step-info">步驟 {{ bStep }} / {{ bSteps.length }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'

const current = ref('access')
const tabs = [
  { id: 'access', label: '存取元素' },
  { id: 'loop',   label: '雙層迴圈' },
  { id: 'build',  label: '建立巢狀清單' },
]

/* ── 資料 ── */
const students = [['小明', 85, 90], ['小華', 78, 82], ['小美', 92, 88]]
const colLabels = ['[0] 姓名', '[1] 國文', '[2] 英文']
const colNames  = ['姓名', '國文成績', '英文成績']
const codeLines = ['students = [', "  ['小明', 85, 90],", "  ['小華', 78, 82],", "  ['小美', 92, 88]", ']']

/* ── TAB 1 ── */
const selI = ref(-1), selJ = ref(-1), selVal = ref(null)
function selectCell(i, j, val) { selI.value = i; selJ.value = j; selVal.value = val }

/* ── TAB 2 ── */
const loopSteps = []
students.forEach((s, i) => {
  loopSteps.push({ type: 'outer', i, j: -1, msg: `外層迴圈：s = students[${i}]<br><span style="color:var(--vp-c-green-1)">s = ['${s[0]}', ${s[1]}, ${s[2]}]</span>` })
  s.slice(1).forEach((sc, k) => {
    loopSteps.push({ type: 'inner', i, j: k + 1, msg: `內層迴圈：score = s[${k + 1}]<br><span style="color:var(--vp-c-green-1)">print(${sc})</span>`, out: sc })
  })
})

const loopStep   = ref(0)
const loopOutput = ref([])
const playing    = ref(false)
const speed      = ref(800)
let timer        = null

function isVisited(i, j) {
  if (j === 0) return false
  const idx = loopStep.value
  return loopSteps.slice(0, idx - 1).some(s => s.type === 'inner' && s.i === i && s.j === j)
}
function stepForward() {
  if (loopStep.value < loopSteps.length) {
    loopStep.value++
    const st = loopSteps[loopStep.value - 1]
    if (st.out !== undefined) loopOutput.value.push(st.out)
  }
}
function resetLoop() {
  clearInterval(timer); playing.value = false
  loopStep.value = 0; loopOutput.value = []
}
function togglePlay() {
  if (playing.value) { clearInterval(timer); playing.value = false; return }
  if (loopStep.value >= loopSteps.length) resetLoop()
  playing.value = true
  timer = setInterval(() => {
    if (loopStep.value < loopSteps.length) stepForward()
    else { clearInterval(timer); playing.value = false }
  }, Number(speed.value))
}

/* ── TAB 3 ── */
const bSteps = []
bSteps.push({ type: 'init', msg: '初始化 <code>table = []</code>' })
for (let i = 1; i <= 3; i++) {
  bSteps.push({ type: 'new-row', i, msg: `外層迴圈 i=${i}：建立 <code>row = []</code>` })
  for (let j = 1; j <= 3; j++) {
    bSteps.push({ type: 'append', i, j, val: i * j, msg: `內層迴圈 j=${j}：<code>row.append(${i}×${j}) → row.append(${i * j})</code>` })
  }
  bSteps.push({ type: 'push', i, msg: `<code>table.append(row)</code> → 第 ${i} 列加入 table` })
}

const bStep    = ref(0)
const bTable   = ref([])
const bRow     = ref([])
const bPlaying = ref(false)
let bTimer     = null

const bCurrentStep = computed(() => bStep.value > 0 ? bSteps[bStep.value - 1] : null)

function stepBuild() {
  if (bStep.value >= bSteps.length) return
  bStep.value++
  const st = bSteps[bStep.value - 1]
  if (st.type === 'init')    { bTable.value = []; bRow.value = [] }
  if (st.type === 'new-row') { bRow.value = [] }
  if (st.type === 'append')  { bRow.value = [...bRow.value, st.val] }
  if (st.type === 'push')    { bTable.value = [...bTable.value, [...bRow.value]]; bRow.value = [] }
}
function resetBuild() {
  clearInterval(bTimer); bPlaying.value = false
  bStep.value = 0; bTable.value = []; bRow.value = []
}
function toggleBuild() {
  if (bPlaying.value) { clearInterval(bTimer); bPlaying.value = false; return }
  if (bStep.value >= bSteps.length) resetBuild()
  bPlaying.value = true
  bTimer = setInterval(() => {
    if (bStep.value < bSteps.length) stepBuild()
    else { clearInterval(bTimer); bPlaying.value = false }
  }, 900)
}

onUnmounted(() => { clearInterval(timer); clearInterval(bTimer) })
</script>

<style scoped>
.root { padding: 1rem 0; font-size: 14px; }
.tab-row { display: flex; gap: 8px; margin-bottom: 1.25rem; flex-wrap: wrap; }
.tab-btn { padding: 6px 18px; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: transparent; color: var(--vp-c-text-2); font-size: 13px; cursor: pointer; transition: all .15s; }
.tab-btn.active { background: var(--vp-c-brand-soft); border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); font-weight: 500; }
.tab-btn:hover:not(.active) { background: var(--vp-c-bg-soft); }
.desc { font-size: 13px; color: var(--vp-c-text-2); margin-bottom: .75rem; }
.grid-wrap { display: flex; gap: 2rem; align-items: flex-start; flex-wrap: wrap; }
.grid-section { flex: 1; min-width: 240px; }
.info-col { min-width: 220px; }
.grid-label { font-size: 12px; color: var(--vp-c-text-3); margin-bottom: .5rem; }
.col-header { width: 72px; text-align: center; font-size: 11px; color: var(--vp-c-text-3); padding-bottom: 4px; }
.nl-grid { display: inline-flex; flex-direction: column; gap: 4px; }
.nl-row { display: flex; gap: 4px; align-items: center; }
.row-label { font-size: 12px; font-family: var(--vp-font-family-mono); color: var(--vp-c-text-3); width: 90px; text-align: right; padding-right: 8px; white-space: nowrap; }
.cell { width: 72px; height: 44px; border-radius: 8px; border: 1px solid var(--vp-c-divider); display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 12px; font-family: var(--vp-font-family-mono); background: var(--vp-c-bg-soft); transition: all .25s; cursor: default; }
.cell .val { font-weight: 500; font-size: 14px; color: var(--vp-c-text-1); }
.cell .idx { font-size: 10px; color: var(--vp-c-text-3); margin-top: 1px; }
.cell.outer-active { background: var(--vp-c-brand-soft); border-color: var(--vp-c-brand-1); }
.cell.outer-active .val, .cell.outer-active .idx { color: var(--vp-c-brand-1); }
.cell.inner-active { background: #E1F5EE; border-color: #9FE1CB; transform: translateY(-3px); box-shadow: 0 4px 10px rgba(0,0,0,.1); cursor: pointer; }
.cell.inner-active .val { color: #0F6E56; }
.cell.inner-active .idx { color: #5DCAA5; }
.cell.visited { opacity: .5; }
.info-panel { background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: .75rem 1rem; font-size: 13px; min-height: 64px; line-height: 1.8; }
.code-block { background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: .75rem 1rem; }
.code-line { font-family: var(--vp-font-family-mono); font-size: 12px; line-height: 2; color: var(--vp-c-text-2); transition: color .2s; }
.code-active { color: var(--vp-c-brand-1) !important; font-weight: 500; }
.out-box { background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: .5rem .75rem; font-family: var(--vp-font-family-mono); font-size: 12px; color: var(--vp-c-text-2); min-height: 28px; margin-top: .75rem; line-height: 1.8; }
.ctrl { display: flex; align-items: center; gap: 10px; margin-top: 1rem; flex-wrap: wrap; }
.btn { padding: 6px 16px; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: transparent; color: var(--vp-c-text-2); font-size: 13px; cursor: pointer; transition: all .15s; }
.btn:hover:not(:disabled) { background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); }
.btn:disabled { opacity: .4; cursor: default; }
.btn.primary { background: var(--vp-c-brand-soft); border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); }
.step-info { font-size: 12px; color: var(--vp-c-text-3); margin-left: auto; }
.speed-row { display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--vp-c-text-3); margin-top: .5rem; }
.hl { color: var(--vp-c-brand-1); font-weight: 500; }
.hl-g { color: #0F6E56; }
.muted { color: var(--vp-c-text-3); }
.sub-info { font-size: 12px; color: var(--vp-c-text-2); line-height: 1.8; }
</style>