import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getAllPromotion(q: QueryInput): PromotionPageData
    getOnePromotion(id: ID!): Promotion
  }
  extend type Mutation {
    createPromotion(data: CreatePromotionInput!): Promotion
    updatePromotion(id: ID!, data: UpdatePromotionInput!): Promotion
    deletePromotion(id: ID!): Boolean
    deletePromotions(ids: [ID]!): Boolean
    deleteAllPromotion: Boolean
  }

  type PromotionPageData {
    data: [Promotion]
    pagination: Pagination
  }

  type Promotion {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!

    "Tên khuyến mãi"
    name: String
    "Miêu tả"
    description: String
    "Ngày bắt đầu"
    startDate: DateTime
    "Ngày kết thúc"
    endDate: DateTime
    "Trạng thái"
    actived: Boolean
    "Loại"
    type: Type
    "Danh sách sản phẩm giảm giá"
    offerItems: [OfferItems]
  }

  input CreatePromotionInput {
    "Tên khuyến mãi"
    name: String!
    "Miêu tả"
    description: String!
    "Ngày bắt đầu"
    startDate: DateTime!
    "Ngày kết thúc"
    endDate: DateTime!
    "Trạng thái"
    actived: Boolean
    "Loại"
    type: TypeInput!
    "Danh sách sản phẩm giảm giá"
    offerItems: [OfferItemsInput]!
  }

  input UpdatePromotionInput {
    _empty: String
  }
`;
