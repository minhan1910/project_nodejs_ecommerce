import { CrudService } from "../../base/crudService";
import { Promotion, PromotionModel } from "./promotion.model";

class PromotionService extends CrudService<Promotion> {
  constructor() {
    super(PromotionModel);
  }
}

export const promotionService = new PromotionService();
