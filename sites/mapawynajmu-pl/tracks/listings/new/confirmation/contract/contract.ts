// import { SetApp, SetControl, SetData, SetErrors, SetInputs } from "../../../../../../../lib/types/setters";
import { Assets } from '../../../../../../common/types/asset';
import { Lang } from '../../../../common/types/lang';

export interface ListingsNewConfirmationContract {
  app: ListingsNewApp;
  assets: Assets;
  control: ListingsNewControl;
  data: ListingsNewData;
  //   links: ListingsNewLinks;
  inputs: ListingsNewInputs;
  errors: ListingsNewErrors;
  texts: ListingsNewTexts;
  // setApp: SetApp;
  // setData: SetData;
  // setInputs: SetInputs;
  // setErrors: SetErrors;
  // setControl: SetControl;
}

export interface ListingsNewApp {
  lang: Lang;
}

export interface ListingsNewControl {
}

export interface ListingsNewData {
  announcement: {
    href: string;
    image: string;
    title: string;
  };
}

export interface ListingsNewTexts {
  congratulations: string;
  socialImageExplanation: string;
}

export interface ListingsNewInputs {
}

export interface ListingsNewErrors {
}
