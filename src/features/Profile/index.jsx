import React from "react";
import styles from "./index.module.css";
import { Doughnut, Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    DoughnutController,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { useProfileFetch } from "./hooks/useProfileFetch";
import { useProfileAge } from "./hooks/useProfileAge";
import { useChartsData } from "./hooks/useChartsData";
import ProfilePhoto from "./components/profilePhoto/ProfilePhoto";
import ProfileInfoBanner from "./components/profileInfoBanner/ProfileInfoBanner";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    DoughnutController,
    ArcElement,
    Tooltip,
    Legend,
);

export default function Profile() {
    if (!localStorage.getItem("auth-token")) {
        window.location.replace("/login");
        return <>Redirecting...</>;
    }
    const { profilePicUrl, error, loading, user_data } = useProfileFetch(
        "http://localhost:1169/api/user/profile-data",
    );

    if (loading) {
        return <>Loading...</>;
    }
    if (error) {
        return <>Error: {error}</>;
    }

    const { accountAgeMonths } = useProfileAge(user_data);
    const { boughtData, soldData, barData } = useChartsData(user_data);

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.main}>
                    <div className={styles.edit_part}>
                        <h1>My profile</h1>
                        <button className={styles.edit}>Edit profile</button>
                    </div>
                    <div className={styles.profile__info}>
                        <ProfilePhoto profilePic={profilePicUrl} />
                        <ProfileInfoBanner
                            username={user_data.username}
                            email={user_data.email}
                            phone_number={user_data.phone_number}
                            accountAge={accountAgeMonths}
                        />
                    </div>

                    <div className={styles.statistics}>
                        <h1 className={styles.statistics__header}>Statistics</h1>
                        <div className={styles.charts}>
                            <div className={styles.chartBox}>
                                <h3>Bought items</h3>
                                {boughtData.datasets[0].data.length > 0 ? (
                                    <Doughnut data={boughtData} />
                                ) : (
                                    <p className={styles.no_data_message}>
                                        Consider buying some items
                                    </p>
                                )}
                            </div>
                            <div className={styles.chartBox}>
                                <h3>Sold items</h3>
                                {soldData.datasets[0].data.length > 0 ? (
                                    <Doughnut data={soldData} />
                                ) : (
                                    <p className={styles.no_data_message}>
                                        Consider selling some items
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className={styles.barChart}>
                            <Bar data={barData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
