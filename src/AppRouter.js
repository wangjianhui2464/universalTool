/**
 * Sample React Native App Router
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Home from "./app/view/Home";
import CarouselMain from "./app/view/CarouselMain";
import AnimatedParallel from "./app/view/AnimatedParallel";
import AnimatedSequence from "./app/view/AnimatedSequence";
import AnimatedRemix from "./app/view/AnimatedRemix";
import FloatingHeartsPage from "./app/view/FloatingHeartsPage";
import AddCartPage from "./app/view/AddCartPage";
import TouchExample from './app/view/TouchExample'
import PanResponderExample from './app/view/PanResponderExample'
import PanResponderCarousel from './app/view/PanResponderCarousel'

const AppRouter = {
  Home: Home,
  CarouselMain: CarouselMain,
  AnimatedParallel: AnimatedParallel,
  AnimatedSequence: AnimatedSequence,
  AnimatedRemix: AnimatedRemix,
  FloatingHeartsPage: FloatingHeartsPage,
  TouchExample: TouchExample,
  PanResponderExample: PanResponderExample,
  PanResponderCarousel: PanResponderCarousel,
  AddCartPage: {
    screen: AddCartPage,
  }
};

export default AppRouter;
