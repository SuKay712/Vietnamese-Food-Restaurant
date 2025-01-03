import UserSidebar from '../../../components/sidebar/UserSidebar';
import { Spin, Table } from 'antd';
import { toast } from 'react-toastify';
import { useCart } from '../../../contexts/CartContext';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';
import wishlistAPI from '../../../api/wishlistAPI';
import { useEffect, useState } from 'react';
import { tableColumns } from './constant';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState();
  const { addToCart } = useCart();
  const [selectedSizes, setSelectedSizes] = useState({}); // Trạng thái lưu selectedSizeId cho mỗi itemId
  const [loading, setLoading] = useState();
  const fetchWishlist = async () => {
    try {
      setLoading(true);
      const item = await wishlistAPI.getWishlist();
      let data = item.data;
      setWishlist(
        data.map((product) => ({
          itemId: product.item.id,
          name: product.item.name,
          image: product.item.images[0],
          itemSizes: product.item.itemSizes,
          availability: product.item.availability.toUpperCase(),
          price: product.item.itemSizes[0]?.price,
        })),
      );
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Wishlists:', error);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const handleSizeChange = (value, itemId) => {
    setSelectedSizes((prevSelectedSizes) => ({
      ...prevSelectedSizes,
      [itemId]: value,
    }));

    setWishlist((prevWishlist) =>
      prevWishlist.map((product) =>
        product.itemId === itemId
          ? { ...product, price: product.itemSizes.find((size) => size.id === value).price }
          : product,
      ),
    );
  };
  const handleAddToCart = async (itemId, sizeId) => {
    const selectedItem = wishlist.find((item) => item.itemId === itemId);
    const selectedSize = selectedItem?.itemSizes.find((size) => size.id === sizeId);
    console.log(selectedSize.id);
    if (selectedSize) {
      const formData = {
        itemSizes: [
          {
            itemSizeId: selectedSize.id,
            quantity: 1,
          },
        ],
      };
      try {
        addToCart(formData);
        toast.success(`${selectedItem.name} has been added to your cart!`);
      } catch (error) {
        console.error('Error adding to cart:', error);
        toast.error('Failed to add item to cart.');
      }
    }
  };

  return (
    <div className="wishlist">
      <div className="d-flex justify-content-center">
        <UserSidebar activedLabel={3} />
        <div className="wishlist-container">
          {loading ? (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
              <Spin size="large" />
            </div>
          ) : (
            <Table
              scroll={{ x: 400 }}
              dataSource={wishlist}
              columns={tableColumns(handleSizeChange, handleAddToCart, selectedSizes)}
              pagination={false}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
