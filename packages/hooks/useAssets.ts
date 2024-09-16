import { api_assets_get } from "@/config/api-links";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useAssets = () => {
  const [assets, setAssets] = useState();

  const getAssets = useCallback(async () => {
    try {
      const {
        data: { result },
      } = await axios(api_assets_get);
      setAssets(result);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    getAssets();
  }, []);

  return {
    assets: assets,
  };
};

export default useAssets;
