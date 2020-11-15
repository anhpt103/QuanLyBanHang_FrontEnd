export const MENU_OBJ: any[] = [
  {
    level: 1,
    title: 'Biểu đồ',
    icon: 'dashboard',
    open: false,
    selected: false,
    disabled: false,
    link: '/dashboard',
  },
  {
    level: 1,
    title: 'Danh mục',
    icon: 'ordered-list',
    open: true,
    selected: false,
    disabled: false,
    children: [
      {
        level: 2,
        title: 'Hàng hóa',
        icon: 'shopping',
        open: false,
        selected: false,
        disabled: false,
        link: '/category/product',
      },
      {
        level: 2,
        title: 'Phòng hát',
        icon: 'audio',
        selected: false,
        disabled: false,
        link: '/category/room',
      },
      {
        level: 2,
        title: 'Nhà cung cấp',
        icon: 'contacts',
        selected: false,
        disabled: false,
        link: '/category/supplier',
      },
      {
        level: 2,
        title: 'Đơn vị tính',
        icon: 'calculator',
        selected: false,
        disabled: false,
        link: '/welcome',
      },
      {
        level: 2,
        title: 'Loại hàng',
        icon: 'plus-circle',
        selected: false,
        disabled: false,
        link: '/welcome',
      },
      {
        level: 2,
        title: 'Nhóm hàng',
        icon: 'group',
        selected: false,
        disabled: false,
        link: '/welcome',
      },
    ],
  },
  {
    level: 1,
    title: 'Nghiệp vụ',
    icon: 'unordered-list',
    open: true,
    selected: false,
    disabled: false,
    children: [
      {
        level: 2,
        title: 'Nghiệp vụ phòng hát',
        icon: 'appstore-add',
        selected: false,
        disabled: false,
        link: '/welcome',
      },
      {
        level: 2,
        title: 'Nhập hàng',
        icon: 'enter',
        selected: false,
        disabled: false,
        link: '/welcome',
      },
      {
        level: 2,
        title: 'Kiểm kê hàng',
        icon: 'account-book',
        selected: false,
        disabled: false,
        link: '/welcome',
      },
    ],
  },
  {
    level: 1,
    title: 'Báo cáo',
    icon: 'pie-chart',
    open: true,
    selected: false,
    disabled: false,
    children: [
      {
        level: 2,
        title: 'Báo cáo đặt phòng',
        icon: 'sliders',
        selected: false,
        disabled: false,
        link: '/welcome',
      },
      {
        level: 2,
        title: 'Báo cáo nghiệp vụ phòng',
        icon: 'home',
        selected: false,
        disabled: false,
        link: '/welcome',
      },
      {
        level: 2,
        title: 'Báo cáo tồn hàng',
        icon: 'import',
        selected: false,
        disabled: false,
        link: '/welcome',
      },
      {
        level: 2,
        title: 'Báo cáo kiểm kê',
        icon: 'interaction',
        selected: false,
        disabled: false,
        link: '/welcome',
      },
    ],
  },
];
