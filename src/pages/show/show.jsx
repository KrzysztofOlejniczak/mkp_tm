import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CloseBtn from "../../components/closeBtn/closeBtn";
import Device from "../../components/device/device";
import style from "./show.module.css";
import api from "../../api/show.json";
import { nanoid } from "nanoid";

const Show = () => {
  const { showId } = useParams();
  const [data, setData] = useState([]);
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

  // if (loading) return <div>Loading...</div>;

  return (
    <>
      <CloseBtn />
      <h2 className={style.showTitle}>
        {api.find((e) => e.id === showId).title}
      </h2>
      <div className={style.container}>
        <div>
          {data.slice(0, Math.ceil(data.length / 2)).map((e) => {
            return (
              <Device
                key={nanoid(5)}
                nr={e.channel}
                name={e.name}
                isMic={e.isMic}
                color={e.color}
              />
            );
          })}
        </div>
        <div>
          {data.slice(Math.ceil(data.length / 2)).map((e) => {
            return (
              <Device
                key={nanoid(5)}
                nr={e.channel}
                name={e.name}
                isMic={e.isMic}
                color={e.color}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Show;
