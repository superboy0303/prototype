/**
 * 低代码平台 - 扩展组件管理原型
 * 核心交互逻辑
 */

// ============================================================
// Data Model
// ============================================================

/** 图标分类数据 */
const ICON_DATA = {
  system: [
    'ri-apps-line', 'ri-dashboard-line', 'ri-layout-grid-line', 'ri-menu-line',
    'ri-list-check', 'ri-list-ordered', 'ri-more-fill', 'ri-star-line',
    'ri-settings-line', 'ri-tools-line', 'ri-bug-line', 'ri-code-line',
    'ri-terminal-box-line', 'ri-database-2-line', 'ri-server-line', 'ri-cloud-line',
    'ri-lock-line', 'ri-shield-check-line', 'ri-key-line', 'ri-eye-line',
    'ri-eye-off-line', 'ri-search-line', 'ri-filter-line', 'ri-sort-asc',
    'ri-checkbox-circle-line', 'ri-close-circle-line', 'ri-information-line', 'ri-error-warning-line',
    'ri-question-line', 'ri-add-circle-line', 'ri-subtract-line', 'ri-check-line',
    'ri-close-line', 'ri-add-line', 'ri-delete-bin-line', 'ri-edit-line',
    'ri-save-line', 'ri-file-copy-line', 'ri-clipboard-line', 'ri-link',
    'ri-external-link-line', 'ri-share-line', 'ri-download-line', 'ri-upload-line',
    'ri-refresh-line', 'ri-time-line', 'ri-calendar-line', 'ri-alarm-line'
  ],
  media: [
    'ri-image-line', 'ri-video-line', 'ri-music-line', 'ri-mic-line',
    'ri-camera-line', 'ri-film-line', 'ri-headphone-line', 'ri-speaker-line',
    'ri-play-circle-line', 'ri-pause-circle-line', 'ri-stop-circle-line', 'ri-skip-forward-line',
    'ri-volume-up-line', 'ri-volume-mute-line', 'ri-gallery-line', 'ri-landscape-line',
    'ri-fullscreen-line', 'ri-picture-in-picture-line', 'ri-equalizer-line', 'ri-sound-module-line',
    'ri-slideshow-line', 'ri-live-line', 'ri-radio-line', 'ri-broadcast-line'
  ],
  people: [
    'ri-user-line', 'ri-user-add-line', 'ri-user-follow-line', 'ri-user-settings-line',
    'ri-group-line', 'ri-team-line', 'ri-contacts-line', 'ri-account-circle-line',
    'ri-user-star-line', 'ri-user-heart-line', 'ri-admin-line', 'ri-spy-line',
    'ri-parent-line', 'ri-robot-line', 'ri-skull-line', 'ri-aliens-line',
    'ri-user-search-line', 'ri-user-shared-line', 'ri-user-received-line', 'ri-user-voice-line',
    'ri-emotion-line', 'ri-emotion-happy-line', 'ri-emotion-sad-line', 'ri-emotion-laugh-line'
  ],
  comm: [
    'ri-phone-line', 'ri-smartphone-line', 'ri-tablet-line', 'ri-computer-line',
    'ri-mail-line', 'ri-mail-send-line', 'ri-chat-1-line', 'ri-message-2-line',
    'ri-discuss-line', 'ri-question-answer-line', 'ri-notification-line', 'ri-notification-badge-line',
    'ri-signal-tower-line', 'ri-wifi-line', 'ri-bluetooth-line', 'ri-usb-line',
    'ri-rss-line', 'ri-satellite-line', 'ri-at-line', 'ri-hashtag',
    'ri-globe-line', 'ri-earth-line', 'ri-translate-2', 'ri-voice-recognition-line'
  ],
  business: [
    'ri-building-line', 'ri-store-line', 'ri-briefcase-line', 'ri-shopping-cart-line',
    'ri-shopping-bag-line', 'ri-wallet-line', 'ri-bank-card-line', 'ri-money-cny-circle-line',
    'ri-funds-line', 'ri-stock-line', 'ri-bar-chart-line', 'ri-pie-chart-line',
    'ri-line-chart-line', 'ri-trophy-line', 'ri-medal-line', 'ri-award-line',
    'ri-gift-line', 'ri-coupon-line', 'ri-price-tag-line', 'ri-ticket-line',
    'ri-vip-crown-line', 'ri-vip-diamond-line', 'ri-hand-coin-line', 'ri-exchange-line'
  ],
  arrow: [
    'ri-arrow-up-line', 'ri-arrow-down-line', 'ri-arrow-left-line', 'ri-arrow-right-line',
    'ri-arrow-up-s-line', 'ri-arrow-down-s-line', 'ri-arrow-left-s-line', 'ri-arrow-right-s-line',
    'ri-arrow-up-circle-line', 'ri-arrow-down-circle-line', 'ri-arrow-left-circle-line', 'ri-arrow-right-circle-line',
    'ri-arrow-go-back-line', 'ri-arrow-go-forward-line', 'ri-corner-up-left-line', 'ri-corner-up-right-line',
    'ri-expand-left-right-line', 'ri-contract-left-right-line', 'ri-swap-line', 'ri-drag-move-line',
    'ri-skip-up-line', 'ri-skip-down-line', 'ri-skip-left-line', 'ri-skip-right-line'
  ]
};

/** 系统已有分类 */
const EXISTING_CATEGORIES = [
  '下拉表格', '下拉选择', '输入框', '其他组件', '表格组件', '按钮组件'
];

/** 模拟扩展组件数据 — 按「系统 > 分类 > 组件」三层结构 */
let extensionData = [
  {
    system: 'WMS',
    categories: [
      {
        name: '下拉表格',
        order: 1,
        items: [
          { name: '组织编码', icon: 'ri-organization-chart', order: 1 },
          { name: '仓库编码', icon: 'ri-home-line', order: 2 },
          { name: '库区编码', icon: 'ri-layout-masonry-line', order: 3 },
          { name: '区域编码', icon: 'ri-checkbox-blank-line', order: 4 },
          { name: '库位编码', icon: 'ri-list-settings-line', order: 5 },
          { name: '货主编码', icon: 'ri-group-line', order: 6 },
          { name: '供应商编码', icon: 'ri-truck-line', order: 7 },
          { name: '物料编码', icon: 'ri-archive-line', order: 8 },
          { name: '客户编码', icon: 'ri-user-line', order: 9 }
        ]
      },
      {
        name: '下拉选择',
        order: 2,
        items: [
          { name: '月台编码', icon: 'ri-door-line', order: 1 },
          { name: '运输方式', icon: 'ri-truck-line', order: 2 },
          { name: '车辆类型', icon: 'ri-car-line', order: 3 },
          { name: '单据状态', icon: 'ri-file-list-line', order: 4 },
          { name: '单据类型', icon: 'ri-file-text-line', order: 5 },
          { name: '路线编码', icon: 'ri-route-line', order: 6 },
          { name: '巷道号', icon: 'ri-building-line', order: 7 },
          { name: '国家选择', icon: 'ri-globe-line', order: 8 },
          { name: '库位组1', icon: 'ri-layout-grid-line', order: 9 },
          { name: '库位组2', icon: 'ri-layout-grid-line', order: 10 },
          { name: '库位组3', icon: 'ri-layout-grid-line', order: 11 },
          { name: '其他系统代码', icon: 'ri-code-line', order: 12 }
        ]
      },
      {
        name: '输入框',
        order: 3,
        items: [
          { name: '创建人员', icon: 'ri-user-add-line', order: 1 },
          { name: '更新人员', icon: 'ri-user-settings-line', order: 2 },
          { name: '创建时间', icon: 'ri-calendar-line', order: 3 },
          { name: '更新时间', icon: 'ri-calendar-check-line', order: 4 }
        ]
      },
      {
        name: '其他组件',
        order: 4,
        items: [
          { name: '批次渲染', icon: 'ri-apps-line', order: 1 },
          { name: '附件上传', icon: 'ri-attachment-line', order: 2 },
          { name: '地址选择器', icon: 'ri-map-pin-line', order: 3 }
        ]
      },
      {
        name: '表格组件',
        order: 5,
        items: [
          { name: '父子联动表格', icon: 'ri-table-line', order: 1 },
          { name: '标准数据表格', icon: 'ri-table-2', order: 2 },
          { name: '行内编辑表格', icon: 'ri-edit-box-line', order: 3 }
        ]
      },
      {
        name: '按钮组件',
        order: 6,
        items: [
          { name: '复制按钮', icon: 'ri-file-copy-line', order: 1 },
          { name: '操作按钮', icon: 'ri-play-circle-line', order: 2 },
          { name: '删除按钮', icon: 'ri-delete-bin-line', order: 3 },
          { name: '导出按钮', icon: 'ri-download-line', order: 4 }
        ]
      }
    ]
  }
];

