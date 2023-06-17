import TR from "@/components/UIKit/Table/TR";
import Td from "@/components/UIKit/Table/Td";
import UITable from "@/components/UIKit/Table/UITable";
import MainLayout from "@/layout/MainLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";

const OrderList = () => {
  const [order, setOrder] = useState([]);
  const getOrderList = () => {
    const URL =
      "https://gist.githubusercontent.com/ZiadAbdulBari/475811b1fba1c48fc6801738e79bfd9b/raw/5c6cb8c7411d72034fac471011e06782940c2dfd/data.json";
    axios.get(URL).then((response) => {
      setOrder(response.data.orders);
    });
  };
  useEffect(() => {
    getOrderList();
  }, []);
  return (
    <MainLayout>
        {
            order.length>0 &&
                <UITable
                    head={["Order Id", "Product", "Customer", "Total Price", "Order Date"]}
                >
                    {
                        order.map((product,index)=>{
                            return(
                                <TR key={index}>
                                    <Td>{product.order_id}</Td>
                                    <Td>{product.product}</Td>
                                    <Td>{product.customer}</Td>
                                    <Td>{product.total_price}</Td>
                                    <Td>{product.order_date}</Td>
                                </TR>
                            )
                        })

                    }
                </UITable>
        }
    </MainLayout>
  );
};

export default OrderList;
