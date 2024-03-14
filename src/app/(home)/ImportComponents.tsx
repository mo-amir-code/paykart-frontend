"use client"
import { useGetBestCombosProductsQuery, useGetLatestProductsQuery, useGetTopProductsQuery } from "@/redux/queries/products/productsAPI";
import Categories from "../../components/categories";
import FooterBanner from "../../components/footerBanner/FooterBanner";
import HeroSlider from "../../components/heroSlider";
import TopProducts from "../../components/topProducts";
import { memo, useEffect, useRef, useState } from "react";


const ImportComponents = () => {
  const [shouldLatestFetch, setShouldLatestFetch] = useState<boolean>(true);
  const [shouldCombosFetch, setShouldCombosFetch] = useState<boolean>(true);
  const latestRef = useRef(null);
  const comboRef = useRef(null);
  const {isLoading:isTopLoading, data:topData} = useGetTopProductsQuery("fetch");
  const {isLoading:isLatestLoading, data:latestData} = shouldLatestFetch? useGetLatestProductsQuery("fetch") : {isLoading: true, data:null};
  const {isLoading:isCombosLoading, data:combosData} = shouldCombosFetch? useGetBestCombosProductsQuery("fetch") : {isLoading: true, data:null};

  useEffect(() => {
    const latestObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setShouldLatestFetch(true);
      }
    });

    const comboObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setShouldCombosFetch(true);
      }
    });

    if (latestRef.current) {
      latestObserver.observe(latestRef.current); // Observe the element
    }

    if (comboRef.current) {
      comboObserver.observe(comboRef.current); // Observe the element
    }


    return () => {
      latestObserver.disconnect(); // Clean up observer on unmount
      comboObserver.disconnect(); // Clean up observer on unmount
    };
  }, [latestRef, comboRef]);


  return (
    <>
      <HeroSlider />
      <Categories />
      <TopProducts products={topData?.success? topData.data : []} isLoading={isTopLoading} text="Top Products" />
      <TopProducts products={latestData?.success? latestData.data : []} isLoading={isLatestLoading} text="Latest Products"/>
      <TopProducts products={combosData?.success? combosData.data : []} isLoading={isCombosLoading} text="Best Combo's" />
      <FooterBanner />
    </>
  );
};

export default memo(ImportComponents);