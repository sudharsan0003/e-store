import Banner from '../Components/Home/Banner';
import Product from '../Components/Home/Product';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className='w-full -mt-32  py-10'>
        <Product />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
