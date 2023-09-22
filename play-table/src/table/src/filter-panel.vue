<template>
  <el-tooltip
    ref="tooltip"
    :visible="tooltipVisible"
    :offset="0"
    :placement="placement"
    :show-arrow="false"
    :stop-popper-mouse-event="false"
    teleported
    effect="light"
    pure
    :popper-class="ns.b()"
    persistent
  >
    <template #content>
      <div v-if="multiple">
        <div :class="ns.e('content')">
          <el-scrollbar :wrap-class="ns.e('wrap')">
            <el-checkbox-group
              v-model="filteredValue"
              :class="ns.e('checkbox-group')"
            >
              <el-checkbox
                v-for="filter in filters"
                :key="filter.value"
                :label="filter.value"
              >
                {{ filter.text }}
              </el-checkbox>
            </el-checkbox-group>
          </el-scrollbar>
        </div>
        <div :class="ns.e('bottom')">
          <button
            :class="{ [ns.is('disabled')]: filteredValue.length === 0 }"
            :disabled="filteredValue.length === 0"
            type="button"
            @click="handleConfirm"
          >
            {{ t('el.table.confirmFilter') }}
          </button>
          <button type="button" @click="handleReset">
            {{ t('el.table.resetFilter') }}
          </button>
        </div>
      </div>
      <ul v-else :class="ns.e('list')">
        <li
          :class="[
            ns.e('list-item'),
            {
              [ns.is('active')]:
                filterValue === undefined || filterValue === null,
            },
          ]"
          @click="handleSelect(null)"
        >
          {{ t('el.table.clearFilter') }}
        </li>
        <li
          v-for="filter in filters"
          :key="filter.value"
          :class="[ns.e('list-item'), ns.is('active', isActive(filter))]"
          :label="filter.value"
          @click="handleSelect(filter.value)"
        >
          {{ filter.text }}
        </li>
      </ul>
    </template>
    <template #default>
      <span
        v-click-outside:[popperPaneRef]="hideFilterPanel"
        :class="[
          `${ns.namespace.value}-table__column-filter-trigger`,
          `${ns.namespace.value}-none-outline`,
        ]"
        @click="showFilterPanel"
      >
        <el-icon>
          <arrow-up v-if="column.filterOpened" />
          <arrow-down v-else />
        </el-icon>
      </span>
    </template>
  </el-tooltip>
</template>

<script lang="ts">
// @ts-nocheck
import { computed, defineComponent, getCurrentInstance, ref, watch } from 'vue'
import { ElCheckbox } from 'element-plus'
import { ElIcon } from 'element-plus'
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import { ClickOutside } from 'element-plus/es/directives/index'
import { useLocale, useNamespace } from 'element-plus/es/hooks/index'
import {ElTooltip} from 'element-plus'
import {ElScrollbar} from 'element-plus'
import type { Placement } from 'element-plus'

import type { PropType, WritableComputedRef } from 'vue'
import type { TableColumnCtx } from './table-column/defaults'
import type { TableHeader } from './table-header'
import type { Store } from './store'

const { CheckboxGroup: ElCheckboxGroup } = ElCheckbox

export default defineComponent({
  name: 'ElTableFilterPanel',
  components: {
    ElCheckbox,
    ElCheckboxGroup,
    ElScrollbar,
    ElTooltip,
    ElIcon,
    ArrowDown,
    ArrowUp,
  },
  directives: { ClickOutside },
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom-start',
    },
    store: {
      type: Object as PropType<Store<unknown>>,
    },
    column: {
      type: Object as PropType<TableColumnCtx<unknown>>,
    },
    upDataColumn: {
      type: Function,
    },
  },
  setup(props) {
    const instance = getCurrentInstance()
    const { t } = useLocale()
    const ns = useNamespace('table-filter')
    const parent = instance?.parent as TableHeader
    if (!parent.filterPanels.value[props.column.id]) {
      parent.filterPanels.value[props.column.id] = instance
    }
    const tooltipVisible = ref(false)
    const tooltip = ref<InstanceType<typeof ElTooltip> | null>(null)
    const filters = computed(() => {
      return props.column && props.column.filters
    })
    const filterValue = computed({
      get: () => (props.column?.filteredValue || [])[0],
      set: (value: string) => {
        if (filteredValue.value) {
          if (typeof value !== 'undefined' && value !== null) {
            filteredValue.value.splice(0, 1, value)
          } else {
            filteredValue.value.splice(0, 1)
          }
        }
      },
    })
    const filteredValue: WritableComputedRef<unknown[]> = computed({
      get() {
        if (props.column) {
          return props.column.filteredValue || []
        }
        return []
      },
      set(value: unknown[]) {
        if (props.column) {
          props.upDataColumn('filteredValue', value)
        }
      },
    })
    const multiple = computed(() => {
      if (props.column) {
        return props.column.filterMultiple
      }
      return true
    })
    const isActive = (filter) => {
      return filter.value === filterValue.value
    }
    const hidden = () => {
      tooltipVisible.value = false
    }
    const showFilterPanel = (e: MouseEvent) => {
      e.stopPropagation()
      tooltipVisible.value = !tooltipVisible.value
    }
    const hideFilterPanel = () => {
      tooltipVisible.value = false
    }
    const handleConfirm = () => {
      confirmFilter(filteredValue.value)
      hidden()
    }
    const handleReset = () => {
      filteredValue.value = []
      confirmFilter(filteredValue.value)
      hidden()
    }
    const handleSelect = (_filterValue?: string) => {
      filterValue.value = _filterValue
      if (typeof _filterValue !== 'undefined' && _filterValue !== null) {
        confirmFilter(filteredValue.value)
      } else {
        confirmFilter([])
      }
      hidden()
    }
    const confirmFilter = (filteredValue: unknown[]) => {
      props.store.commit('filterChange', {
        column: props.column,
        values: filteredValue,
      })
      props.store.updateAllSelected()
    }
    watch(
      tooltipVisible,
      (value) => {
        // todo
        if (props.column) {
          props.upDataColumn('filterOpened', value)
        }
      },
      {
        immediate: true,
      }
    )

    const popperPaneRef = computed(() => {
      return tooltip.value?.popperRef?.contentRef
    })

    return {
      tooltipVisible,
      multiple,
      filteredValue,
      filterValue,
      filters,
      handleConfirm,
      handleReset,
      handleSelect,
      isActive,
      t,
      ns,
      showFilterPanel,
      hideFilterPanel,
      popperPaneRef,
      tooltip,
    }
  },
})
</script>