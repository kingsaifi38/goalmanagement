export const Goal = {
    getAllGoalByUser(userId) {
        return axios({
            method: 'get',
            url: '/api/getAllGoalByUser?userId=' + userId,
        });
    },
    getAllGoalAssigned(userId) {
        return axios({
            method: 'get',
            url: '/api/getAllGoalAssigned?userId=' + userId,
        });
    },
    getCommentsForGoal(userId) {
        return axios({
            method: 'get',
            url: '/api/getCommentsForGoal?goalId=' + userId,
        });
    }
}
