import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import NavMenuRouter from "./Components/NavMenuRouter";
// import {BrouserRouter ,Routes ,Route} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Switch } from "@material-ui/core";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BoxDemo from "./Components/BoxDemo";
import ContainerDemo from "./Components/ContainerDemo";
import HiddenDemo from "./Components/HiddenDemo";
import ImageListDemo from "./Components/ImageListDemo";
import ButtonDemo from "./Components/ButtonDemo";
import ButtonGroupDemo from "./Components/ButtonGroupDemo";
import CheckBoxDemo from "./Components/CheckBoxDemo";
import FloatingActionButtonDemo from "./Components/FloatingActionButtonDemo";
import DateAndTimeDemo from "./Components/DateAndTimeDemo";
import RadioDemo from "./Components/RadioDemo";
import SelectOrCombobox from "./Components/SelectOrCombobox";
import SliderOrRangeSelector from "./Components/SliderOrRangeSelector";
import SwitchDemo from "./Components/SwitchDemo";
import TextFieldDemo from "./Components/TextFieldDemo";
import BottomNavigationDemo from "./Components/BottomNavigationDemo";
import BreadcrumbsDemo from "./Components/BreadcrumbsDemo";
import LinksDemo from "./Components/LinksDemo";
import MenuDemo from "./Components/MenuDemo";
import StepperDemo from "./Components/StepperDemo";
import TabsDemo from "./Components/TabsDemo";
import PaperDemo from "./Components/PaperDemo";
import CardsDemo from "./Components/CardsDemo";
import CardsDemo02 from "./Components/CardsDemo02";
import AccordianDemo from "./Components/AccordianDemo";
import ProgressDemo from "./Components/ProgressDemo";
import DialogBoxDemo from "./Components/DialogBoxDemo";
import DialogBoxDemo02AlertDialog from "./Components/DialogBoxDemo02AlertDialog";
import SnackbarDemo from "./Components/SnackbarDemo";
import ChipDemo from "./Components/ChipDemo";
import ChipDemo02 from "./Components/ChipDemo02";
import ListDividerDemo from "./Components/ListDividerDemo";
import TablesDemo from "./Components/TablesDemo";
import TableDemo02 from "./Components/TableDemo02";
import TooltipDemo from "./Components/TooltipDemo";
import ClickAwayListenerDemo from "./Components/ClickAwayListenerDemo";
import CssBaseLineDemo from "./Components/CssBaseLineDemo";
import ModalDemo from "./Components/ModalDemo";
import PopOverDemo from "./Components/PopOverDemo";
import PortalDemo from "./Components/PortalDemo";
import TextareaAutosizeDemo from "./Components/TextareaAutosizeDemo";
import TransitionsDemo from "./Components/TransitionsDemo";
import AlertDemo from "./Components/AlertDemo";
import AutocompleteDemo from "./Components/AutocompleteCombobox";
import AutocompleteDemoCombobox from "./Components/AutocompleteCombobox";
import ResponsiveMedia from "./Components/ResponsiveMedia";
import UseEffectDemo from "./concept/UseEffectDemo";
import UseEffect2 from "./concept/UseEffect2";
import Carousel from "./concept/Carousel";
import KeyAndObject02 from "./Components/KeyAndObject02";
import CarouselOrSlider from "./Components/CarouselOrSlider";
import UseStateDemo from "./concept/UseStateDemo";
import UseEffectDemo03 from "./concept/UseEffectDemo03";
import ListAndKeys from "./concept/ListAndKeys";
import PureComponentDemo from "./concept/PureComponentDemo";


function App() {
  return (
    <>
      {/* <div className="app">
        <header className="App-header"> */}
          {/* <Router>
        <NavMenuRouter/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>          
          <Route exact path="/contact" element={<Contact/>}/>          
        </Routes>      
       </Router> */}
          {/* <BoxDemo/> */}
          {/* <ContainerDemo/> */}
          {/* <HiddenDemo /> */}
          {/* <ImageListDemo /> */}
          {/* <ButtonDemo/> */}
          {/* <ButtonGroupDemo/> */}
          {/* <CheckBoxDemo /> */}
          {/* <FloatingActionButtonDemo  /> */}
          {/* <DateAndTimeDemo />  */}
          {/* <RadioDemo /> */}
          {/* <SelectOrCombobox /> */}
          {/* <SliderOrRangeSelector /> */}
          {/* <SwitchDemo /> */}
          {/* <TextFieldDemo /> */}
          {/* <BottomNavigationDemo /> */}
          {/* <BreadcrumbsDemo /> */}
          {/* <LinksDemo /> */}
          {/* <MenuDemo /> */}
          {/* <StepperDemo /> */}
          {/* <TabsDemo /> */}
          {/* <PaperDemo /> */}
          {/* <CardsDemo /> */}
          {/* <CardsDemo02 /> */}
          {/* <AccordianDemo /> */}
          {/* <ProgressDemo /> */}
          {/* <DialogBoxDemo /> */}
          {/* <DialogBoxDemo02AlertDialog /> */}
          {/* <SnackbarDemo /> */}
          {/* <ChipDemo /> */}
          {/* <ChipDemo02 /> */}
          {/* <ListDividerDemo /> */}
          {/* <TablesDemo /> */}
          {/* <TableDemo02 /> */}
          {/* <TooltipDemo /> */}
          {/* <ClickAwayListenerDemo /> */}
          {/* <CssBaseLineDemo /> */}
          {/* <ModalDemo /> */}
          {/* <PopOverDemo /> */}
          {/* <PortalDemo /> */}
          {/* <TextareaAutosizeDemo /> */}
          {/* <TransitionsDemo /> */}
          {/* <AlertDemo /> */}
          {/* <AutocompleteDemoCombobox /> */}
          {/* <ResponsiveMedia /> */}
          {/* <UseEffectDemo /> */}
          {/* <UseEffect2 /> */}
          {/* <Carousel />   */}
          {/* <KeyAndObject02 /> */}
          {/* <CarouselOrSlider /> */}
          {/* <UseStateDemo /> */}
          {/* <UseEffectDemo03 /> */}
          {/* <ListAndKeys /> */}
          <PureComponentDemo />
        {/* </header>                
      </div>       */}
    </>
  );
}

export default App;