// ============================================================
// State
// ============================================================
let selectedIcon = 'ri-apps-line';
let currentIconCategory = 'system';
let draggedItem = null;
let draggedItemData = null; // { name, category }
let draggedCategoryName = null; // string (category name)
let dragGhost = null;
let itemToDelete = null; // { categoryName, itemName }

// ============================================================
// DOM Ready
// ============================================================
function loadFromLocalStorage() {
  const data = localStorage.getItem('extensionData');
  if (data) {
    try {
      extensionData = JSON.parse(data);
    } catch (e) {
      console.error('Failed to parse extensionData from localStorage', e);
    }
  }
  
  // Migrate "未知分类" to "未知" in existing loaded data
  extensionData.forEach(sys => {
    sys.categories.forEach(cat => {
      if (cat.name === '未知分类') {
        cat.name = '未知';
      }
    });
  });

  // Merge categories with same name if they arose after migration
  extensionData.forEach(sys => {
    const mergedCategories = [];
    sys.categories.forEach(cat => {
      let existing = mergedCategories.find(c => c.name === cat.name);
      if (existing) {
        cat.items.forEach(item => {
          if (!existing.items.some(i => i.name === item.name)) {
            item.order = existing.items.length + 1;
            existing.items.push(item);
          }
        });
      } else {
        mergedCategories.push(cat);
      }
    });
    sys.categories = mergedCategories;
  });

  cleanupEmptyStructures();
  
  // Ensure every item has creator and createTime
  extensionData.forEach(sys => {
    sys.categories.forEach(cat => {
      cat.items.forEach(item => {
        if (!item.creator) item.creator = '系统管理员';
        if (!item.createTime) item.createTime = '2026-06-18 10:00:00';
      });
    });
  });
  
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem('extensionData', JSON.stringify(extensionData));
}

function getFormattedTime() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const h = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  return `${y}-${m}-${d} ${h}:${min}:${s}`;
}

function init() {
  loadFromLocalStorage();
  initTabs();
  renderExtensions();
  initSaveExtDialog();
  initIconPicker();
  initCategoryCombo();
  initSearch();
  initCanvasDrop();
  initExportDialog();
  initImportDialog();
  initDeleteConfirmDialog();
  initSaveDb();
  initSystemCombo();
  initEditDialog();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ============================================================
// Tab Switching
// ============================================================
function initTabs() {
  const tabs = document.querySelectorAll('.left-tab');
  const panes = document.querySelectorAll('.tab-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.tab;
      document.querySelector(`[data-pane="${target}"]`).classList.add('active');
    });
  });
}

// ============================================================
// Render Extensions
// ============================================================
function renderExtensions() {
  const container = document.getElementById('extCategories');
  container.innerHTML = '';

  extensionData.forEach(systemGroup => {
    const groupEl = document.createElement('div');
    groupEl.className = 'ext-system-group';
    if (systemGroup.collapsed) {
      groupEl.classList.add('collapsed');
    }

    const headerEl = document.createElement('div');
    headerEl.className = 'ext-system-header';
    headerEl.innerHTML = `
      <span class="ext-system-title">${systemGroup.system} <i class="ri-edit-line ext-edit-btn" title="编辑系统"></i></span>
      <i class="ri-arrow-down-s-line ext-system__toggle"></i>
    `;

    headerEl.addEventListener('click', () => {
      systemGroup.collapsed = !systemGroup.collapsed;
      groupEl.classList.toggle('collapsed');
      saveToLocalStorage();
    });

    const editBtn = headerEl.querySelector('.ext-edit-btn');
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openEditSystemDialog(systemGroup.system);
    });

    groupEl.appendChild(headerEl);

    const contentEl = document.createElement('div');
    contentEl.className = 'ext-system-content';

    // Sort categories by order
    const sortedCategories = [...systemGroup.categories].sort((a, b) => a.order - b.order);

    sortedCategories.forEach(category => {
      const catEl = createCategoryElement(category, systemGroup.system);
      contentEl.appendChild(catEl);
    });

    groupEl.appendChild(contentEl);
    container.appendChild(groupEl);
  });
}

