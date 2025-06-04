import React from "react";
import './ProfilePage.css';
const ProfilePage = () =>{
    const user = {
        name: 'Nata',
        age: 35,
        avatar: 'https://i.pravatar.cc/150?img=47',
        purchaseHistory :[
            'Преступление и наказание - 999руб',
            'Мастер и Маргарита - 899руб',
            'Анна Каренина - 799руб',
        ]
    };
    return (
        <div className="profile-container">
            <h1>профиль пользователя</h1>
            <div className="profile-card">
                <img src={user.avatar} alt="Аватар пользователя" />
                <h2>{user.name}</h2>
                <p>{user.age}</p>
            </div>
            <div className="purchase-history">
                <h3>история покупок</h3>
                <ul>
                  {user.purchaseHistory.map((item,index) =>(
                    <li key={index}>{item}</li>
                  ))}  
                </ul>
            </div>
        </div>
    );
};
export default ProfilePage;