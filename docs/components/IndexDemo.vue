<template>
  <div class="index-demo">
    <div class="tab-row">
      <button
        v-for="t in tabs"
        :key="t.id"
        :class="['tab-btn', { active: current === t.id }]"
        @click="current = t.id"
      >
        {{ t.label }}
      </button>
    </div>

    <!-- List 分頁 -->
    <div v-if="current === 'list'">
      <p class="desc">清單可以放入任意型別，且可以隨時修改。點擊元素查看索引：</p>
      <div class="idx-row">
        <span v-for="(_, i) in listItems" :key="i" class="idx-cell">{{ i }}</span>
      </div>
      <div class="box-row">
        <div
          v-for="(el, i) in listItems"
          :key="i"
          :class="['el-box', 'list-el', { selected: selList === i }]"
          @click="selList = i"
        >
          {{ el }}
        </div>
      </div>
      <div class="neg-row">
        <span v-for="(_, i) in listItems" :key="i" class="idx-cell">{{ i - listItems.length }}</span>
      </div>
      <div v-if="selList !== null" class="info-bubble">
        <code>fruits[{{ selList }}]</code> = <strong>'{{ listItems[selList] }}'</strong>
        &nbsp;|&nbsp;
        <code>fruits[{{ selList - listItems.length }}]</code> = <strong>'{{ listItems[selList] }}'</strong>
        <span class="tag-mut">✅ 可修改</span>
      </div>
      <div v-else class="info-bubble muted">👆 點擊任一元素</div>
    </div>

    <!-- String 分頁 -->
    <div v-if="current === 'str'">
      <p class="desc">字串是不可變的字元序列，索引規則與 List 完全相同。點擊字元查看索引：</p>
      <div class="idx-row">
        <span v-for="(_, i) in strItems" :key="i" class="idx-cell">{{ i }}</span>
      </div>
      <div class="box-row">
        <div
          v-for="(ch, i) in strItems"
          :key="i"
          :class="['el-box', 'str-el', { selected: selStr === i }]"
          @click="selStr = i"
        >
          {{ ch }}
        </div>
      </div>
      <div class="neg-row">
        <span v-for="(_, i) in strItems" :key="i" class="idx-cell">{{ i - strItems.length }}</span>
      </div>
      <div v-if="selStr !== null" class="info-bubble">
        <code>s[{{ selStr }}]</code> = <strong>'{{ strItems[selStr] }}'</strong>
        &nbsp;|&nbsp;
        <code>s[{{ selStr - strItems.length }}]</code> = <strong>'{{ strItems[selStr] }}'</strong>
        <span class="tag-immut">❌ 不可修改</span>
      </div>
      <div v-else class="info-bubble muted">👆 點擊任一字元</div>
    </div>

    <!-- 比較分頁 -->
    <div v-if="current === 'diff'">
      
      <!-- 記憶體模型 -->
      <p class="desc">變數是貼在物件上的「標籤」，List 和 String 在記憶體中的行為完全不同：</p>
      <div class="mem-wrap">
        <div class="mem-block">
          <div class="mem-title">List — <code>li = [10, 20, 30]</code></div>
          <div class="mem-var list-var">li</div>
          <div class="mem-arrow">↓</div>
          <div class="mem-obj list-obj">
            <div class="mem-obj-header">list object</div>
            <div class="mem-obj-items">
              <span class="mem-cell list-cell">10</span>
              <span class="mem-cell list-cell">20</span>
              <span class="mem-cell list-cell">30</span>
            </div>
          </div>
          <div class="mem-note ok">✅ <code>nums[0] = 99</code> 可以修改</div>
        </div>

        <div class="mem-divider"></div>

        <div class="mem-block">
          <div class="mem-title">String — <code>s = "abc"</code></div>
          <div class="mem-var str-var">s</div>
          <div class="mem-arrow">↓</div>
          <div class="mem-obj str-obj">
            <div class="mem-obj-header">str object（不可變）</div>
            <div class="mem-obj-items">
              <span class="mem-cell str-cell">'a'</span>
              <span class="mem-cell str-cell">'b'</span>
              <span class="mem-cell str-cell">'c'</span>
            </div>
          </div>
          <div class="mem-note err">❌ <code>s[0] = 'A'</code> → TypeError</div>
        </div>
      </div>

      <!-- 比較表 -->
      <table class="diff-table">
        <thead>
          <tr><th>特性</th><th>List</th><th>String</th></tr>
        </thead>
        <tbody>
          <tr v-for="row in diffRows" :key="row[0]">
            <td>{{ row[0] }}</td>
            <td v-html="row[1]"></td>
            <td v-html="row[2]"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const current = ref('list')
const selList = ref(null)
const selStr  = ref(null)

const tabs = [
  { id: 'list', label: '📋 List（清單）' },
  { id: 'str',  label: '🔤 String（字串）' },
  { id: 'diff', label: '⚖️ 比較' },
]