function createCategoryElement(category, systemName) {
  const catEl = document.createElement('div');
  catEl.className = 'ext-category';
  catEl.dataset.categoryName = category.name;

  // Header
  const header = document.createElement('div');
  header.className = 'ext-category__header';
  header.setAttribute('draggable', 'true');
  header.innerHTML = `
    <span class="ext-category__title">${category.name} <i class="ri-edit-line ext-edit-btn" title="编辑分类"></i></span>
    <i class="ri-arrow-right-s-line ext-category__toggle"></i>
  `;

  const editBtn = header.querySelector('.ext-edit-btn');
  editBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    openEditCategoryDialog(systemName, category.name);
  });

  header.addEventListener('click', (e) => {
    if (draggedCategoryName) return;
    catEl.classList.toggle('collapsed');
  });

  // Drag events for category reorder
  header.addEventListener('dragstart', (e) => {
    draggedCategoryName = category.name;
    e.dataTransfer.setData('drag-type', 'category');
    e.dataTransfer.effectAllowed = 'move';
    catEl.style.opacity = '0.4';
  });

  header.addEventListener('dragend', () => {
    draggedCategoryName = null;
    catEl.style.opacity = '';
    document.querySelectorAll('.ext-category__header').forEach(h => {
      h.classList.remove('drag-over-top', 'drag-over-bottom');
    });
  });

  header.addEventListener('dragover', (e) => {
    if (draggedCategoryName && draggedCategoryName !== category.name) {
      e.preventDefault();
      const rect = header.getBoundingClientRect();
      const midpoint = rect.top + rect.height / 2;
      if (e.clientY < midpoint) {
        header.classList.add('drag-over-top');
        header.classList.remove('drag-over-bottom');
      } else {
        header.classList.add('drag-over-bottom');
        header.classList.remove('drag-over-top');
      }
    }
  });

  header.addEventListener('dragleave', () => {
    header.classList.remove('drag-over-top', 'drag-over-bottom');
  });

  header.addEventListener('drop', (e) => {
    if (draggedCategoryName && draggedCategoryName !== category.name) {
      e.preventDefault();
      const rect = header.getBoundingClientRect();
      const midpoint = rect.top + rect.height / 2;
      const position = e.clientY < midpoint ? 'before' : 'after';
      reorderCategories(draggedCategoryName, category.name, position);
    }
    header.classList.remove('drag-over-top', 'drag-over-bottom');
  });

  catEl.appendChild(header);

  // Items grid
  const itemsEl = document.createElement('div');
  itemsEl.className = 'ext-category__items';

  // Make items container droppable for items
  itemsEl.addEventListener('dragover', (e) => {
    if (draggedItemData) {
      e.preventDefault();
      itemsEl.classList.add('drag-over');
    }
  });

  itemsEl.addEventListener('dragleave', () => {
    itemsEl.classList.remove('drag-over');
  });

  itemsEl.addEventListener('drop', (e) => {
    if (draggedItemData) {
      e.preventDefault();
      itemsEl.classList.remove('drag-over');
      if (e.target === itemsEl || e.target.classList.contains('ext-category__items')) {
        moveItemToCategoryEnd(draggedItemData.name, draggedItemData.category, category.name);
      }
    }
  });

  // Sort items by order
  const sortedItems = [...category.items].sort((a, b) => a.order - b.order);

  sortedItems.forEach(item => {
    const itemEl = createItemElement(item, category.name);
    itemsEl.appendChild(itemEl);
  });

  catEl.appendChild(itemsEl);
  return catEl;
}

function createItemElement(item, categoryName) {
  const el = document.createElement('div');
  el.className = 'ext-item';
  el.draggable = true;
  el.dataset.name = item.name;
  el.dataset.category = categoryName;
  
  const displayName = item.name.length > 4 ? item.name.substring(0, 4) + '...' : item.name;
  el.innerHTML = `<i class="${item.icon}"></i><span title="${item.name}">${displayName}</span>`;

  // Edit button
  const editBtn = document.createElement('i');
  editBtn.className = 'ri-edit-line ext-edit-btn';
  editBtn.title = '编辑组件';
  editBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const sysName = extensionData.find(s => s.categories.some(c => c.name === categoryName))?.system || 'WMS';
    openEditItemDialog(sysName, categoryName, item.name, item.icon);
  });
  el.appendChild(editBtn);

  // Delete button
  const deleteBtn = document.createElement('i');
  deleteBtn.className = 'ri-indeterminate-circle-fill ext-item__delete';
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    deleteExtension(categoryName, item.name);
  });
  el.appendChild(deleteBtn);

  // Drag events
  el.addEventListener('dragstart', (e) => {
    draggedItem = el;
    draggedItemData = { name: item.name, category: categoryName };
    el.classList.add('dragging');
    e.dataTransfer.setData('text/plain', item.name);
    e.dataTransfer.setData('drag-type', 'item');
    e.dataTransfer.effectAllowed = 'move';

    // Custom drag ghost
    createDragGhost(item.icon, item.name);
    e.dataTransfer.setDragImage(new Image(), 0, 0);

    // Show canvas drop hint
    document.getElementById('canvas').classList.add('drag-over');
  });

  el.addEventListener('dragend', () => {
    el.classList.remove('dragging');
    draggedItem = null;
    draggedItemData = null;
    removeDragGhost();
    document.getElementById('canvas').classList.remove('drag-over');
    document.querySelectorAll('.ext-item').forEach(itemEl => {
      itemEl.classList.remove('drag-over-top', 'drag-over-bottom');
    });
  });

  el.addEventListener('dragover', (e) => {
    if (draggedItemData) {
      if (draggedItemData.name === item.name && draggedItemData.category === categoryName) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      const rect = el.getBoundingClientRect();
      const midpoint = rect.top + rect.height / 2;
      if (e.clientY < midpoint) {
        el.classList.add('drag-over-top');
        el.classList.remove('drag-over-bottom');
      } else {
        el.classList.add('drag-over-bottom');
        el.classList.remove('drag-over-top');
      }
    }
  });

  el.addEventListener('dragleave', () => {
    el.classList.remove('drag-over-top', 'drag-over-bottom');
  });

  el.addEventListener('drop', (e) => {
    if (draggedItemData) {
      if (draggedItemData.name === item.name && draggedItemData.category === categoryName) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      const rect = el.getBoundingClientRect();
      const midpoint = rect.top + rect.height / 2;
      const position = e.clientY < midpoint ? 'before' : 'after';
      reorderItems(draggedItemData.name, draggedItemData.category, categoryName, item.name, position);
    }
    el.classList.remove('drag-over-top', 'drag-over-bottom');
  });

  return el;
}

// Drag Ghost
function createDragGhost(icon, name) {
  dragGhost = document.createElement('div');
  dragGhost.className = 'drag-ghost';
  dragGhost.innerHTML = `<i class="${icon}"></i><span>${name}</span>`;
  document.body.appendChild(dragGhost);

  document.addEventListener('dragover', moveDragGhost);
}

function moveDragGhost(e) {
  if (dragGhost) {
    dragGhost.style.left = e.clientX + 'px';
    dragGhost.style.top = e.clientY + 'px';
  }
}

function removeDragGhost() {
  if (dragGhost) {
    document.removeEventListener('dragover', moveDragGhost);
    dragGhost.remove();
    dragGhost = null;
  }
}

// Canvas drop
function initCanvasDrop() {
  const canvas = document.getElementById('canvas');

  canvas.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  });

  canvas.addEventListener('drop', (e) => {
    e.preventDefault();
    canvas.classList.remove('drag-over');
    const name = e.dataTransfer.getData('text/plain');
    if (name) {
      showToast('success', `组件「${name}」已拖入设计界面`);
    }
  });

  canvas.addEventListener('dragleave', () => {
    canvas.classList.remove('drag-over');
  });
}

// ============================================================
// Save Extension Dialog
// ============================================================
function initSaveExtDialog() {
  const overlay = document.getElementById('saveExtOverlay');
  const openBtn = document.getElementById('openSaveExtDialog');
  const closeBtn = document.getElementById('closeSaveExtDialog');
  const cancelBtn = document.getElementById('cancelSaveExt');
  const confirmBtn = document.getElementById('confirmSaveExt');

  openBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    resetSaveForm();
    document.getElementById('extName').focus();
  });

  closeBtn.addEventListener('click', () => overlay.classList.add('hidden'));
  cancelBtn.addEventListener('click', () => overlay.classList.add('hidden'));

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.add('hidden');
  });

  confirmBtn.addEventListener('click', () => {
    const name = document.getElementById('extName').value.trim();
    const system = document.getElementById('extSystem').value.trim();
    const category = document.getElementById('extCategory').value.trim();

    if (!name) {
      showToast('error', '请输入扩展名称');
      document.getElementById('extName').focus();
      return;
    }
    if (name.length > 10) {
      showToast('error', '扩展名称不能超过10个字');
      document.getElementById('extName').focus();
      return;
    }
    if (!system) {
      showToast('error', '请输入所属系统简称');
      document.getElementById('extSystem').focus();
      return;
    }
    if (!category) {
      showToast('error', '请选择或输入分类');
      document.getElementById('extCategory').focus();
      return;
    }

    // Add to data model
    addExtension(name, selectedIcon, category, system);

    overlay.classList.add('hidden');
    showToast('success', `扩展组件「${name}」已保存成功！`);
  });
}

