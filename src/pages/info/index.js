import { useEffect, useState } from "react";
import axios from "axios";
import {useRouter} from "next/router";

const InfoPage = () => {
  const [infoData, setInfoData] = useState(null);
  const router = useRouter();
  useEffect(() => {
    // 使用 Axios 发起 GET 请求获取数据
    if(router.isReady){
      axios.get(`http://api.airobotoedu.com/api/admin/info/get_info_by_code?code=${router.query.code}`)
        .then((response) => {
          // 成功获取数据后，更新 infoData 状态
          if (response.data && response.data.data) {
            setInfoData(response.data.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }

  }, []);

  return (
    <div>
      <h1>Information</h1>
      {infoData ? (
        <div>
          <h2>Name: {infoData.name}</h2>
          <p>Description: {infoData.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

InfoPage.authGuard = false;

export default InfoPage;
