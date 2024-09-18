import { api_assets_get } from "@/config/api-links";
import axios from "axios";

export const getAssets = async () => {
  try {
    const {
      data: { result },
    } = await axios(api_assets_get);
    return result;
  } catch (e) {
    return [];
  }
};
