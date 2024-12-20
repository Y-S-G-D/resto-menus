"use client";
import React from "react";
import Container from "./Component/Container";
import { motion } from "framer-motion";
// import MenusGrid from "./Component/MenusGrid";
// import {useBrowseMenuStore} from "@/app/stores/BrowseMenuStore"
// import Loader from '@/app/Component/Loader';
import UsersNavbar from "@/components/users-navbar";
import BottomNavigationBar from "@/components/bottom-navigation-bar";
import HeroSection from "@/components/homepage/hero-section";
import BrowseMenuSection from "@/components/homepage/browse-menu-section";

const Home = () => {
  // const { isFetching,  browseMenus,getCategorizedMenu } = useBrowseMenuStore();
  // const [hasEffectRun, setHasEffectRun] = useState(false);


  // useEffect(() => {
  //   if (!hasEffectRun) {
  //     setHasEffectRun(true);
  //     getCategorizedMenu()
  //   }
  //   // return function (){
  //   //   console.log("Clean up called")
  //   // }
  // },[hasEffectRun,getCategorizedMenu]);

  // if (isFetching) {
  //   return <Loader/>
  // }


  return (
    <div>
      <UsersNavbar/>
      <BottomNavigationBar/>
      <HeroSection/>
      {/* <ImageHeader
        title="Menus"
        subtitle="Discover our seasonal menus that delight your taste buds!"/> */}
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="my-8"
        >
          <BrowseMenuSection/>
          {/* <MenusGrid  browseMenus={browseMenus}/> */}
        </motion.div>
      </Container>
      
    </div>
  );
};

// Sample menu items (replace with actual data)

export default Home;
