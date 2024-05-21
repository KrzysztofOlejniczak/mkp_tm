import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CloseBtn from "../../components/closeBtn/closeBtn";
import Device from "../../components/device/device";
import style from "./show.module.css";

const Show = () => {
  const { showId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/show${showId}.json`);
        setData(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [showId]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <CloseBtn />
      {/* Show id: {showId} */}
      {/* {console.log(data)} */}
      <h2 className={style.showTitle}>DRACULA</h2>
      <div className={style.container}>
        <div className={style.half}>
          {data.slice(0, Math.ceil(data.length / 2)).map((e) => {
            return <Device key={e.channel} nr={e.channel} name={e.name} />;
          })}
        </div>
        <div className={style.half}>
          {data.slice(Math.ceil(data.length / 2)).map((e) => {
            return <Device key={e.channel} nr={e.channel} name={e.name} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Show;
