import { mockData } from './mockData.js';

export const resolvers = {
    UserDetails: {
        carbonFootprintDetails: (parent) => {
            return mockData.carbonFootprintMonthlyData[parent.userId]
        }
    },
    Query: {
        UserData: () => {
            return mockData.userData;
        },
        UserCarbonDetails: (parent, args, context, info) => {
            return mockData.carbonFootprintMonthlyData.find(data => data.userId === args.userId);
        }
    }
}