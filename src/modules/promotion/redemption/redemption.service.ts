import { CrudService } from "../../../base/crudService";
import { Redemption, RedemptionModel } from "./redemption.model";

class RedemptionService extends CrudService<Redemption> {
  constructor() {
    super(RedemptionModel);
  }
}

export const redemptionService = new RedemptionService();
