"use client";
import React, { useEffect, useState } from "react";
import Container from "./Component/Container";
import ImageHeader from "./Component/ImageHeader";
import { motion } from "framer-motion";
import MenusGrid from "./Component/MenusGrid";
import {useBrowseMenuStore} from "@/app/stores/BrowseMenuStore"
// import Image from 'next/image';

const Home = () => {
  const { isFetching,  browseMenus,getCategorizedMenu } = useBrowseMenuStore();
  const [hasEffectRun, setHasEffectRun] = useState(false);

  console.log("Home called with value of effect",hasEffectRun)

  useEffect(() => {
    if (!hasEffectRun) {
      setHasEffectRun(true);
      getCategorizedMenu()
    }
    return function (){
      console.log("Clean up called")
    }
  },[hasEffectRun,getCategorizedMenu]);

  if (isFetching) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <ImageHeader
        title="Menus"
        subtitle="Discover our seasonal menus that delight your taste buds!"/>
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="my-8"
        >
          <MenusGrid  browseMenus={browseMenus}/>
        </motion.div>
      </Container>
    </div>
  );
};

// Sample menu items (replace with actual data)

export default Home;
