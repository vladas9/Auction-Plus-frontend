export const useProfileAge = (user_data) => {
    const regDate = new Date(user_data.creation_date);
    const currentDate = new Date();
    const accountAgeMonths =
        (currentDate.getFullYear() - regDate.getFullYear()) * 12 +
        currentDate.getMonth() -
        regDate.getMonth();

    return { accountAgeMonths };
};
