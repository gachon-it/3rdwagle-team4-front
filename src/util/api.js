export const fetchHabitList = async (memberId) => {
    try {
        const response = await fetch(`/habit/${memberId}/list`);
        const data = await response.json();
        return data.data.habitList || [];
    } catch (error) {
        console.error("Error fetching habits: ", error);
        return [];
    }
};