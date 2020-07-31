import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';
import Shop from '../Shop/Shop';
import axios from 'axios';
import loader from '../../assets/loader.gif';
import Loader from '../../components/Layout/Loader';

import './styles.css';

const Shops = (props) => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterShops, setFilterShops] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilterShops(
      shops.filter((shop) =>
        shop.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, shops]);

  const fetchData = async () => {
    setLoading(true);
    const reqParams = {
      searchTerm: '',
      requestPage: 1,
      pageSize: 16,
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const URL = `https://service.tlvmall.com/api/search/search`;
    try {
      const response = await axios.post(URL, config);
      await setShops(response.data.body.items);
      console.log('shops', shops);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const showShops = !loading ? (
    filterShops.map((item, index) => (
      <div className="card" key={index}>
        <Shop
          key={index}
          imageUrl={item.imageUrl}
          name={item.name}
          floorName={item.moreInfo.floorName}
        />
      </div>
    ))
  ) : (
    <Loader />
  );
  return (
    <div>
      <Form onChange={handleChange} value={search} />
      <div className="contianer">{showShops}</div>
    </div>
  );
};

export default Shops;
