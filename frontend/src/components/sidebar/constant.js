import { RiStackLine } from 'react-icons/ri';
import { MdOutlineHistory } from 'react-icons/md';
import { IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5';

import { IoMdHeartEmpty } from 'react-icons/io';
import { useAuth } from '../../contexts/AccountContext';
import { useNavigate } from 'react-router-dom';

const sidebarItems = [
  {
    id: 1,
    icon: <RiStackLine className="sidebar-icon" />,
    icon_actived: <RiStackLine className="sidebar-icon actived" />,
    label: 'Bảng điều khiển',
    route: '/dashboard',
  },
  {
    id: 2,
    icon: <MdOutlineHistory className="sidebar-icon" />,
    icon_actived: <MdOutlineHistory className="sidebar-icon actived" />,
    label: 'Lịch sử đơn hàng',
    route: '/history',
  },
  {
    id: 3,
    icon: <IoMdHeartEmpty className="sidebar-icon" />,
    icon_actived: <IoMdHeartEmpty className="sidebar-icon actived" />,
    label: 'Danh sách món ăn đã thích',
    route: '/wishlist',
  },
  {
    id: 4,
    icon: <IoSettingsOutline className="sidebar-icon" />,
    icon_actived: <IoSettingsOutline className="sidebar-icon actived" />,
    label: 'Cài đặt',
    route: '/setting',
  },
  {
    id: 5,
    icon: <IoLogOutOutline className="sidebar-icon" />,
    icon_actived: <IoLogOutOutline className="sidebar-icon actived" />,
    label: 'Log-out',
  },
];

export default sidebarItems;