const listItems = ['apple', 'banana', 'cherry', 'durian', 'mango']
const strItems  = ['P', 'y', 't', 'h', 'o', 'n']

const diffRows = [
  ['建立語法', '<code>li = [10, 20, 30]</code>', '<code>s = "abc"</code>'],
  ['元素型別', '任意（可混合）', '只有字元'],
  ['索引 / 切片', '✅ 支援', '✅ 支援'],
  ['負索引', '✅ 支援', '✅ 支援'],
  ['可修改', '✅ 可以', '❌ 不行（immutable）'],
  ['長度', '<code>len(li)</code>', '<code>len(s)</code>'],
  ['互轉', '<code>list(s)</code>', '<code>"".join(li)</code>'],
]
</script>

<style>
.index-demo { margin: 2rem 0; }
.tab-row { display: flex; gap: 8px; margin-bottom: 1.25rem; flex-wrap: wrap; }
.tab-btn {
  padding: 6px 18px; border: 1px solid var(--vp-c-divider);
  border-radius: 8px; background: transparent; color: var(--vp-c-text-2);
  font-size: 14px; cursor: pointer; transition: all .15s;
}
.tab-btn.active {
  background: var(--vp-c-brand-soft); border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1); font-weight: 500;
}
.tab-btn:hover:not(.active) { background: var(--vp-c-bg-soft); }
.desc { font-size: 14px; color: var(--vp-c-text-2); margin-bottom: .75rem; }
.idx-row, .neg-row { display: flex; gap: 4px; }
.idx-cell { flex: 1; text-align: center; font-size: 12px; color: var(--vp-c-text-3); padding: 2px 0; }
.box-row { display: flex; gap: 4px; margin: 4px 0; }
.el-box {
  flex: 1; border-radius: 8px; padding: 10px 4px; text-align: center;
  font-size: 13px; font-weight: 500; cursor: pointer;
  border: 1.5px solid transparent; transition: all .15s; user-select: none;
}
.list-el { background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); border-color: var(--vp-c-brand-2); }
.str-el  { background: #E1F5EE; color: #0F6E56; border-color: #9FE1CB; }
.el-box.selected { transform: translateY(-3px); box-shadow: 0 4px 12px rgba(0,0,0,.12); }
.info-bubble {
  margin-top: .75rem; padding: .6rem 1rem;
  background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);
  border-radius: 8px; font-size: 13px; min-height: 36px;
}
.info-bubble.muted { color: var(--vp-c-text-3); }
.tag-mut   { color: var(--vp-c-green-1); font-size: 12px; margin-left: 8px; }
.tag-immut { color: var(--vp-c-red-1);   font-size: 12px; margin-left: 8px; }
.diff-table { width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 1rem; }
:deep(.diff-table th) { text-align: left; padding: 8px 12px; font-weight: 500; border-bottom: 1px solid var(--vp-c-divider) !important; color: var(--vp-c-text-2); font-size: 13px; }
:deep(.diff-table td) { padding: 9px 12px; border-bottom: 1px solid var(--vp-c-divider) !important; vertical-align: top; }
:deep(.diff-table tr:last-child td) { border-bottom: none !important; }
.mem-wrap { display: flex; gap: 1.5rem; align-items: flex-start; margin: 1rem 0 1.5rem; }
.mem-block { flex: 1; text-align: center; }
.mem-divider { width: 1px; background: var(--vp-c-divider); align-self: stretch; margin: 0 .5rem; }
.mem-title { font-size: 12px; color: var(--vp-c-text-2); margin-bottom: .5rem; }
.mem-var { display: inline-block; padding: 5px 16px; border-radius: 6px; font-family: var(--vp-font-family-mono); font-size: 13px; font-weight: 500; margin-bottom: 4px; }
.list-var { background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); }
.str-var  { background: #E1F5EE; color: #0F6E56; }
.mem-arrow { font-size: 18px; color: var(--vp-c-text-3); margin: 2px 0; }
.mem-obj { border-radius: 8px; overflow: hidden; border: 1.5px solid; }
.list-obj { border-color: var(--vp-c-brand-2); }
.str-obj  { border-color: #9FE1CB; }
.mem-obj-header { padding: 4px 10px; font-size: 12px; font-weight: 500; }
.list-obj .mem-obj-header { background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); }
.str-obj  .mem-obj-header { background: #E1F5EE; color: #0F6E56; }
.mem-obj-items { display: flex; }
.mem-cell { flex: 1; padding: 10px 4px; text-align: center; font-size: 13px; font-weight: 500; }
.list-cell { color: var(--vp-c-brand-1); border-right: 1px solid var(--vp-c-brand-soft); }
.list-cell:last-child { border-right: none; }
.str-cell  { color: #0F6E56; border-right: 1px solid #E1F5EE; }
.str-cell:last-child  { border-right: none; }
.mem-note { font-size: 12px; margin-top: .6rem; }
.mem-note.ok  { color: var(--vp-c-green-1); }
.mem-note.err { color: var(--vp-c-red-1); }
</style>