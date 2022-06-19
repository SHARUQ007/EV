import { faCog, faToolbox, faFan, faKey, faUnlockAlt, faMusic, faChevronRight, faClock, faThermometerHalf, faCar, faBolt, faMapMarkerAlt, faShoppingBag, faWrench, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

const items = [
    {
      id: 1,
      icon: faMapMarkerAlt,
      title: "Stations",
      navigate:"Stations",
    },
    {
      id: 2,
      icon: faBolt,
      title: "Battery",
      subTitle: "Last Charged: 5 hrs 45 mins ago",
      navigate:"Battery",
    },
    {
      id: 3,
      icon: faShoppingBag,
      title: "EV Store",
      subTitle: "Batteries & Spare Parts",
      navigate:"EVStore",
    },
    {
      id: 4,
      icon: faCar,
      title: "Directions",
      navigate:"Directions",
    },
    {
      id: 5,
      icon: faExclamationTriangle,
      title: "STATION Reports",
      navigate:"StationReviews",
    },
    
];

export default items;