function resetSaveForm() {
  document.getElementById('extName').value = '';
  document.getElementById('extSystem').value = 'WMS';
  document.getElementById('extCategory').value = '未知';
  selectedIcon = 'ri-apps-line';
  document.getElementById('selectedIconDisplay').className = selectedIcon;
  document.getElementById('iconPreview').classList.add('selected');
  document.getElementById('iconPicker').classList.add('hidden');

  // Reset icon picker selection
  document.querySelectorAll('.icon-cell').forEach(c => {
    const iconI = c.querySelector('i');
    if (iconI) {
      c.classList.toggle('selected', iconI.className === selectedIcon);
    } else {
      c.classList.remove('selected');
    }
  });
}

function addExtension(name, icon, categoryName, systemName) {
  // Find or create system group
  let sysGroup = extensionData.find(s => s.system === systemName);
  if (!sysGroup) {
    sysGroup = {
      system: systemName,
      collapsed: false,
      categories: []
    };
    extensionData.push(sysGroup);
  }

  // Find or create category
  let category = sysGroup.categories.find(c => c.name === categoryName);
  if (!category) {
    category = {
      name: categoryName,
      order: sysGroup.categories.length + 1,
      items: []
    };
    sysGroup.categories.push(category);
    // Add to existing categories list
    if (!EXISTING_CATEGORIES.includes(categoryName)) {
      EXISTING_CATEGORIES.push(categoryName);
    }
  }

  // Auto set to last position
  const nextOrder = category.items.length + 1;

  category.items.push({
    name,
    icon,
    order: nextOrder,
    creator: '系统管理员',
    createTime: getFormattedTime()
  });
  saveToLocalStorage();
  renderExtensions();
}

function reorderCategories(draggedCatName, targetCatName, position) {
  let sysGroup = extensionData.find(s => s.categories.some(c => c.name === targetCatName));
  if (!sysGroup) return;

  const draggedIdx = sysGroup.categories.findIndex(c => c.name === draggedCatName);
  const targetIdx = sysGroup.categories.findIndex(c => c.name === targetCatName);

  if (draggedIdx > -1 && targetIdx > -1) {
    const draggedCat = sysGroup.categories[draggedIdx];
    sysGroup.categories.splice(draggedIdx, 1);
    
    let newIdx = sysGroup.categories.findIndex(c => c.name === targetCatName);
    if (position === 'after') {
      newIdx += 1;
    }
    sysGroup.categories.splice(newIdx, 0, draggedCat);

    sysGroup.categories.forEach((cat, index) => {
      cat.order = index + 1;
    });

    saveToLocalStorage();
    renderExtensions();
    // showToast silenced
  }
}

function reorderItems(draggedName, srcCatName, destCatName, targetName, position) {
  let srcSys = extensionData.find(s => s.categories.some(c => c.name === srcCatName));
  let destSys = extensionData.find(s => s.categories.some(c => c.name === destCatName));
  if (!srcSys || !destSys) return;

  const srcCat = srcSys.categories.find(c => c.name === srcCatName);
  const destCat = destSys.categories.find(c => c.name === destCatName);

  if (srcCat && destCat) {
    const draggedIdx = srcCat.items.findIndex(item => item.name === draggedName);
    if (draggedIdx > -1) {
      const draggedItemObj = srcCat.items[draggedIdx];
      srcCat.items.splice(draggedIdx, 1);

      let targetIdx = destCat.items.findIndex(item => item.name === targetName);
      if (position === 'after') {
        targetIdx += 1;
      }
      
      destCat.items.splice(targetIdx, 0, draggedItemObj);

      srcCat.items.forEach((item, idx) => {
        item.order = idx + 1;
      });
      destCat.items.forEach((item, idx) => {
        item.order = idx + 1;
      });

      cleanupEmptyStructures();
      saveToLocalStorage();
      renderExtensions();
      // showToast silenced
    }
  }
}

function moveItemToCategoryEnd(draggedName, srcCatName, destCatName) {
  let srcSys = extensionData.find(s => s.categories.some(c => c.name === srcCatName));
  let destSys = extensionData.find(s => s.categories.some(c => c.name === destCatName));
  if (!srcSys || !destSys) return;

  const srcCat = srcSys.categories.find(c => c.name === srcCatName);
  const destCat = destSys.categories.find(c => c.name === destCatName);

  if (srcCat && destCat) {
    const draggedIdx = srcCat.items.findIndex(item => item.name === draggedName);
    if (draggedIdx > -1) {
      const draggedItemObj = srcCat.items[draggedIdx];
      srcCat.items.splice(draggedIdx, 1);
      destCat.items.push(draggedItemObj);

      srcCat.items.forEach((item, idx) => {
        item.order = idx + 1;
      });
      destCat.items.forEach((item, idx) => {
        item.order = idx + 1;
      });

      cleanupEmptyStructures();
      saveToLocalStorage();
      renderExtensions();
      // showToast silenced
    }
  }
}

function cleanupEmptyStructures() {
  extensionData.forEach(sys => {
    sys.categories = sys.categories.filter(cat => cat.items.length > 0);
  });
  extensionData = extensionData.filter(sys => sys.categories.length > 0);
}

function deleteExtension(categoryName, itemName) {
  itemToDelete = { categoryName, itemName };
  const overlay = document.getElementById('deleteConfirmOverlay');
  overlay.classList.remove('hidden');
}

function executeDeleteExtension(categoryName, itemName) {
  let sysGroup = extensionData.find(s => s.categories.some(c => c.name === categoryName));
  if (!sysGroup) return;

  let category = sysGroup.categories.find(c => c.name === categoryName);
  if (category) {
    category.items = category.items.filter(item => item.name !== itemName);
    cleanupEmptyStructures();
    saveToLocalStorage();
    renderExtensions();
    showToast('success', `已删除扩展组件「${itemName}」`);
  }
}

// ============================================================
// Icon Picker
// ============================================================
let currentIconPickerTarget = 'save'; // 'save' or 'edit'
let tempSelectedIcon = 'ri-apps-line';

