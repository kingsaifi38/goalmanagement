export const User = {
    allUsersForGoal() {
        return axios({
            method: 'get',
            url: '/api/getAllUsersForGoal'
        });
    },
    getUserRole(userId) {
        return axios({
            method: 'get',
            url: '/api/getUserRole?userId=' + userId
        });
    },
    setGoalForUser(allData) {
        return axios({
            method: 'post',
            url: '/api/setusergoal',
            data: {
                goal_assigned_to: allData.goalAssignee,
                goal_title: allData.goalTitle,
                goal_description: allData.goalDescription,
                goal_start_date: allData.startdate,
                goal_end_date: allData.enddate,
                goal_assigned_by: allData.userId
            }
        });
    }
}
