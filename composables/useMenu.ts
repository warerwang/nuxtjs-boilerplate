export interface SubMenuItem {
  id: string
  title: string
  path: string
}

export interface MenuItem {
  id: string
  title: string
  expanded: boolean
  children: SubMenuItem[]
}

export const useMenu = () => {
  const menuItems = ref<MenuItem[]>([
    {
      id: 'menu1',
      title: '菜单一',
      expanded: true,
      children: [
        { id: 'menu1-1', title: '子菜单 1-1', path: '/menu1/item1' },
        { id: 'menu1-2', title: '子菜单 1-2', path: '/menu1/item2' },
        { id: 'menu1-3', title: '子菜单 1-3', path: '/menu1/item3' }
      ]
    },
    {
      id: 'menu2',
      title: '菜单二',
      expanded: false,
      children: [
        { id: 'menu2-1', title: '子菜单 2-1', path: '/menu2/item1' },
        { id: 'menu2-2', title: '子菜单 2-2', path: '/menu2/item2' }
      ]
    },
    {
      id: 'menu3',
      title: '菜单三',
      expanded: false,
      children: [
        { id: 'menu3-1', title: '子菜单 3-1', path: '/menu3/item1' },
        { id: 'menu3-2', title: '子菜单 3-2', path: '/menu3/item2' },
        { id: 'menu3-3', title: '子菜单 3-3', path: '/menu3/item3' }
      ]
    }
  ])

  const toggleMenu = (id: string) => {
    const item = menuItems.value.find(m => m.id === id)
    if (item) {
      item.expanded = !item.expanded
    }
  }

  return {
    menuItems,
    toggleMenu
  }
}