function initIconPicker() {
  const openBtn = document.getElementById('openIconPicker');
  const picker = document.getElementById('iconPicker');
  const searchInput = document.getElementById('iconSearchInput');
  const tabs = document.querySelectorAll('.icon-tab');

  function positionPicker(triggerBtn) {
    const rect = triggerBtn.getBoundingClientRect();
    const pickerWidth = 320;
    const pickerHeight = 250;

    let left = rect.left;
    let top = rect.bottom + 6;

    if (left + pickerWidth > window.innerWidth) {
      left = rect.right - pickerWidth;
    }
    if (top + pickerHeight > window.innerHeight) {
      top = rect.top - pickerHeight - 6;
    }

    picker.style.left = left + 'px';
    picker.style.top = top + 'px';
  }

  openBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIconPickerTarget = 'save';
    picker.classList.toggle('hidden');
    if (!picker.classList.contains('hidden')) {
      renderIcons(currentIconCategory);
      positionPicker(openBtn);
      searchInput.focus();
    }
  });

  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.stopPropagation();
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentIconCategory = tab.dataset.iconCategory;
      renderIcons(currentIconCategory);
    });
  });

  // Search
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
      renderFilteredIcons(query);
    } else {
      renderIcons(currentIconCategory);
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!picker.classList.contains('hidden')) {
      const openBtnEdit = document.getElementById('editOpenIconPicker');
      if (!picker.contains(e.target) && !openBtn.contains(e.target) && (!openBtnEdit || !openBtnEdit.contains(e.target))) {
        picker.classList.add('hidden');
      }
    }
  });
}

function renderIcons(category) {
  const grid = document.getElementById('iconGrid');
  const icons = ICON_DATA[category] || [];
  grid.innerHTML = '';

  icons.forEach(icon => {
    const cell = document.createElement('button');
    const currentActiveIcon = (currentIconPickerTarget === 'save' ? selectedIcon : tempSelectedIcon);
    cell.className = 'icon-cell' + (icon === currentActiveIcon ? ' selected' : '');
    cell.innerHTML = `<i class="${icon}"></i>`;
    cell.title = icon.replace('ri-', '').replace(/-line$/, '').replace(/-fill$/, '');
    cell.addEventListener('click', () => selectIcon(icon));
    grid.appendChild(cell);
  });
}

function renderFilteredIcons(query) {
  const grid = document.getElementById('iconGrid');
  grid.innerHTML = '';

  Object.values(ICON_DATA).flat().forEach(icon => {
    if (icon.toLowerCase().includes(query)) {
      const cell = document.createElement('button');
      const currentActiveIcon = (currentIconPickerTarget === 'save' ? selectedIcon : tempSelectedIcon);
      cell.className = 'icon-cell' + (icon === currentActiveIcon ? ' selected' : '');
      cell.innerHTML = `<i class="${icon}"></i>`;
      cell.title = icon.replace('ri-', '').replace(/-line$/, '');
      cell.addEventListener('click', () => selectIcon(icon));
      grid.appendChild(cell);
    }
  });
}

function selectIcon(icon) {
  if (currentIconPickerTarget === 'save') {
    selectedIcon = icon;
    document.getElementById('selectedIconDisplay').className = icon;
    document.getElementById('iconPreview').classList.add('selected');
  } else {
    tempSelectedIcon = icon;
    const editDisplay = document.getElementById('editSelectedIconDisplay');
    const editPreview = document.getElementById('editIconPreview');
    if (editDisplay) editDisplay.className = icon;
    if (editPreview) editPreview.classList.add('selected');
  }

  // Update selection style
  document.querySelectorAll('.icon-cell').forEach(c => {
    const iconI = c.querySelector('i');
    if (iconI) {
      c.classList.toggle('selected', iconI.className === icon);
    }
  });
}

// ============================================================
// Helper functions for Dynamic Combo loading
// ============================================================
function getCategoriesForSystem(systemName) {
  const sysGroup = extensionData.find(s => s.system.toLowerCase() === systemName.toLowerCase().trim());
  if (sysGroup) {
    return sysGroup.categories.map(c => c.name);
  }
  return [];
}

function getExistingSystems() {
  return extensionData.map(s => s.system);
}

// ============================================================
// System Combo Select
// ============================================================
function initSystemCombo() {
  const input = document.getElementById('extSystem');
  const toggle = document.getElementById('comboSystemToggle');
  const dropdown = document.getElementById('comboSystemDropdown');
  const list = document.getElementById('comboSystemList');

  function renderOptions(filter = '') {
    list.innerHTML = '';
    const existingSystems = getExistingSystems();
    const filtered = existingSystems.filter(s =>
      !filter || s.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(sys => {
      const opt = document.createElement('div');
      opt.className = 'combo-option' + (input.value === sys ? ' active' : '');
      opt.textContent = sys;
      opt.addEventListener('click', () => {
        input.value = sys;
        dropdown.classList.add('hidden');
        // Clear category because system changed
        const categoryInput = document.getElementById('extCategory');
        categoryInput.value = '';
      });
      list.appendChild(opt);
    });
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('hidden');
    if (!dropdown.classList.contains('hidden')) {
      renderOptions();
    }
  });

  input.addEventListener('focus', () => {
    dropdown.classList.remove('hidden');
    renderOptions(input.value);
  });

  input.addEventListener('input', () => {
    dropdown.classList.remove('hidden');
    renderOptions(input.value);
    // Clear category because system typed changed
    const categoryInput = document.getElementById('extCategory');
    categoryInput.value = '';
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#comboSystemSelect')) {
      dropdown.classList.add('hidden');
    }
  });
}

// ============================================================
// Category Combo Select
// ============================================================
function initCategoryCombo() {
  const input = document.getElementById('extCategory');
  const toggle = document.getElementById('comboToggle');
  const dropdown = document.getElementById('comboDropdown');
  const list = document.getElementById('comboList');

  function renderOptions(filter = '') {
    list.innerHTML = '';
    const currentSystem = document.getElementById('extSystem').value.trim();
    const systemCategories = getCategoriesForSystem(currentSystem);
    
    const filtered = systemCategories.filter(c =>
      !filter || c.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(cat => {
      const opt = document.createElement('div');
      opt.className = 'combo-option' + (input.value === cat ? ' active' : '');
      opt.textContent = cat;
      opt.addEventListener('click', () => {
        input.value = cat;
        dropdown.classList.add('hidden');
      });
      list.appendChild(opt);
    });
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('hidden');
    if (!dropdown.classList.contains('hidden')) {
      renderOptions();
    }
  });

  input.addEventListener('focus', () => {
    dropdown.classList.remove('hidden');
    renderOptions(input.value);
  });

  input.addEventListener('input', () => {
    dropdown.classList.remove('hidden');
    renderOptions(input.value);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#comboSelect')) {
      dropdown.classList.add('hidden');
    }
  });
}

