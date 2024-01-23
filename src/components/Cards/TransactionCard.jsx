import styles from "../../styles/Cards/TransactionCard.module.scss";
import { FiBox } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { BsHouseDoor } from "react-icons/bs";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { HiOutlineFire } from "react-icons/hi";

import { useEffect, useState } from "react";

const CategoryIcon = ({ category }) => {
    const [style, setStyle] = useState({});
    const categoryStyle=()=>{
        switch(category){
            case "Produtos":{
                return {
                    background: "#fdeacc",
                    icon: <FiBox />,
                    color: "#f8aa35",
                }    
            }
            case "Entertenimento":{
                return {
                    background: "#e4f1d5",
                    icon: <IoGameControllerOutline />,
                    color: "#92c44c",
                }    
            }
            case "Contas":{
                return {
                    background: "#b7dffd",
                    icon: <BsHouseDoor />,
                    color: "#5a92d6",
                }    
            }
            default:
                return {
                    background: "#ffbece",
                    icon: <HiOutlineFire />,
                    color: "#ff5e78",
                }
        }
    };
    useEffect(()=>{
        setStyle(categoryStyle());
    },[category]);
    return (
        <div className={styles.iconContainer} style={{ background:style.background, color: style.color }}>
            {style.icon}
        </div>
    );
};

CategoryIcon.defaultProps = {
    category: "Outros",
};

const TransactionCard = ({ category, date, money, description, title }) => {
    const [visible, setVisible] = useState(false);
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            {/* info */}
            <div className={styles.info}>
                <CategoryIcon category={category} />
                <div className={styles.categoryContainer}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.category}>{category}</span>
                    <span className={styles.date}>{date}</span>
                    <div className={`${visible ? styles.descriptionActive:undefined} ${styles.description}`}>
                        <p>{description}</p>
                    </div>
                </div>
            </div>

            {/* money */}
            <div className={styles.moneyContainer}>
                <span>{`-$${money}`}</span>
                <div 
                className={styles.iconContainer} 
                onClick={() =>setVisible(!visible)} 
                style={description ? {} : {opacity: 0, pointerEvents: "none"}}
                >
                {visible ? <RiArrowUpSLine /> : <RiArrowDownSLine />}  
                </div>
            </div>
        </div>
    </div>
  );
};

TransactionCard.defaultProps = {
    category: "Outros",
    date: "29 Feb 2021",
    money: "60.35",
    description: "sou uma descrição",
};

export default TransactionCard;