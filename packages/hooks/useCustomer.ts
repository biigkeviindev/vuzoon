import { api_customer_get } from "@/config/api-links";
import { Customer } from "@/types/customer";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useCallback, useEffect, useState } from "react";

const useCustomer = () => {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const { data: session } = useSession();

  const getCustomer = useCallback(async () => {
    try {
      const {
        data: { result },
      } = await axios.post(api_customer_get, {
        email: session?.user.email,
      });
      setCustomer(result);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    getCustomer();
  }, []);

  return {
    customer,
    getCustomer,
  };
};

export default useCustomer;