// ============================================================
// Search
// ============================================================
function initSearch() {
  const input = document.getElementById('extSearchInput');
  const clearBtn = document.getElementById('extSearchClear');
  const resultsContainer = document.getElementById('extSearchResults');
  const resultList = document.getElementById('searchResultList');
  const categoriesEl = document.getElementById('extCategories');
 
  input.addEventListener('input', () => {
    const query = input.value.trim();
    clearBtn.classList.toggle('hidden', !query);
 
    if (!query) {
      resultsContainer.classList.add('hidden');
      categoriesEl.classList.remove('hidden');
      return;
    }
 
    // Fuzzy search — group results by system and category
    const grouped = {};
    extensionData.forEach(sys => {
      const sysMatched = sys.system.toLowerCase().includes(query.toLowerCase());
      sys.categories.forEach(cat => {
        const catMatched = cat.name.toLowerCase().includes(query.toLowerCase());
        
        cat.items.forEach(item => {
          const itemMatched = item.name.toLowerCase().includes(query.toLowerCase());
          
          if (sysMatched || catMatched || itemMatched) {
            if (!grouped[sys.system]) {
              grouped[sys.system] = {};
            }
            if (!grouped[sys.system][cat.name]) {
              grouped[sys.system][cat.name] = [];
            }
            grouped[sys.system][cat.name].push({ 
              ...item, 
              category: cat.name, 
              system: sys.system,
              itemMatched: itemMatched,
              catMatched: catMatched,
              sysMatched: sysMatched
            });
          }
        });
      });
    });
 
    const sysKeys = Object.keys(grouped);
    if (sysKeys.length > 0) {
      resultsContainer.classList.remove('hidden');
      categoriesEl.classList.add('hidden');
      resultList.innerHTML = '';
 
      sysKeys.forEach(sysName => {
        // System Header
        const sysLabel = document.createElement('div');
        sysLabel.className = 'search-result-system-label';
        
        const isSysMatched = sysName.toLowerCase().includes(query.toLowerCase());
        if (isSysMatched) {
          const highlightedSysName = sysName.replace(
            new RegExp(`(${escapeRegex(query)})`, 'gi'),
            '<span class="highlight">$1</span>'
          );
          sysLabel.innerHTML = highlightedSysName;
        } else {
          sysLabel.textContent = sysName;
        }
        resultList.appendChild(sysLabel);
 
        const catKeys = Object.keys(grouped[sysName]);
        catKeys.forEach(catName => {
          // Category Header
          const isCatMatched = catName.toLowerCase().includes(query.toLowerCase());
          const catLabel = document.createElement('div');
          catLabel.className = 'search-result-category-label';
          
          if (isCatMatched) {
            const highlightedCatName = catName.replace(
              new RegExp(`(${escapeRegex(query)})`, 'gi'),
              '<span class="highlight">$1</span>'
            );
            catLabel.innerHTML = highlightedCatName;
          } else {
            catLabel.textContent = catName;
          }
          resultList.appendChild(catLabel);
 
          // Component Grid
          const grid = document.createElement('div');
          grid.className = 'search-result-grid';
 
          grouped[sysName][catName].forEach(r => {
            const el = document.createElement('div');
            el.className = 'search-result-item';
            el.draggable = true;
 
            // Highlight matching text (within truncated name if needed)
            const displayName = r.name.length > 4 ? r.name.substring(0, 4) + '...' : r.name;
            let highlightedName = displayName;
            
            if (r.itemMatched) {
              highlightedName = displayName.replace(
                new RegExp(`(${escapeRegex(query)})`, 'gi'),
                '<span class="highlight">$1</span>'
              );
            }
 
            el.innerHTML = `
              <i class="${r.icon}"></i>
              <span title="${r.name}">${highlightedName}</span>
            `;
 
            // Drag events for search results
            el.addEventListener('dragstart', (e) => {
              draggedItem = el;
              draggedItemData = { name: r.name, category: r.category };
              e.dataTransfer.setData('text/plain', r.name);
              e.dataTransfer.setData('drag-type', 'item');
              e.dataTransfer.effectAllowed = 'move';
              createDragGhost(r.icon, r.name);
              e.dataTransfer.setDragImage(new Image(), 0, 0);
              document.getElementById('canvas').classList.add('drag-over');
            });
            el.addEventListener('dragend', () => {
              draggedItem = null;
              draggedItemData = null;
              removeDragGhost();
              document.getElementById('canvas').classList.remove('drag-over');
            });
 
            grid.appendChild(el);
          });
 
          resultList.appendChild(grid);
        });
      });
    } else {
      resultsContainer.classList.remove('hidden');
      categoriesEl.classList.add('hidden');
      resultList.innerHTML = `
        <div style="padding:20px;text-align:center;color:#86909c;font-size:13px;">
          <i class="ri-search-line" style="font-size:24px;display:block;margin-bottom:8px;opacity:0.4;"></i>
          未找到匹配组件
        </div>
      `;
    }
  });
 
  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearBtn.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    categoriesEl.classList.remove('hidden');
    input.focus();
  });
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ============================================================
// Toast Notifications
// ============================================================
function showToast(type, message) {
  const container = document.getElementById('toastContainer');
  const icons = {
    success: 'ri-checkbox-circle-fill',
    error: 'ri-error-warning-fill',
    info: 'ri-information-fill'
  };

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="${icons[type] || icons.info}"></i>
    <span class="toast__text">${message}</span>
    <button class="toast__close"><i class="ri-close-line"></i></button>
  `;

  toast.querySelector('.toast__close').addEventListener('click', () => removeToast(toast));
  container.appendChild(toast);

  // Auto remove
  setTimeout(() => removeToast(toast), 3500);
}

function removeToast(toast) {
  if (!toast.parentElement) return;
  toast.classList.add('removing');
  setTimeout(() => toast.remove(), 300);
}

// ============================================================
// Export / Import Dialogs
// ============================================================
function initExportDialog() {
  const overlay = document.getElementById('exportOverlay');
  const btnExport = document.getElementById('btnExport');
  const closeBtn = document.getElementById('closeExportDialog');
  const cancelBtn = document.getElementById('cancelExport');
  const confirmBtn = document.getElementById('confirmExport');
  const selectAllCheckbox = document.getElementById('exportSelectAll');
  const tableBody = document.getElementById('exportTableBody');

  const exportSearchInput = document.getElementById('exportSearchInput');

  btnExport.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    exportSearchInput.value = '';
    selectAllCheckbox.checked = true;
    selectAllCheckbox.disabled = false;
    renderExportTable();
  });

  closeBtn.addEventListener('click', () => overlay.classList.add('hidden'));
  cancelBtn.addEventListener('click', () => overlay.classList.add('hidden'));
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.add('hidden');
  });

  selectAllCheckbox.addEventListener('change', () => {
    const visibleCheckboxes = tableBody.querySelectorAll('tr:not(.hidden) .export-row-checkbox');
    visibleCheckboxes.forEach(cb => {
      cb.checked = selectAllCheckbox.checked;
    });
    updateExportSelectedCount();
  });

  function updateExportSelectedCount() {
    const allChecked = tableBody.querySelectorAll('.export-row-checkbox:checked').length;
    document.getElementById('exportSelectedCount').innerHTML = `已选择 <strong class="highlight-count">${allChecked}</strong> 个组件`;
  }

  function applyFilters() {
    const query = exportSearchInput.value.trim().toLowerCase();

    const rows = tableBody.querySelectorAll('tr');
    let visibleCount = 0;
    let visibleCheckedCount = 0;

    rows.forEach(tr => {
      if (tr.querySelector('td[colspan]')) return;

      const checkbox = tr.querySelector('.export-row-checkbox');
      const item = JSON.parse(checkbox.dataset.itemJson);
      
      const sysMatch = item.systemName.toLowerCase().includes(query);
      const catMatch = item.categoryName.toLowerCase().includes(query);
      const nameMatch = item.name.toLowerCase().includes(query);

      if (sysMatch || catMatch || nameMatch) {
        tr.classList.remove('hidden');
        visibleCount++;
        if (checkbox.checked) {
          visibleCheckedCount++;
        }
      } else {
        tr.classList.add('hidden');
      }
    });

    if (visibleCount > 0) {
      selectAllCheckbox.checked = (visibleCheckedCount === visibleCount);
      selectAllCheckbox.disabled = false;
    } else {
      selectAllCheckbox.checked = false;
      selectAllCheckbox.disabled = true;
    }

    updateExportSelectedCount();
  }

  exportSearchInput.addEventListener('input', applyFilters);

  function renderExportTable() {
    tableBody.innerHTML = '';
    
    let allItems = [];
    extensionData.forEach(sys => {
      sys.categories.forEach(cat => {
        cat.items.forEach(item => {
          allItems.push({
            ...item,
            categoryName: cat.name,
            systemName: sys.system
          });
        });
      });
    });

    if (allItems.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--text-secondary);padding:20px;">暂无可导出的扩展组件</td></tr>`;
      updateExportSelectedCount();
      return;
    }

    allItems.forEach((item, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><input type="checkbox" class="export-row-checkbox" checked></td>
        <td>${item.systemName}</td>
        <td>${item.categoryName}</td>
        <td title="${item.name}">${item.name}</td>
        <td>${item.creator || '系统管理员'}</td>
        <td>${item.createTime || '2026-06-18 10:00:00'}</td>
      `;
      
      const cb = tr.querySelector('.export-row-checkbox');
      cb.dataset.itemJson = JSON.stringify(item);
      cb.addEventListener('change', () => {
        const visibleRows = tableBody.querySelectorAll('tr:not(.hidden)');
        let visibleCount = 0;
        let visibleCheckedCount = 0;
        visibleRows.forEach(vr => {
          if (vr.querySelector('td[colspan]')) return;
          const vcb = vr.querySelector('.export-row-checkbox');
          visibleCount++;
          if (vcb.checked) {
            visibleCheckedCount++;
          }
        });
        selectAllCheckbox.checked = (visibleCheckedCount === visibleCount && visibleCount > 0);
        updateExportSelectedCount();
      });

      tableBody.appendChild(tr);
    });

    updateExportSelectedCount();
  }

  confirmBtn.addEventListener('click', () => {
    const checkedCheckboxes = tableBody.querySelectorAll('.export-row-checkbox:checked');
    if (checkedCheckboxes.length === 0) {
      showToast('error', '请至少选择一个扩展组件进行导出');
      return;
    }

    const exportList = [];
    checkedCheckboxes.forEach(cb => {
      const itemData = JSON.parse(cb.dataset.itemJson);
      exportList.push({
        name: itemData.name,
        icon: itemData.icon,
        order: itemData.order,
        category: itemData.categoryName,
        system: itemData.systemName,
        creator: itemData.creator || '系统管理员',
        createTime: itemData.createTime || '2026-06-18 10:00:00'
      });
    });

    const dataStr = JSON.stringify(exportList, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `extension_components_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);

    overlay.classList.add('hidden');
    showToast('success', '导出成功！已下载 JSON 文件');
  });
}

