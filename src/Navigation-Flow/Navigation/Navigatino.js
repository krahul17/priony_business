import { View, Text, EventEmitter } from 'react-native'
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopTabNavigation from '../TopTabNavigation/TopTabNavigation';
import WellComeScreen from '../../screen/LoginFlow/WellcomeScreen/WellComeScreen';
import Login from '../../screen/LoginFlow/Login/Login';
import VerifyCode from '../../screen/LoginFlow/VerifiyCode/VerifyCode';
import CreateProfie from '../../screen/LoginFlow/CreateProfile/CreateProfie';
import Profile from '../../screen/LoginFlow/Profile/Profile';
import Aboutus from '../../screen/LoginFlow/Aboutus/Aboutus';
import MyMatch from '../../screen/LoginFlow/MyMatch/MyMatch';
import UploadeOfficePic from '../../screen/LoginFlow/Profile/UploadeOfficePic/UploadeOfficePic';
import Certificate from '../../screen/LoginFlow/Profile/Certificate/Certifacate';
import Result from '../../screen/LoginFlow/Profile/Result/Result';
import Review from '../../screen/LoginFlow/Profile/Review/Review';
import BuyPlan from '../../screen/LoginFlow/Profile/BuyPlan/BuyPlan';
import AllPlanList from '../../screen/LoginFlow/Profile/AllPlanList/AllPlanList';
import Profenssional from '../../screen/LoginFlow/Profile/Profenssional/Profenssional';
import Business from '../../screen/LoginFlow/Profile/Business/Business';
import Ultimate from '../../screen/LoginFlow/Profile/Ultimate/Ultimate';

