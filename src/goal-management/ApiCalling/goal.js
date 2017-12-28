export const Goal = {
    getAllGoalByUser(userId) {
        return axios({
            method: 'get',
            url: '/api/getAllGoalByUser?userId=' + userId,
        });
    }
}