function initImportDialog() {
  const btnImport = document.getElementById('btnImport');
  const fileInput = document.getElementById('importFileInput');

  btnImport.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedList = JSON.parse(event.target.result);
        if (!Array.isArray(importedList)) {
          showToast('error', '导入失败：JSON 数据格式应为数组');
          return;
        }

        let addedCount = 0;
        let updatedCount = 0;

        importedList.forEach(item => {
          if (!item.name || !item.category) {
            return;
          }

          const systemName = item.system || 'WMS';

          let sysGroup = extensionData.find(s => s.system === systemName);
          if (!sysGroup) {
            sysGroup = { system: systemName, categories: [] };
            extensionData.push(sysGroup);
          }

          let category = sysGroup.categories.find(c => c.name === item.category);
          if (!category) {
            category = {
              name: item.category,
              order: sysGroup.categories.length + 1,
              items: []
            };
            sysGroup.categories.push(category);
            if (!EXISTING_CATEGORIES.includes(item.category)) {
              EXISTING_CATEGORIES.push(item.category);
            }
          }

          const existingIdx = category.items.findIndex(it => it.name === item.name);
          if (existingIdx > -1) {
            category.items.splice(existingIdx, 1);
            updatedCount++;
          } else {
            addedCount++;
          }

          category.items.push({
            name: item.name,
            icon: item.icon || 'ri-apps-line',
            order: item.order || (category.items.length + 1),
            creator: item.creator || '系统管理员',
            createTime: item.createTime || getFormattedTime()
          });
        });

        saveToLocalStorage();
        renderExtensions();

        if (updatedCount > 0) {
          showToast('success', `成功导入：新增 ${addedCount} 个，更新覆盖 ${updatedCount} 个扩展组件`);
        } else {
          showToast('success', `成功导入 ${addedCount} 个扩展组件`);
        }

      } catch (err) {
        console.error(err);
        showToast('error', '导入失败：JSON 文件解析出错');
      }
    };

    reader.readAsText(file);
    fileInput.value = '';
  });
}

// ============================================================
// Third Phase Additions (Confirm Delete & Save DB)
// ============================================================

function initDeleteConfirmDialog() {
  const overlay = document.getElementById('deleteConfirmOverlay');
  const closeBtn = document.getElementById('closeDeleteConfirmDialog');
  const cancelBtn = document.getElementById('cancelDeleteConfirm');
  const confirmBtn = document.getElementById('confirmDelete');

  closeBtn.addEventListener('click', () => overlay.classList.add('hidden'));
  cancelBtn.addEventListener('click', () => overlay.classList.add('hidden'));
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.add('hidden');
  });

  confirmBtn.addEventListener('click', () => {
    if (itemToDelete) {
      executeDeleteExtension(itemToDelete.categoryName, itemToDelete.itemName);
      itemToDelete = null;
    }
    overlay.classList.add('hidden');
  });
}

function initSaveDb() {
  const btnSaveDb = document.getElementById('btnSaveDb');
  btnSaveDb.addEventListener('click', () => {
    saveToLocalStorage();
    showToast('success', '保存成功！组件排序及修改已成功保存至数据库。');
  });
}

// ============================================================
// Fifth Phase Additions (Edit Info Dialog & Actions)
// ============================================================
let currentEditTarget = null;

function initEditDialog() {
  const overlay = document.getElementById('editModalOverlay');
  const closeBtn = document.getElementById('closeEditDialog');
  const cancelBtn = document.getElementById('cancelEdit');
  const confirmBtn = document.getElementById('confirmEdit');

  closeBtn.addEventListener('click', () => overlay.classList.add('hidden'));
  cancelBtn.addEventListener('click', () => overlay.classList.add('hidden'));
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.add('hidden');
  });

  confirmBtn.addEventListener('click', () => {
    if (!currentEditTarget) return;

    if (currentEditTarget.type === 'system') {
      const newName = document.getElementById('editSystemName').value.trim();
      if (!newName) {
        showToast('error', '请输入系统名称');
        return;
      }
      executeEditSystem(currentEditTarget.systemName, newName);
    } else if (currentEditTarget.type === 'category') {
      const newName = document.getElementById('editCategoryName').value.trim();
      const targetSystem = document.getElementById('editCategorySystemSelect').value;
      if (!newName) {
        showToast('error', '请输入分类名称');
        return;
      }
      executeEditCategory(currentEditTarget.systemName, currentEditTarget.categoryName, newName, targetSystem);
    } else if (currentEditTarget.type === 'item') {
      const newName = document.getElementById('editItemName').value.trim();
      if (!newName) {
        showToast('error', '请输入组件名称');
        return;
      }
      if (newName.length > 10) {
        showToast('error', '组件名称不能超过10个字');
        return;
      }
      executeEditItem(currentEditTarget.systemName, currentEditTarget.categoryName, currentEditTarget.itemName, newName, tempSelectedIcon);
    }

    overlay.classList.add('hidden');
  });
}

