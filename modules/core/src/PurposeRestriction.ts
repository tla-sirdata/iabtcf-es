import {TCModelError} from './errors/TCModelError';
import {PurposeRestrictionTypes} from './PurposeRestrictionTypes';

class PurposeRestriction {

  public static availablePurposeIds: Set<number>;
  private purposeId_: number;
  private restrictionType_: PurposeRestrictionTypes;

  /**
   * @return {number} The purpose Id associated with a publisher
   * purpose-by-vendor restriction that resulted in a different consent or LI
   * status than the consent or LI purposes allowed lists.
   */
  public get purposeId(): number {

    return this.purposeId_;

  }
  /**
   * @param {number} idNum - The purpose Id associated with a publisher
   * purpose-by-vendor restriction that resulted in a different consent or LI
   * status than the consent or LI purposes allowed lists.
   */
  public set purposeId(idNum: number) {

    if (idNum !== 1 && PurposeRestriction.availablePurposeIds.has(idNum)) {

      this.purposeId_ = idNum;

    } else {

      throw new TCModelError('purposeId', idNum);

    }

  }

  public get restrictionType(): PurposeRestrictionTypes {

    return this.restrictionType_;

  }

  public set restrictionType(value: PurposeRestrictionTypes) {

    this.restrictionType_ = value;

  }

}
export {PurposeRestriction};
