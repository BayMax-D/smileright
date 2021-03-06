import { NgModuleRef } from '@angular/core';

export interface Environment {
  production: boolean;
  nodeUrl: String,
  ENV_PROVIDERS: any;
  showDevModule: boolean;
  decorateModuleRef(modRef: NgModuleRef<any>): NgModuleRef<any>;
}