import UsaList from '../../screen/PrCategories/UsaList/UsaList';
import HomeScreen from '../../screen/HomeScreen/HomeScreen';
import Demo from '../../screen/HomeScreen/ILETSScreen/Demo';
import StudentFee from '../../screen/HomeScreen/ILETSScreen/StudentFee/StudentFee';
import ClassTiming from '../../screen/HomeScreen/ILETSScreen/ClassTiming/ClassTiming';
import MyClass from '../../screen/HomeScreen/ILETSScreen/MyClass/MyClass';
import AICustomer from '../../screen/HomeScreen/SpecialScreen/AICustomer/AICustomer';
import Home from '../../screen/HomeScreen/SpecialScreen/Home/Home';
import HotArea from '../../screen/HomeScreen/SpecialScreen/HotArea/HotArea';
import EventsScreen from '../../screen/EventsScreen/EventsScreen';
import PrCategories from '../../screen/PrCategories/PrCategories';
import PrEnquirtForm from '../../screen/PrCategories/PrEnquirtForm';
import PrForm from '../../screen/PrCategories/PrEnquirtForm/PrForm/PrForm';
import CanadaList from '../../screen/PrCategories/CanadaList/CanadaList';
import Canada from '../../screen/PrCategories/CanadaList/Canada/Canada';
import Usa from '../../screen/PrCategories/UsaList/Usa/Usa';
import Uk from '../../screen/PrCategories/UkList/Uk/Uk';
import Australia from '../../screen/PrCategories/AustrilaList/Australia/Australia';
import NewZealand from '../../screen/PrCategories/NewZealandList/NewZealand/NewZealand';
import UkList from '../../screen/PrCategories/UkList';
import AustrilaList from '../../screen/PrCategories/AustrilaList/AustrilaList';
import NewZealandList from '../../screen/PrCategories/NewZealandList/NewZealandList';
import ViewAds from '../../screen/Lists/ViewAds';
import LikeAds from '../../screen/Lists/LikeAds';
import ShareAds from '../../screen/Lists/ShareAds';
import ViewInterview from '../../screen/Lists/ViewInterview/ViewInterview';
import LikeInterview from '../../screen/Lists/LikeInterview/LikeInterview';
import ShareInterview from '../../screen/Lists/ShareInterview';
import ViewProfile from '../../screen/Lists/ViewProfile/ViewProfile';
import LikeProfile from '../../screen/Lists/LikeProfile/LikeProfile';
import ShareProfile from '../../screen/Lists/ShareProfile/ShareProfile';
import JobOffer from '../../screen/Form/JobOffer';
import CustomTodatDeal from '../../Component/CustomTodayDeal/CustomTodatDeal';
import SellFranchise from '../../screen/Form/SellFranchise/SellFranchise';
import InterstedVistor from '../../screen/InterstedVisitor/InterstedVistor';
import UserRequirement from '../../screen/HomeScreen/UserRequirement/UserRequirement';
import WeeklyTest from '../../screen/WeeklyTest/WeeklyTest';
import ListofStudent from '../../screen/WeeklyTest/ListofStudent/ListofStudent';
import ProfileDetails from '../../screen/ProfileDetails/ProfileDetails'
import MyMatchList from '../../screen/WeeklyTest/MyMatch/MyMatchList';
import Jsonfile from '../../screen/LoginFlow/Profile/JsonData/JsonData';
import EventSecond from '../../screen/EventsScreen/EventSecond/EventSecond'
import MyEvents from '../../screen/EventsScreen/MyEvent/MyEvents';
import Checks from '../../Checks/Checks';
import CommigSoon from '../../screen/HomeScreen/SpecialScreen/CommigSoon';
import Ielts from '../../screen/InterstedVisitor/InvestorAllList/Ielts/Ielts';
import StudyVisa from '../../screen/InterstedVisitor/InvestorAllList/StudyVisa/StudyVisa';
import Passport from '../../screen/InterstedVisitor/InvestorAllList/Passport/Passport';
import Education from '../../screen/InterstedVisitor/InvestorAllList/Education/Education';
// import TravelInsurance from '../../screen/InterstedVisitor/InvestorAllList/TravelIsurance/TravelInsurance';
import AirPort from '../../screen/InterstedVisitor/InvestorAllList/Airport/AirPort';
import TouristVisa from '../../screen/InterstedVisitor/InvestorAllList/TouristVisa/TouristVisa';
import WorkPermit from '../../screen/InterstedVisitor/InvestorAllList/WorkPermit/WorkPermit';
import JobAbroad from '../../screen/InterstedVisitor/InvestorAllList/JobAbroad/JobAbroad';
import Accomodation from '../../screen/InterstedVisitor/InvestorAllList/Accomodation/Accomodation';
import PR from '../../screen/InterstedVisitor/InvestorAllList/PR/PR.js';
import Tour from '../../screen/InterstedVisitor/InvestorAllList/Tour/Tour';
import Courier from '../../screen/InterstedVisitor/InvestorAllList/Courier/Courier';
import Advisor from '../../screen/InterstedVisitor/InvestorAllList/Advisor/Advisor';
import EventPayment from '../../screen/EventsScreen/EventPayment/EventPayment';
import PassConfirm from '../../screen/EventsScreen/PassConfirm/PassConfirm';
import HelpSupport from '../../Component/HelpSupport/HelpSupport';
import YoutubeAds from '../../screen/Lists/YoutubeAds';
import YoutubeInterview from '../../screen/Lists/YoutubeInterview/YoutubeInterview';
import MainYoutube from '../../screen/Lists/MainYoutube';
import FreePlan from '../../screen/LoginFlow/Profile/FreePlan/FreePlan';
import AirTicket from '../../screen/InterstedVisitor/InvestorAllList/AirTicket/AirTicket';
import Insurance from '../../screen/InterstedVisitor/InvestorAllList/Insurance/Insurance';
import Money from '../../screen/InterstedVisitor/InvestorAllList/Money/Money';
import ViewVisitor from '../../screen/EventsScreen/ViewVisitor/ViewVisitor';
import PaymentGateWay from '../../screen/LoginFlow/Profile/PaymentGateWay/PaymentGateWay';
import PaymentConfirm from '../../screen/LoginFlow/Profile/PaymentGateWay/PaymentConfirm/PaymentConfirm';
import YourOfferJob from '../../screen/Lists/YourOfferJob/YourOfferJob';
import YourMainAds from '../../screen/Lists/YourMainAds';
import Franchise from '../../screen/Lists/FranchiseList/Franchise';
import FavCustomer from '../../screen/Lists/FavCustomer/FavCoutomer';
import Form from '../../screen/PrCategories/PrEnquirtForm/Form/Form';
import PlanComingSoon from '../../screen/LoginFlow/Profile/PlanComingSoon/PlanComingSoon';
import Loader from '../../Component/Loader/Loader';
import InterviewYoutubeView from '../../screen/Lists/InterviewYoutubeView/InterviewYoutubeView';
import InterviewYoutubeLike from '../../screen/Lists/InterviewYoutubeLike/InterviewYoutubeLike';
import InterviewYoutubeShare from '../../screen/Lists/InterviewYoutubeShare';
import ViewsJobOffer from '../../screen/Lists/ViewsJobOffer/ViewsJobOffer';
import LikeJobOffer from '../../screen/Lists/LikeJobOffer/LikejobOffer';
import ShareJobOffer from '../../screen/Lists/ShareJobOffer/ShareJobOffer';
import FranchiseView from '../../screen/Lists/FranchiseList/FranchiseView/FranchiseView';
import FranchiseLike from '../../screen/Lists/FranchiseList/FranchiseView/FranchiseLike';
import FranchiseShare from '../../screen/Lists/FranchiseList/FranchiseView/FranchiseShare';
import Notification from '../../screen/HomeScreen/Notification/Notification';










