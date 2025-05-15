export const typeDefs = `#graphql

  type CarbonFootprintDetails {
    period_type: String,
    period_start: String,
    period_end: String,
    month: String,
    total_emissions: Float,
    transport: Float,
    food: Float,
    home: Float,
    shopping: Float
  }
  type UserCarbonDetails {
    userId: String,
    carbonFootprints: [CarbonFootprintDetails]
  }
  type UserDetails {
    id: String,
    userId: String,
    fullName: String,
    carbonFootprintDetails: [CarbonFootprintDetails]
  }

  type Query {
    UserData: [UserDetails]
    UserCarbonDetails(userId: String!): UserCarbonDetails
  }
`;