function openEditSystemDialog(systemName) {
  currentEditTarget = { type: 'system', systemName };
  document.getElementById('editModalTitle').textContent = '编辑系统名称';
  
  const body = document.getElementById('editModalBody');
  body.innerHTML = `
    <div class="form-group">
      <label class="form-label required">系统名称</label>
      <input type="text" class="form-input" id="editSystemName" value="${systemName}" placeholder="请输入系统名称" maxlength="20">
    </div>
  `;
  
  document.getElementById('editModalOverlay').classList.remove('hidden');
  document.getElementById('editSystemName').focus();
}

function openEditCategoryDialog(systemName, categoryName) {
  currentEditTarget = { type: 'category', systemName, categoryName };
  document.getElementById('editModalTitle').textContent = '编辑分类';

  // Build system selection options
  const systems = getExistingSystems();
  let systemOptions = '';
  systems.forEach(sys => {
    systemOptions += `<option value="${sys}" ${sys === systemName ? 'selected' : ''}>${sys}</option>`;
  });

  const body = document.getElementById('editModalBody');
  body.innerHTML = `
    <div class="form-group">
      <label class="form-label required">分类名称</label>
      <input type="text" class="form-input" id="editCategoryName" value="${categoryName}" placeholder="请输入分类名称" maxlength="20">
    </div>
    <div class="form-group">
      <label class="form-label required">所属系统</label>
      <select class="prop-select" id="editCategorySystemSelect" style="width:100%; border:1px solid var(--border); border-radius:var(--radius-sm); padding:7px 10px;">
        ${systemOptions}
      </select>
    </div>
  `;

  document.getElementById('editModalOverlay').classList.remove('hidden');
  document.getElementById('editCategoryName').focus();
}

function openEditItemDialog(systemName, categoryName, itemName, itemIcon) {
  currentEditTarget = { type: 'item', systemName, categoryName, itemName, itemIcon };
  tempSelectedIcon = itemIcon;
  document.getElementById('editModalTitle').textContent = '编辑扩展组件';

  const body = document.getElementById('editModalBody');
  body.innerHTML = `
    <div class="form-group">
      <label class="form-label required">扩展组件名称</label>
      <input type="text" class="form-input" id="editItemName" value="${itemName}" placeholder="请输入组件名称" maxlength="10">
    </div>
    <div class="form-group">
      <label class="form-label required">图标</label>
      <div class="icon-selector" id="editIconSelector">
        <div class="icon-selector__preview selected" id="editIconPreview">
          <i class="${itemIcon}" id="editSelectedIconDisplay"></i>
        </div>
        <button class="icon-selector__btn" id="editOpenIconPicker">
          选择图标
          <i class="ri-arrow-down-s-line"></i>
        </button>
      </div>
    </div>
  `;

  const editOpenIconPicker = document.getElementById('editOpenIconPicker');
  editOpenIconPicker.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIconPickerTarget = 'edit';
    const picker = document.getElementById('iconPicker');
    const searchInput = document.getElementById('iconSearchInput');
    picker.classList.toggle('hidden');
    if (!picker.classList.contains('hidden')) {
      renderIcons(currentIconCategory);
      
      const rect = editOpenIconPicker.getBoundingClientRect();
      const pickerWidth = 320;
      const pickerHeight = 250;
      let left = rect.left;
      let top = rect.bottom + 6;
      if (left + pickerWidth > window.innerWidth) {
        left = rect.right - pickerWidth;
      }
      if (top + pickerHeight > window.innerHeight) {
        top = rect.top - pickerHeight - 6;
      }
      picker.style.left = left + 'px';
      picker.style.top = top + 'px';
      searchInput.focus();
    }
  });

  document.getElementById('editModalOverlay').classList.remove('hidden');
  document.getElementById('editItemName').focus();
}

function executeEditSystem(oldName, newName) {
  if (oldName === newName) return;

  let destSys = extensionData.find(s => s.system === newName);
  let srcSys = extensionData.find(s => s.system === oldName);

  if (srcSys) {
    if (destSys) {
      srcSys.categories.forEach(srcCat => {
        let destCat = destSys.categories.find(c => c.name === srcCat.name);
        if (destCat) {
          srcCat.items.forEach(item => {
            if (!destCat.items.some(i => i.name === item.name)) {
              item.order = destCat.items.length + 1;
              destCat.items.push(item);
            }
          });
        } else {
          srcCat.order = destSys.categories.length + 1;
          destSys.categories.push(srcCat);
        }
      });
      extensionData = extensionData.filter(s => s.system !== oldName);
    } else {
      srcSys.system = newName;
    }
    cleanupEmptyStructures();
    saveToLocalStorage();
    renderExtensions();
    showToast('success', `系统已成功修改为「${newName}」`);
  }
}

function executeEditCategory(systemName, oldName, newName, targetSystemName) {
  let srcSys = extensionData.find(s => s.system === systemName);
  if (!srcSys) return;

  let category = srcSys.categories.find(c => c.name === oldName);
  if (!category) return;

  if (systemName === targetSystemName) {
    if (oldName !== newName) {
      let destCat = srcSys.categories.find(c => c.name === newName);
      if (destCat) {
        category.items.forEach(item => {
          if (!destCat.items.some(i => i.name === item.name)) {
            item.order = destCat.items.length + 1;
            destCat.items.push(item);
          }
        });
        srcSys.categories = srcSys.categories.filter(c => c.name !== oldName);
      } else {
        category.name = newName;
      }
    }
  } else {
    let destSys = extensionData.find(s => s.system === targetSystemName);
    if (!destSys) {
      destSys = { system: targetSystemName, collapsed: false, categories: [] };
      extensionData.push(destSys);
    }

    srcSys.categories = srcSys.categories.filter(c => c.name !== oldName);

    let destCat = destSys.categories.find(c => c.name === newName);
    if (destCat) {
      category.items.forEach(item => {
        if (!destCat.items.some(i => i.name === item.name)) {
          item.order = destCat.items.length + 1;
          destCat.items.push(item);
        }
      });
    } else {
      category.name = newName;
      category.order = destSys.categories.length + 1;
      destSys.categories.push(category);
    }

    if (srcSys.categories.length === 0) {
      extensionData = extensionData.filter(s => s.system !== systemName);
    }
  }

  cleanupEmptyStructures();
  saveToLocalStorage();
  renderExtensions();
  showToast('success', `分类已成功修改`);
}

function executeEditItem(systemName, categoryName, oldName, newName, newIcon) {
  let sys = extensionData.find(s => s.system === systemName);
  if (!sys) return;

  let cat = sys.categories.find(c => c.name === categoryName);
  if (!cat) return;

  let item = cat.items.find(i => i.name === oldName);
  if (item) {
    item.name = newName;
    item.icon = newIcon;
    saveToLocalStorage();
    renderExtensions();
    showToast('success', `组件「${oldName}」已修改成功`);
  }
}