const Navigatino = () => {
  const Stack = createNativeStackNavigator();
  const [showWellcome, setShowWellcome] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowWellcome(false)
    }, 1000);
  }, []);


  return (


    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {showWellcome ? <Stack.Screen
        name="WellComeScreen" component={WellComeScreen} />
        : null}
     <Stack.Screen name="PaymentConfirm" component={PaymentConfirm} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
      <Stack.Screen name="PrCategories" component={PrCategories} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="PrEnquirtForm" component={PrEnquirtForm} />
      <Stack.Screen name="InterviewYoutubeView" component={InterviewYoutubeView} />
      <Stack.Screen name="InterviewYoutubeLike" component={InterviewYoutubeLike} />
      <Stack.Screen name="InterviewYoutubeShare" component={InterviewYoutubeShare} />
      <Stack.Screen name="ViewsJobOffer" component={ViewsJobOffer} />
      <Stack.Screen name="LikeJobOffer" component={LikeJobOffer} />
      <Stack.Screen name="ShareJobOffer" component={ShareJobOffer} />
      <Stack.Screen name="Form" component={Form} />
      <Stack.Screen name="PrForm" component={PrForm} />
      <Stack.Screen name="Canada" component={Canada} />
      <Stack.Screen name="CanadaList" component={CanadaList} />
      <Stack.Screen name="UsaList" component={UsaList} />
      <Stack.Screen name="Usa" component={Usa} />
      <Stack.Screen name="Uk" component={Uk} />
      <Stack.Screen name="UkList" component={UkList} />
      <Stack.Screen name="Australia" component={Australia} />
      <Stack.Screen name="AustrilaList" component={AustrilaList} />
      <Stack.Screen name="NewZealand" component={NewZealand} />
      <Stack.Screen name="NewZealandList" component={NewZealandList} />
      <Stack.Screen name="Demo" component={Demo} />
      <Stack.Screen name="StudentFee" component={StudentFee} />
      <Stack.Screen name="ClassTiming" component={ClassTiming} />
      <Stack.Screen name="MyClass" component={MyClass} />
      <Stack.Screen name="AICustomer" component={AICustomer} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HotArea" component={HotArea} />
      <Stack.Screen name="EventsScreen" component={EventsScreen} />
      <Stack.Screen name="EventSecond" component={EventSecond} />
      <Stack.Screen name="MyEvents" component={MyEvents} />
      <Stack.Screen name="ViewVisitor" component={ViewVisitor} />
      <Stack.Screen name="ViewAds" component={ViewAds} />
      <Stack.Screen name="LikeAds" component={LikeAds} />
      <Stack.Screen name="YourOfferJob" component={YourOfferJob} />
      <Stack.Screen name="ShareAds" component={ShareAds} />
      <Stack.Screen name="ViewInterview" component={ViewInterview} />
      <Stack.Screen name="LikeInterview" component={LikeInterview} />
      <Stack.Screen name="ShareInterview" component={ShareInterview} />
      <Stack.Screen name="ViewProfile" component={ViewProfile} />
      <Stack.Screen name="LikeProfile" component={LikeProfile} />
      <Stack.Screen name="ShareProfile" component={ShareProfile} />
      <Stack.Screen name="CustomTodatDeal" component={CustomTodatDeal} />
      <Stack.Screen name="JobOffer" component={JobOffer} />
      <Stack.Screen name="SellFranchise" component={SellFranchise} />
      <Stack.Screen name="FranchiseView" component={FranchiseView} />
      <Stack.Screen name="FranchiseLike" component={FranchiseLike} />
      <Stack.Screen name="FranchiseShare" component={FranchiseShare} />
      <Stack.Screen name="InterstedVistor" component={InterstedVistor} />
      <Stack.Screen name="Ielts" component={Ielts} />
      <Stack.Screen name="StudyVisa" component={StudyVisa} />
      <Stack.Screen name="Passport" component={Passport} />
      <Stack.Screen name="Education" component={Education} />
      <Stack.Screen name="AirTicket" component={AirTicket} />
      <Stack.Screen name="Insurance" component={Insurance} />
      <Stack.Screen name="Money" component={Money} />
      {/* <Stack.Screen name="TravelInsurance" component={TravelInsurance} /> */}

      <Stack.Screen name="AirPort" component={AirPort} />
      <Stack.Screen name="TouristVisa" component={TouristVisa} />
      <Stack.Screen name="WorkPermit" component={WorkPermit} />
      <Stack.Screen name="JobAbroad" component={JobAbroad} />
      <Stack.Screen name="Accomodation" component={Accomodation} />
      <Stack.Screen name="PR" component={PR} />
      <Stack.Screen name="Tour" component={Tour} />
      <Stack.Screen name="Courier" component={Courier} />
      <Stack.Screen name="Advisor" component={Advisor} />
      <Stack.Screen name="EventPayment" component={EventPayment} />
      <Stack.Screen name="PassConfirm" component={PassConfirm} />
      <Stack.Screen name="HelpSupport" component={HelpSupport} />
      <Stack.Screen name="YoutubeAds" component={YoutubeAds} />
      <Stack.Screen name="YoutubeInterview" component={YoutubeInterview} />
      <Stack.Screen name="MainYoutube" component={MainYoutube} />
      <Stack.Screen name="YourMainAds" component={YourMainAds} />
      <Stack.Screen name="Franchise" component={Franchise} />
      <Stack.Screen name="FavCustomer" component={FavCustomer} />


      <Stack.Screen name="UserRequirement" component={UserRequirement} />
      <Stack.Screen name="WeeklyTest" component={WeeklyTest} />
      <Stack.Screen name="CommingSoon" component={CommigSoon} />
      <Stack.Screen name="ListofStudent" component={ListofStudent} />
      <Stack.Screen name="MyMatchList" component={MyMatchList} />
      <Stack.Screen name="Jsonfile" component={Jsonfile} />
      <Stack.Screen name="Checks" component={Checks} />


    </Stack.Navigator>


  )
}

export default Navigatino