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
import ParentProps from "./concept/parentToChildProps/ParentProps";
import ParentComponents from "./concept/childToParentProps/ParentComponents";
import FormDemo from "./concept/FormDemo";
import MultiRadio from "./concept/MultiRadio";
import APIexample1 from "./api/APIexample1";
import Click from "./concept/Events/Click";
import ChangeInInput from "./concept/Events/ChangeInInput";
import KeyDown from "./concept/Events/KeyDown";
import Focus from "./concept/Events/Focus";
import Copy from "./concept/Events/Copy";
import Invalid from "./concept/Events/Invalid";
import APIexample2 from "./api/APIexample2";
import APIexample3 from "./api/APIexample3";
import APIexample4 from "./api/APIexample4";
import APIexample5 from "./api/APIexample5";
import APIexample6 from "./api/APIexample6";
import APIexample7 from "./api/APIexample7";
import APIexample8 from "./api/APIexample8";
import APIusingAxios from "./api/APIusingAxios";
import APIusingAxios2 from "./api/APIusingAxios2";
import EnterTextUnableToPaste from "./logical/EnterTextUnableToPaste";
import OwnAPIcall from "./api/OwnAPIcall";
import Goal from "./concept/conditional rendering/Goal";
import InlineStyling from "./concept/css styling/InlineStyling";
import CSSStylesheetOrExternalStyling from "./concept/css styling/CSSStylesheetOrExternalStyling";
import ModuleStyle from "./concept/css styling/ModuleStyle";
import StyledComponent from "./concept/css styling/StyledComponent";
import ReactBootstrapExample from "./ReactBootstrapExample";
import APIusingAxios03 from "./api/APIusingAxios03";
import APIusingAxios04 from "./api/APIusingAxios04";
import HOC1 from "./concept/HigherOrderComponent/HOCExample01";
import HOCExample01 from "./concept/HigherOrderComponent/HOCExample01";
import HOCExample02 from "./concept/HigherOrderComponent/HOCExample02";
import HOCExample03 from "./concept/HigherOrderComponent/HOCExample03";


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
          {/* <PureComponentDemo /> */}
          {/* <ParentProps /> */}
          {/* <ParentComponents /> */}
          {/* <FormDemo /> */}
          {/* <MultiRadio /> */}
          {/* <Click /> */}
          {/* <ChangeInInput /> */}
          {/* <KeyDown /> */}
          {/* <Focus /> */}
          {/* <Copy /> */}
          {/* <Invalid />  */}

          {/* <APIexample1 /> */}
          {/* <APIexample2 /> */}
          {/* <APIexample3 /> */}
          {/* <APIexample4 /> */}
          {/* <APIexample5 /> */}
          {/* <APIexample6 /> */}
          {/* <APIexample7 /> */}
          {/* <APIexample8 /> */}
          {/* <APIusingAxios /> */}
          {/* <APIusingAxios2 /> */}
          {/* <EnterTextUnableToPaste /> */}
          {/* <OwnAPIcall /> */}
          {/* <Goal /> */}
          {/* <InlineStyling /> */}
          {/* <CSSStylesheetOrExternalStyling /> */}
          {/* <ModuleStyle /> */}
          {/* <StyledComponent /> */}
          {/* <ReactBootstrapExample /> */}
          {/* <APIusingAxios03 /> */}
          {/* <APIusingAxios04 /> */}
          {/* <HOCExample01 /> */}
          {/* <HOCExample02 /> */}
          <HOCExample03 />
        {/* </header>                
      </div>       */}
    </>
  );
}

export default App;
