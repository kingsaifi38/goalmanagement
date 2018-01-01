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
    getCommentsForGoal(goalId) {
        return axios({
            method: 'get',
            url: '/api/getCommentsForGoal?goalId=' + goalId,
        });
    },
    setCommentsWithProgressForGoal(allData) {
        return axios({
            method: 'post',
            url: '/api/setCommentsWithProgressForGoal',
            data: {
                comment: allData.comment,
                goalId: allData.goalId,
                userlId: allData.userlId,
                progress: allData.progress
            }
        });
    },
    setCommentForGoal(allData) {
        return axios({
            method: 'post',
            url: '/api/setCommentsForGoal',
            data: {
                comment: allData.comment,
                goalId: allData.goalId,
                userlId: allData.userlId
            }
        });
    }
}
