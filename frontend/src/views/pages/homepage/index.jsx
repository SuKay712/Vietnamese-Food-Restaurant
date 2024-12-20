import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BiFoodMenu } from 'react-icons/bi';
import { IMAGES } from '../../../constants/images';
import { ICONS } from '../../../constants/icons';
import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import HotItemsAPI from '../../../api/hotItemAPI';
import UploadModal from '../../../components/detect_modal/UploadModal';
import RecommendModal from '../../../components/recommend_modal/RecommendModal';
import { useNavigate } from 'react-router-dom';
import CategoryAPI from '../../../api/categoryAPI';
function HomePage() {
  const [startIndex, setStartIndex] = useState(0);
  const [hotItems, setHotItems] = useState([]);
  const navigate = useNavigate();
  const [foodItems, setFoodItems] = useState([]);
  const fetchHotItems = async () => {
    try {
      const response = await HotItemsAPI.getHotItems();
      setHotItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCategory = async () => {
    try {
      const response = await CategoryAPI.getListCategories(null);
      setFoodItems(response.data.categories.categories);
      console.log(response.data.categories.categories);
    } catch (error) {}
  };
  useEffect(() => {
    fetchHotItems();
    fetchCategory();
  }, []);
  const handleOrderNow = (itemId) => {
    navigate(`/food/${itemId}`);
  };
  const handelItems = () => {
    navigate('/items?isFood=true');
  };
  function formatPriceRange(input) {
    let formattedString = input.replace(' VND - ', ' ~ ');

    formattedString = formattedString.replace(' VND', 'đ');

    return formattedString;
  }
  //   Slide Food
  const itemsToShow = 5;
  const maxIndex = hotItems.length - itemsToShow;
  const handleNext = () => {
    if (startIndex < maxIndex) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  //   Category Food
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;
  const maxCategoryIndex = foodItems.length - itemsPerPage;
  const handleCategoryNext = () => {
    if (currentIndex < maxCategoryIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleCategoryPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  //   Features
  const featureList = [
    { icon: ICONS.icon_feature1, text: 'Giảm giá\nMỗi ngày' },
    { icon: ICONS.icon_feature2, text: 'Theo dõi\nTrực tiếp' },
    { icon: ICONS.icon_feature3, text: 'Giao hàng\nNhanh chóng' },
  ];

  //Show details item

  const detailItems = [
    {
      title: 'Tinh Hoa Ẩm Thực Việt Nam',
      body: 'Ẩm thực Việt Nam nổi tiếng với sự đa dạng và phong phú, phản ánh nét văn hóa lâu đời của đất nước. Các món ăn truyền thống không chỉ chú trọng đến hương vị mà còn cân bằng giữa các yếu tố dinh dưỡng, tạo nên sự hài hòa giữa nguyên liệu tươi ngon và cách chế biến tinh tế. Đây là một phần không thể thiếu trong đời sống hàng ngày cũng như các dịp lễ hội.',
      image: IMAGES.img_show1,
      reverse: false,
    },
    {
      title: 'Món Ngon Đường Phố Việt Nam',
      body: 'Ẩm thực đường phố Việt Nam luôn để lại ấn tượng đặc biệt cho bất kỳ ai từng trải nghiệm. Những món ăn đơn giản nhưng đậm đà, được bán dọc các con phố, không chỉ mang lại sự tiện lợi mà còn thể hiện tinh thần sáng tạo trong cách chế biến. Mỗi món ăn đều chứa đựng câu chuyện văn hóa, phong tục và truyền thống ẩm thực của từng vùng miền.',
      image: IMAGES.img_show2,
      reverse: true,
    },
    {
      title: 'Sự Gắn Kết Văn Hóa Qua Ẩm Thực',
      body: 'Những bữa ăn truyền thống của Việt Nam thường không chỉ là lúc thưởng thức món ngon mà còn là dịp để gắn kết gia đình và cộng đồng. Dù là ngày thường hay trong các dịp lễ hội, mỗi món ăn đều được chế biến với tâm huyết, thể hiện sự trân trọng giá trị truyền thống. Đây là cách mà ẩm thực góp phần duy trì và truyền tải văn hóa qua các thế hệ.',
      image: IMAGES.img_show3,
      reverse: false,
    },
  ];
  return (
    <div className="frame-wrapper">
      <div className="frame-body">
        <section className="header-section">
          <div className="header-content">
            <div className="content">
              <h1>Khám phá hương vị Việt</h1>
              <p>
                Chỉ với vài cú click, bạn sẽ bước vào hành trình khám phá những món ăn đậm chất hương vị Việt Nam. Từ
                các món ngon đặc sản của mọi miền đất nước, đến những hương vị thân thuộc hàng ngày, tất cả đều có sẵn
                và giao hàng tận nơi một cách nhanh chóng và tiện lợi.
              </p>
            </div>
            <Link to="/items?isFood=true" className="show-shop">
              ĐẶT NGAY
            </Link>
          </div>
          <div className="header-image">
            <img src={IMAGES.image_bgr} alt="header" />
          </div>
        </section>

        <div className="container-work">
          <h1 className="title-work">Cách hoạt động</h1>
          <div className="features-work">
            <div className="feature-work">
              <img src={ICONS.icon_location} alt="Select Delivery Location" />
              <div className="feature-title-work">Chọn địa điểm giao hàng</div>
            </div>
            <div className="feature-work">
              <img src={ICONS.icon_noti} alt="Select Preferred Dishes" />
              <div className="feature-title-work">Chọn những món ăn bạn thích</div>
            </div>
            <div className="feature-work">
              <img src={ICONS.icon_invoice} alt="Make Payment" />
              <div className="feature-title-work">Thanh toán</div>
            </div>
            <div className="feature-work">
              <img src={ICONS.icon_donut} alt="Enjoy Your Meal" />
              <div className="feature-title-work">Thưởng thức bữa ăn</div>
            </div>
          </div>
        </div>

        <div className="popular-items-container">
          <h1 className="popular-title">Những sản phẩm phổ biến</h1>
          <div className="slider-container">
            <button className="slider-button" onClick={handlePrev}>
              <MdKeyboardArrowLeft />
            </button>
            <div className="card-container-wrapper">
              <div
                className="card-container"
                style={{
                  transform: `translateX(-${startIndex * 239 + 16}px)`,
                  transition: 'transform 0.5s ease-in-out',
                }}
              >
                {hotItems.map((item, index) => (
                  <div className="card" key={index}>
                    <img src={item.images[0]} alt={item.name} className="card-image" />
                    <div className="card-details">
                      <h3 className="card-name">{item.name}</h3>
                      <div className="card-category">
                        <BiFoodMenu />
                        <span>{item.regional}</span>
                      </div>
                      <div className="card-price">{formatPriceRange(item.ammount_of_money)}</div>
                    </div>
                    <button className="order-now-button" onClick={() => handleOrderNow(item.id)}>
                      Đặt ngay
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <button className="slider-button" onClick={handleNext}>
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>

        <div className="search-by-food-container">
          <div className="search-by-food-title-buttons">
            <h1 className="search-by-food-search-title">Tìm kiếm món ăn của bạn</h1>
            <div className="search-by-food-buttons">
              <button className="search-by-food-view-all-button" onClick={handelItems}>
                View All <MdKeyboardArrowRight />
              </button>
              <div className="search-by-food-slider-buttons">
                <button className="search-by-food-slider-button" onClick={handleCategoryPrev}>
                  <MdKeyboardArrowLeft />
                </button>
                <button className="search-by-food-slider-button" onClick={handleCategoryNext}>
                  <MdKeyboardArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="food-items-wrapper">
            <div className="food-items">
              {foodItems.map((item, index) => (
                <div
                  className="food-item"
                  key={index}
                  style={{
                    transform: `translateX(-${currentIndex * 196 + 32}px)`,
                    transition: 'transform 0.5s ease-in-out',
                  }}
                  onClick={() => navigate(`/items?category=${item.id}&isFood=${item.isFood}`)}
                >
                  <img src={item.image} alt={item.name} className="food-photo" />
                  <span className="food-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="features-container">
          <div className="features-card">
            {featureList.map((feature, index) => (
              <React.Fragment key={index}>
                <div className="feature">
                  <img src={feature.icon} alt="Feature Icon" className="feature-icon" />
                  <div className="feature-text">{feature.text}</div>
                </div>
                {index < featureList.length - 1 && <div className="divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="system-show-container">
          <img src={IMAGES.background} alt="" className="background" />
          <div className="image-section">
            <img src={IMAGES.appdetect} alt="Light iPhone" className="phone-image" />
          </div>
          <div className="text-section">
            <h1 className="title">Hệ thống nhận diện và gợi ý món ăn</h1>
            <p className="body-text">
              Bạn không biết hôm nay ăn gì. Bạn muốn mua một món ăn bạn thấy nhưng không biết nó tên gì. Đừng lo lắng.
              Với hệ thống nhận diện và gợi ý món ăn sẽ giúp bạn tìm ra được những loại món ăn phù hợp nhất với bạn. Hãy
              khám phá ngay !!!
            </p>
            <div className="button-group">
              <UploadModal className="detect-button" />
              <RecommendModal className="suggest-button" />
            </div>
          </div>
        </div>

        <div className="details-container">
          {detailItems.map((item, index) => (
            <div className={`details-card ${item.reverse ? 'reverse' : ''}`} key={index}>
              {!item.reverse && (
                <div className="card-left">
                  <div className="text-content">
                    <h2 className="card-title">{item.title}</h2>
                    <p className="card-body">{item.body}</p>
                  </div>
                  <button className="order-button" onClick={handelItems}>
                    Khám phá ngay <MdKeyboardArrowRight />
                  </button>
                </div>
              )}
              <img src={item.image} alt="Detail Image" className="card-image-show" />
              {item.reverse && (
                <div className="card-right">
                  <div className="text-content">
                    <h2 className="card-title">{item.title}</h2>
                    <p className="card-body">{item.body}</p>
                  </div>
                  <button className="order-button" onClick={handelItems}>
                    Khám phá ngay <MdKeyboardArrowRight />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
